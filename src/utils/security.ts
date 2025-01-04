export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .trim();
};

export const validateInput = (input: string, maxLength: number = 1000): boolean => {
  return input.length > 0 && input.length <= maxLength;
};

export const generateCSRFToken = (): string => {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

export const rateLimit = (() => {
  const limits = new Map<string, number[]>();
  const WINDOW_MS = 60000; // 1 minute
  const MAX_REQUESTS = 60; // 60 requests per minute

  return (key: string): boolean => {
    const now = Date.now();
    const timestamps = limits.get(key) || [];
    
    // Remove timestamps outside current window
    const validTimestamps = timestamps.filter(t => now - t < WINDOW_MS);
    
    if (validTimestamps.length >= MAX_REQUESTS) {
      return false;
    }
    
    validTimestamps.push(now);
    limits.set(key, validTimestamps);
    return true;
  };
})();