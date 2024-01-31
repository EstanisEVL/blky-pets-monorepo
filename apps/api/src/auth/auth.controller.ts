import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
  Post,
  Request as Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { CartsService } from 'src/carts/carts.service';
import { CreateCartDto } from 'src/carts/dto/create-cart.dto';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AuthAdminDto } from './dto/auth-admin.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { FindUserDto } from 'src/users/dto/find-user.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { EmailInputDto } from './dto/auth-email.dto';
import { UserLoginDto } from './dto/auth-login.dto';
import { MailerService } from '@nestjs-modules/mailer';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly cartsService: CartsService,
    private readonly configService: ConfigService,
    private mailerService: MailerService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('current') // GET /api/auth/current
  async getCurrentUser(@Req() req: Request) {
    try {
      const user = req.user;

      return user;
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException(err.response.message);
      }
    }
  }

  @Post('sign-up') // POST /api/auth/sign-up
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const checkUser = await this.usersService.findByEmail(
        createUserDto.email,
      );

      if (checkUser)
        throw new BadRequestException('Error - User already exists.');

      return this.authService.registerUser(createUserDto);
    } catch (err) {
      if (err.status === HttpStatus.BAD_REQUEST)
        throw new BadRequestException(err.response.message);

      throw new InternalServerErrorException(`${err}`);
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('admin-login') // POST /api/auth/admin-login
  async logAdminIn(@Req() req: Request) {
    try {
      const admin = req.user;
      const userArr = await this.usersService.findAll();
      const users = userArr.map((user) => new FindUserDto(user));

      return { admin, users };
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.message);
      if (err.status === HttpStatus.UNAUTHORIZED)
        throw new UnauthorizedException(err.response.message);
      throw new InternalServerErrorException(`${err}`);
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('login') // POST /api/auth/login
  async logUserIn(@Req() req: Request) {
    try {
      const userInfo = await this.authService.login(req.user);
      const user = await this.usersService.findByEmail(userInfo.user.email);
      const userCarts = user.carts;

      if (userCarts.length === 0) {
        const newCart = new CreateCartDto([]);
        const cart = await this.cartsService.create(newCart);
        const createdCart = await this.cartsService.findById(String(cart._id));
        userCarts.push(createdCart);

        const lastConnection = new Date();
        user.last_connection = lastConnection;

        await user.save();

        return { access_token: userInfo.access_token };
      } else {
        const lastConnection = new Date();
        user.last_connection = lastConnection;

        await user.save();

        return { access_token: userInfo.access_token };
      }
    } catch (err) {
      if (err.status === HttpStatus.UNAUTHORIZED)
        throw new UnauthorizedException(err.response.message);
      throw new InternalServerErrorException(`${err}`);
    }
  }

  @Post('password/new') // POST /api/auth/password/new
  async sendResetEmail(@Body() emailInputDto: EmailInputDto): Promise<string> {
    try {
      const checkUser = await this.usersService.findByEmail(
        emailInputDto.email,
      );

      if (!checkUser) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Error - User not found.',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      return 'Recovery password sent';
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.message);

      if (err.status === HttpStatus.BAD_REQUEST)
        throw new BadRequestException(err.response.message);

      throw new InternalServerErrorException(`${err}`);
    }
  }

  @Post('password/reset') // POST /api/auth/password/reset
  async resetUserPwd(@Body() userLoginDto: UserLoginDto) {
    try {
      return this.authService.createPwd(
        userLoginDto.email,
        userLoginDto.password,
      );
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.message);
      if (err.status === HttpStatus.BAD_REQUEST)
        throw new BadRequestException(err.response.message);

      throw new InternalServerErrorException(`${err}`);
    }
  }
}
