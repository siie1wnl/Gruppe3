import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CommentDTO } from './DTO/comment.dto';
import { Comment } from './interface/comment.interface';
@Injectable()
export class CommentService {
  constructor(
    @Inject('COMMENT_MODEL') private readonly commentModel: Model<Comment>,
  ) {}
  async create(commentDto: CommentDTO): Promise<Comment> {
    console.log('Neuen Kommentar erzeugen' + JSON.stringify(commentDto));
    const createdArticle = new this.commentModel(commentDto);
    return await createdArticle.save();
  }
  async update(id: string, commentDto: CommentDTO): Promise<Comment> {
    return await this.commentModel.findByIdAndUpdate(id, commentDto);
  }
  async find(id: string): Promise<Comment[] | any> {
    console.log('Kommentar ' + id + ' liefern');
    return await this.commentModel.findById(id).exec();
  }
  async delete(id: string): Promise<Comment> {
    return await this.commentModel.findByIdAndDelete(id);
  }
}
