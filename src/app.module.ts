import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb+srv://demidof:D19021987@customers-7nq5x.mongodb.net/customers?retryWrites=true&w=majority')
  ],
  controllers: [],
})
export class AppModule {}
