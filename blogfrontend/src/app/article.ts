export class Article {
  _id! :string | null;
  title!: string;
  author!: string;
  description!: string;
  content!: string;
  image!: string;
  comments!: string[];
updatedAt!: Date;
}
