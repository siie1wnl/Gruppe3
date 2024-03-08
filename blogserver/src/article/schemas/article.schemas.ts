import * as mongoose from 'mongoose';
export const ArticleSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
  image: { type: Buffer, required: true },
  comments: { type: [String], required: false},
});
