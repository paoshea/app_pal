
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, User } from '../types/auth';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => void;
  register: (email: string, password: string, name: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: (email: string, _password: string) => {
        const mockUser: User = {
          id: '1',
          email,
          name: email.split('@')[0],
          isPowerUser: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        set({ user: mockUser, isAuthenticated: true, error: null });
      },

      register: (email: string, _password: string, name: string) => {
        const mockUser: User = {
          id: '1',
          email,
          name: name || email.split('@')[0],
          isPowerUser: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        set({ user: mockUser, isAuthenticated: true, error: null });
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
