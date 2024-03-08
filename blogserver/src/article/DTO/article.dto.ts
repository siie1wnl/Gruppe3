export class ArticleDTO {
  readonly _id: string;
  readonly title: string;
  readonly author: string;
  readonly description: string;
  readonly content: string;
  readonly image: Buffer;
  readonly comments: [string];
}
