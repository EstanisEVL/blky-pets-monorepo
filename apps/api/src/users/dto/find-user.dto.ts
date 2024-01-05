import { Cart } from 'src/carts/schemas/carts.schemas';
import { User } from '../schemas/users.schema';

export class FindUserDto {
  constructor(user: User) {
    this.name = `${user.first_name} ${user.last_name}`;
    this.email = user.email;
    this.age = user.age;
    this.carts = user.carts;
    this.role = user.role?.toUpperCase();
    this.last_connection = user.last_connection?.toLocaleString('es-AR');
  }
  name: string;
  email: string;
  age: number;
  carts: Cart[];
  role: string | 'ADMIN' | 'USER';
  last_connection: string;
}
