export class CommentDTO {
  readonly _id: string;
  readonly author: string;
  readonly content: string;
  readonly parentCommentId: string;
}
