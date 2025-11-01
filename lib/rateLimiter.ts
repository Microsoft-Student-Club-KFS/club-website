/**
 * Simple in-memory rate limiter for development
 * 
 * NOTE: For production, use a proper rate limiting solution like:
 * - Redis-based rate limiter
 * - Upstash Rate Limit
 * - Vercel Edge Config
 * 
 * This implementation is for development/demo only and will not work
 * across multiple server instances or persist between restarts.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const limiterStore = new Map<string, RateLimitEntry>();

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of limiterStore.entries()) {
    if (entry.resetTime < now) {
      limiterStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

/**
 * Check if a request should be rate limited
 * @param identifier Unique identifier (e.g., IP address, user ID)
 * @param maxRequests Maximum number of requests allowed
 * @param windowMs Time window in milliseconds
 * @returns true if rate limit exceeded, false otherwise
 */
export function isRateLimited(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 60 * 1000 // 1 minute default
): boolean {
  const now = Date.now();
  const entry = limiterStore.get(identifier);

  // No previous requests or window expired
  if (!entry || entry.resetTime < now) {
    limiterStore.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return false;
  }

  // Increment count
  entry.count++;

  // Check if limit exceeded
  if (entry.count > maxRequests) {
    return true;
  }

  return false;
}

/**
 * Get the client IP from request headers
 * @param request Next.js request object
 * @returns IP address or 'unknown'
 */
export function getClientIp(request: Request): string {
  // Check common headers for real IP (when behind proxy)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  // Fallback
  return 'unknown';
}
