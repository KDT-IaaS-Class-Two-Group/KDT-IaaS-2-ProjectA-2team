import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Keyword, KeywordSchema } from './keyword.schema';
import { KeywordService } from './keyword.service';
import { KeywordController } from './keyword.controller';
// import * as dotenv from 'dotenv';
// dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ghkdwoals1005:0000@cluster0.mmiiheq.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0',
    ),
    MongooseModule.forFeature([{ name: Keyword.name, schema: KeywordSchema }]),
  ],
  controllers: [KeywordController],
  providers: [KeywordService],
})
export class AppModule {}
