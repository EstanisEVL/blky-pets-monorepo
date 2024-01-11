export class NewUserDto {
  constructor(user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.age = user.age;
  }

  first_name: string;
  last_name: string;
  email: string;
  age: number;
}
