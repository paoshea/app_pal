
import { jwtDecode } from 'jwt-decode';

const TOKEN_KEY = 'auth_token';
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/[&]/g, '&amp;') // Escape ampersands
    .replace(/["]/g, '&quot;') // Escape quotes
    .replace(/[']/g, '&#x27;') // Escape single quotes
    .replace(/[/]/g, '&#x2F;') // Escape forward slashes
    .trim();
};

export const setToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem('token_timestamp', Date.now().toString());
};

export const getToken = (): string | null => {
  const token = localStorage.getItem(TOKEN_KEY);
  const timestamp = localStorage.getItem('token_timestamp');
  
  if (!token || !timestamp) {
    return null;
  }

  if (Date.now() - parseInt(timestamp) > SESSION_TIMEOUT) {
    clearToken();
    return null;
  }

  return token;
};

export const clearToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem('token_timestamp');
};

export const isTokenValid = (token: string): boolean => {
  try {
    const decoded = jwtDecode(token);
    return decoded && decoded.exp ? decoded.exp * 1000 > Date.now() : false;
  } catch {
    return false;
  }
};
