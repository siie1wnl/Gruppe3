import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ArticleDTO } from './DTO/article.dto';
import { Article } from './interface/article.interface';

@Injectable()
export class ArticleService {
  constructor(
    @Inject('ARTICLE_MODEL') private readonly articleModel: Model<Article>,
  ) {}

  async create(articleDto: ArticleDTO): Promise<Article> {
    console.log('Neuen Artikel erzeugen' + articleDto);
    const createdArticle = new this.articleModel(articleDto);
    return await createdArticle.save();
  }

  async findAll(): Promise<Article[]> {
    console.log('Alle Artikel liefern');
    let test = await this.articleModel.find().exec();
    console.log('>> ' + test);
    return await this.articleModel.find().exec();
  }

  async find(id: string): Promise<Article[] | any> {
    console.log('Artikel ' + id + ' liefern');
    return await this.articleModel.findById(id).exec();
    ;
  }

  async update(id: string, articleDto: ArticleDTO): Promise<Article> {
    return await this.articleModel.findByIdAndUpdate(id, articleDto);
  }

  async delete(id: string, articleDto: ArticleDTO): Promise<Article> {
    return await this.articleModel.findByIdAndDelete(id);
  }
}
