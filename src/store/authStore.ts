import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, User } from '../types/auth';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  upgradeToProUser: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          // TODO: Implement actual API call
          const mockUser: User = {
            id: '1',
            email,
            name: 'John Doe',
            isPowerUser: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
          set({ user: mockUser, isAuthenticated: true });
        } catch (error) {
          set({ error: 'Failed to login' });
        } finally {
          set({ isLoading: false });
        }
      },

      register: async (email: string, password: string, name: string) => {
        set({ isLoading: true, error: null });
        try {
          // TODO: Implement actual API call
          const mockUser: User = {
            id: '1',
            email,
            name,
            isPowerUser: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
          set({ user: mockUser, isAuthenticated: true });
        } catch (error) {
          set({ error: 'Failed to register' });
        } finally {
          set({ isLoading: false });
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      upgradeToProUser: async () => {
        set({ isLoading: true, error: null });
        try {
          // TODO: Implement actual API call
          set((state) => ({
            user: state.user ? { ...state.user, isPowerUser: true } : null,
          }));
        } catch (error) {
          set({ error: 'Failed to upgrade account' });
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);