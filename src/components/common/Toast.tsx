
import React, { useEffect } from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type = 'info', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  }[type];

  const Icon = {
    success: CheckCircle,
    error: AlertCircle,
    info: AlertCircle
  }[type];

  return (
    <div className={`fixed bottom-4 right-4 flex items-center ${bgColor} text-white px-4 py-2 rounded-lg shadow-lg`}>
      <Icon className="w-5 h-5 mr-2" />
      <span>{message}</span>
      <button onClick={onClose} className="ml-4">
        <XCircle className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Toast;
