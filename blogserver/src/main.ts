import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
   app.enableCors({
     origin: true,
     methods: ["GET", "POST", "PUT", "DELETE"],
   });
  await app.listen(3000);
}
bootstrap();
