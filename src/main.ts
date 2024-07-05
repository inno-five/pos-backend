import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { seedDatabase } from './seed';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const corsOptions = {
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  };
  app.enableCors(corsOptions);
  await seedDatabase();
  await app.listen(3000);
}
bootstrap();
