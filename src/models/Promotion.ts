import mongoose from 'mongoose';

const PromotionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String },
  startsAt: { type: Date },
  endsAt: { type: Date },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export default (mongoose.models.Promotion as mongoose.Model<any>) || mongoose.model('Promotion', PromotionSchema);
