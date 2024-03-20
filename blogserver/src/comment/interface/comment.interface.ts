import { Document } from 'mongoose';
export interface Comment extends Document {
  readonly _id: string;
  readonly author: string;
  readonly content: string;
  readonly childComments: string[];
}
