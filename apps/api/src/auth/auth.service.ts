import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { createHashValue, isValidPwd } from 'src/utils/encrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { FindUserDto } from 'src/users/dto/find-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthAdminDto } from './dto/auth-admin.dto';
import { NewUserDto } from 'src/users/dto/new-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async registerUser(
    createUserDto: CreateUserDto,
  ): Promise<NewUserDto | undefined> {
    const hashedPwd = createHashValue(createUserDto.password);

    const userInfo = {
      ...createUserDto,
      password: hashedPwd,
    };

    const user = await this.usersService.create(userInfo);
    const newUser = new NewUserDto(user);

    return newUser;
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<FindUserDto | undefined> {
    const user = await this.usersService.findByEmail(email);

    if (!user) throw new NotFoundException('User not found.');

    const isValidComparePwd = isValidPwd(password, user.password);

    if (!isValidComparePwd)
      throw new UnauthorizedException('Incorrect password.');

    if (user && isValidComparePwd) {
      const foundUser = new FindUserDto(user);
      return foundUser;
    }

    return null;
  }

  async validateAdmin(
    email: string,
    password: string,
  ): Promise<AuthAdminDto | undefined> {
    const adminPwd = this.configService.get<string>('ADMIN_PWD');

    if (password !== adminPwd)
      throw new UnauthorizedException('Incorrect admin password.');

    const admin = {
      first_name: 'BLKY',
      last_name: 'PETS',
      email: email,
      age: 50,
      password: adminPwd,
      role: 'admin',
    };

    const foundAdmin = new AuthAdminDto(admin);
    return foundAdmin;
  }

  async login(user: any) {
    const payload = { name: user.name, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    };
  }

  async createPwd(inputEmail: string, inputPwd: string): Promise<string> {
    const checkUser = await this.usersService.findByEmail(inputEmail);

    if (!checkUser) throw new NotFoundException();

    const hashedPwd = createHashValue(inputPwd);

    const isValidComparePwd = isValidPwd(inputPwd, checkUser.password);

    if (!isValidComparePwd) {
      const updatedUser = await this.usersService.update(
        checkUser.email,
        hashedPwd,
      );

      return updatedUser;
    } else {
      throw new BadRequestException(
        'Error - Password cannot be the same as the existing one.',
      );
    }
  }
}
