import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //! 웹 브라우저가 도메인 간 요청을 제어.
  //! 한 웹사이트에서 로드된 웹 페이지가 다른 도메인에서 요청하는 리소스에 접근하지 못하도록 제한
  //! CORS는 이러한 제한을 완화하여 특정 조건 하에서 다른 도메인에서 리소스를 요청할 수 있도록 허용
  await app.listen(3001);
}
bootstrap();
