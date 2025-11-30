import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default (mongoose.models.AdminUser as mongoose.Model<any>) || mongoose.model('AdminUser', AdminSchema);
