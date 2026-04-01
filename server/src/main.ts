import { NestFactory } from '@nestjs/core';
//import { StudentModule } from './student.module';
import { TopicsModule } from './topics.module';


async function bootstrap() {
  const app = await NestFactory.create(TopicsModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
