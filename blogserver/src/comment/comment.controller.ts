import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
  import { CommentDTO } from './DTO/comment.dto';
  import { CommentService } from './comment.service';
  import { Comment } from './interface/comment.interface';
  @Controller('comment')
  export class CommentController {
    constructor(private readonly commentService: CommentService) {}
    @Post()
    async create(@Body() commentDto: CommentDTO) {
      return this.commentService.create(commentDto);
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() commentDto: CommentDTO) {
      return this.commentService.update(id, commentDto);
    }
    @Delete(':id')
    async delete(@Param('id') id: string, @Body() commentDto: CommentDTO) {
      return this.commentService.delete(id, commentDto);
    }
  }
  