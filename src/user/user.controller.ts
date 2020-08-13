import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './UserDto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService){}
    @Post()
    create(@Body()userDto: UserDto):Promise<any>{
       return this.userService.create(userDto) 
    }
    @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll():Promise<any>{
        return this.userService.findAll()
    }
}
