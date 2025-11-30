import mongoose from 'mongoose';

interface ICompany {
  companyName: string;
  tagline?: string;
  description?: string;
  phone: string;
  email: string;
  emergencyPhone?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  serviceArea?: string[];
  businessHours?: {
    monday: { open: string; close: string };
    tuesday: { open: string; close: string };
    wednesday: { open: string; close: string };
    thursday: { open: string; close: string };
    friday: { open: string; close: string };
    saturday: { open: string; close: string };
    sunday: { open: string; close: string };
  };
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  established?: number;
  taxId?: string;
  licenseNumber?: string;
  insuranceProvider?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const CompanySchema = new mongoose.Schema<ICompany>(
  {
    companyName: {
      type: String,
      required: true,
    },
    tagline: String,
    description: String,
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    emergencyPhone: String,
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    serviceArea: [String],
    businessHours: {
      monday: { open: String, close: String },
      tuesday: { open: String, close: String },
      wednesday: { open: String, close: String },
      thursday: { open: String, close: String },
      friday: { open: String, close: String },
      saturday: { open: String, close: String },
      sunday: { open: String, close: String },
    },
    socialLinks: {
      facebook: String,
      instagram: String,
      twitter: String,
      linkedin: String,
    },
    established: Number,
    taxId: String,
    licenseNumber: String,
    insuranceProvider: String,
  },
  { timestamps: true }
);

export default mongoose.models.Company ||
  mongoose.model<ICompany>('Company', CompanySchema);
