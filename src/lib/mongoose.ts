import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  // don't throw here to keep dev flow flexible — route handlers should check and fail gracefully
  console.warn('MONGODB_URI not set — database operations will fail until it is provided');
}

/**
 * Use a global cache to reuse mongoose connection in serverless / hot-reload environments
 */
interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var _mongoose: CachedConnection | undefined;
}

let cached: CachedConnection = global._mongoose || { conn: null, promise: null };

if (!cached.promise) {
  const opts = {
    // useUnifiedTopology and useNewUrlParser not required in mongoose 6+, kept for clarity
  };
  cached.promise = mongoose.connect(MONGODB_URI || '', opts).then((m) => m);
}

export async function connect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) throw new Error('MONGODB_URI is not configured');
  cached.conn = await cached.promise;
  global._mongoose = cached;
  return cached.conn;
}

export default mongoose;
