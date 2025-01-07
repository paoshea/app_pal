import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, User } from '../types/auth';
import { setToken, clearToken, sanitizeInput } from '../utils/security';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  checkSession: () => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        try {
          set({ isLoading: true });
          const sanitizedEmail = sanitizeInput(email);
          // Mock token for demo
          const token = 'mock_jwt_token';
          setToken(token);

          const mockUser: User = {
            id: '1',
            email: sanitizedEmail,
            name: sanitizedEmail.split('@')[0],
            isPowerUser: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          set({ user: mockUser, isAuthenticated: true, error: null });
        } catch (error) {
          set({ error: 'Login failed' });
        } finally {
          set({ isLoading: false });
        }
      },

      register: async (email: string, password: string, name: string) => {
        try {
          set({ isLoading: true, error: null });
          const sanitizedEmail = sanitizeInput(email);
          const sanitizedName = sanitizeInput(name);

          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 1000));

          const mockUser: User = {
            id: '1',
            email: sanitizedEmail,
            name: sanitizedName,
            isPowerUser: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          setToken('mock_jwt_token');
          set({ user: mockUser, isAuthenticated: true, error: null });
          return mockUser;
        } catch (error) {
          set({ error: 'Registration failed', isAuthenticated: false });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      logout: () => {
        clearToken();
        set({ user: null, isAuthenticated: false });
      },

      checkSession: () => {
        const token = localStorage.getItem('auth_token');
        if (!token) {
          set({ user: null, isAuthenticated: false });
        }
      },
      signOut: () => set({ isAuthenticated: false, user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);