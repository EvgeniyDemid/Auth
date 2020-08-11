import { Controller, UseGuards, Post,Request, } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
  @Post('auth/login')
  async login(@Request() req) {
   return true
  }
}

