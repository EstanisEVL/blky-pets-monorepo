import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  InternalServerErrorException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { FindUserDto } from './dto/find-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { User } from './schemas/users.schema';
import { CartsService } from 'src/carts/carts.service';
import { ProductsService } from 'src/products/products.service';
import { UserLoginDto } from 'src/auth/dto/auth-login.dto';

// Pasar validaciones a un middleware

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly cartsService: CartsService,
    private readonly productsService: ProductsService,
  ) {}

  // PARA EL ADMIN:
  @Get() // GET /users
  async getUsers(): Promise<FindUserDto[]> {
    try {
      const data = await this.usersService.findAll();

      const users = data.map((user: User) => new FindUserDto(user));

      return users;
    } catch (err) {
      // Agregar logger

      throw new InternalServerErrorException(`${err}`);
    }
  }

  // PARA EL ADMIN:
  @Delete() // DELETE /users
  async delete() {
    try {
      const currentDate: Date = new Date();
      const limitDate: Date = new Date(currentDate);
      limitDate.setDate(currentDate.getDate() - 2);

      const inactiveUsers = await this.usersService.findInactive(limitDate);

      if (inactiveUsers.length === 0) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Error - No users found.',
          },
          HttpStatus.NOT_FOUND,
        );
      } else {
        // Crear un nuevo arreglo de carritos de usuarios inactivos
        // const userCarts = inactiveUsers.map((user) =>
        //   user.carts.map((cart) => String(cart._id)),
        // );

        const userEmails = inactiveUsers.map((user) => user.email);

        // Borrar carritos
        // for(const cart of userCarts) {

        // }

        // Enviar mail de aviso a cada usuario
        // for(const user of userEmails) {

        // }

        const data = await this.usersService.delete(limitDate);
        return data;
      }
    } catch (err) {
      // agregar logger
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.error);

      throw new InternalServerErrorException(`${err}`);
    }
  }
}
