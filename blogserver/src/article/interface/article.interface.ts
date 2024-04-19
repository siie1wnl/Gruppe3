import { Document } from 'mongoose';
export interface Article extends Document {
  readonly _id: string;
  readonly title: string;
  readonly author: string;
  readonly description: string;
  readonly content: string;
  readonly image: string;
  readonly comments: string[];
}
