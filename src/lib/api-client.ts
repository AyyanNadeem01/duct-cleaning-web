/**
 * Simple API helpers for admin dashboard
 */

export async function apiCall<T>(
  endpoint: string,
  method: string = 'GET',
  body?: any,
  token?: string
): Promise<T> {
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(endpoint, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }

  return res.json() as Promise<T>;
}

export async function getList<T>(endpoint: string, token?: string): Promise<T[]> {
  const data = await apiCall<{ data: T[] }>(endpoint, 'GET', undefined, token);
  return data.data || [];
}

export async function getOne<T>(endpoint: string, token?: string): Promise<T> {
  const data = await apiCall<{ data: T }>(endpoint, 'GET', undefined, token);
  return data.data;
}

export async function createItem<T>(endpoint: string, body: any, token: string): Promise<T> {
  const data = await apiCall<{ data: T }>(endpoint, 'POST', body, token);
  return data.data;
}

export async function updateItem<T>(endpoint: string, body: any, token: string): Promise<T> {
  const data = await apiCall<{ data: T }>(endpoint, 'PUT', body, token);
  return data.data;
}

export async function deleteItem(endpoint: string, token: string): Promise<void> {
  await apiCall(endpoint, 'DELETE', undefined, token);
}
