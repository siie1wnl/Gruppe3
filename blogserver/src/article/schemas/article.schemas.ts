import * as mongoose from 'mongoose';
export const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
  image: { type: String, required: false },
  comments: [{ type: String, required: false}],
});
