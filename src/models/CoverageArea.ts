import mongoose from 'mongoose';

const CoverageSchema = new mongoose.Schema({
  areaName: { type: String, required: true },
  slug: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default (mongoose.models.CoverageArea as mongoose.Model<any>) || mongoose.model('CoverageArea', CoverageSchema);
