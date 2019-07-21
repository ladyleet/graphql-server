import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private readonly usermodel: Model<User>) {}

  async findbyid(id: string): Promise<User> {
    return this.usermodel.findById(id).exec();
  }
}
