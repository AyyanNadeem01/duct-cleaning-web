'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Trash2, Edit, Plus } from 'lucide-react';

interface Service {
  _id: string;
  name: string;
  slug: string;
  summary: string;
  content: string;
  price?: string;
}

export default function ServicesPage() {
  const { token } = useAuth();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: '',
    slug: '',
    summary: '',
    content: '',
    price: '',
  });

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/services');
      const data = await res.json();
      setServices(data.data || []);
    } catch (err) {
      setError('Failed to load services');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `/api/services/${editingId}` : '/api/services';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to save');
      await fetchServices();
      setForm({ name: '', slug: '', summary: '', content: '', price: '' });
      setEditingId(null);
      setShowForm(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error saving service');
    }
  };

  const handleEdit = (service: Service) => {
    setForm(service);
    setEditingId(service._id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!token || !confirm('Delete this service?')) return;

    try {
      const res = await fetch(`/api/services/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to delete');
      await fetchServices();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error deleting service');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Services</h1>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setForm({ name: '', slug: '', summary: '', content: '', price: '' });
          }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={20} />
          Add Service
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {showForm && (
        <div className="mb-6 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">
            {editingId ? 'Edit Service' : 'New Service'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Service Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                required
              />
              <input
                type="text"
                placeholder="Slug (e.g., residential-cleaning)"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                required
              />
              <input
                type="text"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md text-gray-900"
              />
            </div>
            <textarea
              placeholder="Summary (short description)"
              value={form.summary}
              onChange={(e) => setForm({ ...form, summary: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
              rows={2}
            />
            <textarea
              placeholder="Full Content"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
              rows={4}
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setForm({ name: '', slug: '', summary: '', content: '', price: '' });
                }}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="grid gap-4">
          {services.map((service) => (
            <div key={service._id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{service.slug}</p>
                  <p className="text-gray-700 text-sm mb-2">{service.summary}</p>
                  {service.price && (
                    <p className="text-sm font-semibold text-blue-600">{service.price}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(service)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="p-2 text-red-600 hover:bg-red-100 rounded"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
