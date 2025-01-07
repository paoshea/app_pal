
import { ErrorInfo } from 'react';
import { create } from 'zustand';

export type ToastType = 'success' | 'error' | 'info';

interface ToastState {
  message: string;
  type: ToastType;
  isVisible: boolean;
  showToast: (message: string, type: ToastType) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  message: '',
  type: 'info',
  isVisible: false,
  showToast: (message, type) => set({ message, type, isVisible: true }),
  hideToast: () => set({ isVisible: false })
}));

type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';

interface ErrorReport {
  message: string;
  stack?: string;
  severity: ErrorSeverity;
  timestamp: string;
  userAgent: string;
  url: string;
}

class ErrorReporting {
  private static instance: ErrorReporting;
  private readonly maxStoredErrors = 50;
  private readonly storageKey = 'app_error_logs';

  private constructor() {
    window.onerror = (message, source, lineno, colno, error) => {
      this.logError(error || new Error(message as string), 'high');
    };

    window.onunhandledrejection = (event) => {
      this.logError(event.reason, 'high');
    };
  }

  public static getInstance(): ErrorReporting {
    if (!ErrorReporting.instance) {
      ErrorReporting.instance = new ErrorReporting();
    }
    return ErrorReporting.instance;
  }

  public logError(error: Error, severity: ErrorSeverity = 'medium'): void {
    const errorReport: ErrorReport = {
      message: error.message,
      stack: error.stack,
      severity,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    this.storeError(errorReport);
    this.sendErrorToServer(errorReport);
  }

  private storeError(errorReport: ErrorReport): void {
    try {
      const stored = localStorage.getItem(this.storageKey);
      const errors: ErrorReport[] = stored ? JSON.parse(stored) : [];

      errors.unshift(errorReport);
      if (errors.length > this.maxStoredErrors) {
        errors.pop();
      }

      localStorage.setItem(this.storageKey, JSON.stringify(errors));
    } catch (e) {
      console.error('Failed to store error:', e);
    }
  }

  private async sendErrorToServer(errorReport: ErrorReport): Promise<void> {
    if (process.env.NODE_ENV === 'production') {
      try {
        await fetch('/api/error-reporting', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(errorReport),
        });
      } catch (e) {
        console.error('Failed to send error to server:', e);
      }
    }
  }
}

export const errorReporting = ErrorReporting.getInstance();

export function reportError(error: Error, errorInfo?: ErrorInfo) {
  const { showToast } = useToastStore.getState();
  
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  errorReporting.logError(error, 'high');
  showToast(error.message || 'An unexpected error occurred', 'error');
}
