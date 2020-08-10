import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.shema';

@Module({
  imports:[MongooseModule.forFeature([{name: "SuperUser", schema: UserSchema}])],
  providers: [UserService],
  controllers: [UserController],
  exports:[UserService]
})
export class UserModule {}
