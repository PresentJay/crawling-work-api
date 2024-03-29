import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'warn', 'error'],
  });

  const configService = app.get(ConfigService);
  const config = new DocumentBuilder()
    .setTitle('crawling-work-api')
    .setDescription('crawling-work management backend api')
    .setVersion('1.0')
    .addTag('api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const port = configService.get('API_PORT');
  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
