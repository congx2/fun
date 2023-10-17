import { NestFactory } from '@nestjs/core'
import { AppModule } from '@modules/app/app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

const bootstrapSwagger = app => {
  const config = new DocumentBuilder()
    .setTitle('接口文档')
    .setDescription('接口文档描述')
    .setVersion('1.0')
    .addTag('api')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
}

const bootstrapApp = async () => {
  const app = await NestFactory.create(AppModule)
  bootstrapSwagger(app)
  await app.listen(3000)
}

bootstrapApp()
