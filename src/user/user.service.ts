import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './user.interfase';
import { UserDto } from './UserDto';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('SuperUser') private readonly userModel: Model<IUser>
  ) {}
  async create(userDro: UserDto): Promise<any> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(userDro.password, salt);
    const createdUser = new this.userModel(
      _.assignIn(userDro, { password: hash }),
    );
    return await createdUser.save();
  }
}
