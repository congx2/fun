import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
// import { MongooseModule } from '@nestjs/mongoose'
import { ArticleModule } from '@modules/article/article.module'
import { BannerModule } from '@modules/banner/banner.module'
import { CommentModule } from '@modules/comment/comment.module'
import { NewsModule } from '@modules/news/news.module'
import { SiteModule } from '@modules/site/site.module'
import { WorkModule } from '@modules/work/work.module'

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/nest'),
    ArticleModule,
    BannerModule,
    CommentModule,
    NewsModule,
    SiteModule,
    WorkModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
