export class AuthAdminDto {
  constructor(admin) {
    this.name = `${admin.first_name} ${admin.last_name}`;
    this.email = admin.email;
    this.age = admin.age;
    this.role = admin.role?.toUpperCase();
  }
  name: string;
  email: string;
  age: number;
  role: string;
}
