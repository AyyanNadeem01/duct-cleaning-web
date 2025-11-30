import mongoose from 'mongoose';

const AboutSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String },
  updatedAt: { type: Date, default: Date.now }
});

export default (mongoose.models.About as mongoose.Model<any>) || mongoose.model('About', AboutSchema);
