import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { StudentModule } from './student/student.module';

async function bootstrap() {
  const app = await NestFactory.create(StudentModule, { cors: true });
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
