import { NestFactory } from '@nestjs/core';
import { StudentModule } from './student/student.module';
//import { TopicsModule } from './topics/topics.module';


async function bootstrap() {
  const app = await NestFactory.create(StudentModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
