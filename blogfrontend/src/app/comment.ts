  export class Comment {
    _id!: string;
    title!: string;
    author!: string;
    content!: string;
    updatedAt!: Date;
    childComments!: string[];
  }
  