import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService){}

    async validateUser(email: string, pass: string){
        const user = await this.userService.findOne(email)
        if( user && await bcrypt.compare(pass, user.password)){
             const {password,...result} = user;
             return result
        }
        return null
    }
}
