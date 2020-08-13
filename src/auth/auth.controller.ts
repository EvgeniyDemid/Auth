import { Controller, UseGuards, Post,Request, } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';

@Controller()
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
   return true
  }
}

