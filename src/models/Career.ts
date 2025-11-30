import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String },
  description: { type: String },
  requirements: { type: String },
  applyEmail: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default (mongoose.models.Career as mongoose.Model<any>) || mongoose.model('Career', CareerSchema);
