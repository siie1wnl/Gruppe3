import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { commentProviders } from './comment.provider';
import { DatabaseModule } from '../database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [CommentController],
  providers: [CommentService, ...commentProviders],
  //exports: [ArticleService, ArticleController],
})
export class CommentModule {}
