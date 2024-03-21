import * as mongoose from 'mongoose';
export const CommentSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  childComments: [{ type: String, required: false }],
  updatedAt: { type: Date, default: Date.now },
});
