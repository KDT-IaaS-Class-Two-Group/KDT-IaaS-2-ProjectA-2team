import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { signup, signupSchema } from './signup.schema';
import { signupService } from './signup.service';
import { signupController } from './signup.controller';
// import * as dotenv from 'dotenv';
// dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ghkdwoals1005:0000@cluster0.mmiiheq.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0',
    ),
    MongooseModule.forFeature([{ name: signup.name, schema: signupSchema }]),
  ],
  controllers: [signupController],
  providers: [signupService],
})
export class AppModule {}
