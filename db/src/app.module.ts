
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ghkdwoals1005:0000@cluster0.mmiiheq.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0'),
    // 여기에 추가적인 모듈들을 import할 수 있습니다.
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}