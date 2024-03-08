import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ArticleController } from './article/article.controller';
//import { ArticleService } from './article/article.service';
import { ArticleModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [ArticleModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
