import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './UserDto';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService){}
    @Post()
    create(@Body()userDto: UserDto):Promise<any>{
       return this.userService.create(userDto) 
    }
    @Get()
    findAll():Promise<any>{
        return this.userService.findAll()
    }
}
