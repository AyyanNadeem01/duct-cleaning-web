import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  summary: { type: String },
  content: { type: String },
  price: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default (mongoose.models.Service as mongoose.Model<any>) || mongoose.model('Service', ServiceSchema);
