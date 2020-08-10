import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './UserDto';

@Controller('user')
export class UserController {
    constructor (private readonly userServece: UserService){}
    @Post()
    create(@Body()userDto: UserDto):Promise<any>{
       return this.userServece.create(userDto) 
    }
}
