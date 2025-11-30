import { useEffect, useState } from 'react';

interface CompanyData {
  _id?: string;
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
    [key: string]: { open: string; close: string };
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
}

export function useCompanyData() {
  const [company, setCompany] = useState<CompanyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await fetch('/api/company');
        if (!res.ok) throw new Error('Failed to fetch company data');
        const data = await res.json();
        setCompany(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch company data');
        console.error('Error fetching company:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, []);

  return { company, loading, error };
}
