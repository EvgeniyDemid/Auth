import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb+srv://demidof:D19021987@customers-7nq5x.mongodb.net/customers?retryWrites=true&w=majority'),
    AuthModule
  ],
  controllers: [],
  providers: [AuthService],
})
export class AppModule {}
