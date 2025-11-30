'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Trash2, Edit, Plus } from 'lucide-react';

interface CoverageArea {
  _id: string;
  areaName: string;
  slug?: string;
  description?: string;
}

export default function CoveragePage() {
  const { token } = useAuth();
  const [areas, setAreas] = useState<CoverageArea[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    areaName: '',
    slug: '',
    description: '',
  });

  const fetchAreas = async () => {
    try {
      const res = await fetch('/api/coverage');
      const data = await res.json();
      setAreas(data.data || []);
    } catch {
      setError('Failed to load coverage areas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAreas();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `/api/coverage/${editingId}` : '/api/coverage';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to save');
      await fetchAreas();
      setForm({ areaName: '', slug: '', description: '' });
      setEditingId(null);
      setShowForm(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error saving area');
    }
  };

  const handleEdit = (area: CoverageArea) => {
    setForm({
      areaName: area.areaName,
      slug: area.slug || '',
      description: area.description || '',
    });
    setEditingId(area._id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!token || !confirm('Delete this coverage area?')) return;

    try {
      const res = await fetch(`/api/coverage/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to delete');
      await fetchAreas();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error deleting area');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Coverage Areas</h1>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setForm({ areaName: '', slug: '', description: '' });
          }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={20} />
          Add Area
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
            {editingId ? 'Edit Coverage Area' : 'New Coverage Area'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Area Name"
              value={form.areaName}
              onChange={(e) => setForm({ ...form, areaName: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
              required
            />
            <input
              type="text"
              placeholder="Slug (optional)"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
            />
            <textarea
              placeholder="Description (optional)"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
              rows={3}
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
                  setForm({ areaName: '', slug: '', description: '' });
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
          {areas.map((area) => (
            <div key={area._id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{area.areaName}</h3>
                  {area.slug && <p className="text-sm text-gray-500 mb-2">{area.slug}</p>}
                  {area.description && (
                    <p className="text-gray-700 text-sm">{area.description}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(area)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(area._id)}
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
