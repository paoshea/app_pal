
import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: true, // Set to true for development
  setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
}));
