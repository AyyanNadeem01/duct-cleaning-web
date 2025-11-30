import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default (mongoose.models.ContactSubmission as mongoose.Model<any>) || mongoose.model('ContactSubmission', ContactSchema);
