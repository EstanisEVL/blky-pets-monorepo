import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Devuelven tipos Promise:
  async findAll(): Promise<User[] | undefined> {
    try {
      return await this.userModel.find();
    } catch (err) {
      return err;
    }
  }

  // Revisar si los ids son numeros o ObjectId de Mongo:
  async findById(id: number): Promise<User | undefined> {
    try {
      const user = await this.userModel.findOne({ _id: id });

      return user;
    } catch (err) {
      return err;
    }
  }

  async findByEmail(email: string) {
    try {
      const user = await this.userModel.findOne({ email: email });

      return user;
    } catch (err) {
      return err;
    }
  }

  async findInactive(date: Date): Promise<User[] | undefined> {
    try {
      const inactiveUsers = await this.userModel.find({
        last_connection: { $lt: date },
      });

      return inactiveUsers;
    } catch (err) {
      return err;
    }
  }

  async create(createUserDto: CreateUserDto): Promise<User | undefined> {
    try {
      const user = await this.userModel.create(createUserDto);

      return user;
    } catch (err) {
      return err;
    }
  }

  async update(email: string, password: string) {
    try {
      const updatedUser = await this.userModel.updateOne(
        { email: email },
        { password: password },
      );

      return updatedUser;
    } catch (err) {
      return err;
    }
  }

  async delete(date: Date) {
    try {
      const deletedUser = this.userModel.deleteMany({
        last_connection: { $lt: date },
      });

      return deletedUser;
    } catch (err) {
      return err;
    }
  }
}
