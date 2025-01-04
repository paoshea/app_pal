import React, { useState, useRef, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
}

export default function PullToRefresh({ onRefresh, children }: PullToRefreshProps) {
  const [isPulling, setIsPulling] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const pullStartY = useRef(0);
  const pullMoveY = useRef(0);
  const distanceThreshold = 80;
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current?.scrollTop === 0) {
      pullStartY.current = e.touches[0].clientY;
      setIsPulling(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPulling) return;

    pullMoveY.current = e.touches[0].clientY - pullStartY.current;
    if (pullMoveY.current > 0 && pullMoveY.current < distanceThreshold) {
      e.preventDefault();
      containerRef.current!.style.transform = `translateY(${pullMoveY.current}px)`;
    }
  };

  const handleTouchEnd = async () => {
    if (!isPulling) return;

    setIsPulling(false);
    containerRef.current!.style.transform = '';

    if (pullMoveY.current >= distanceThreshold) {
      setRefreshing(true);
      await onRefresh();
      setRefreshing(false);
    }

    pullStartY.current = 0;
    pullMoveY.current = 0;
  };

  return (
    <div
      ref={containerRef}
      className="min-h-full transition-transform"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {refreshing && (
        <div className="flex justify-center items-center h-16 bg-gray-50">
          <RefreshCw className="w-5 h-5 text-gray-400 animate-spin" />
        </div>
      )}
      {children}
    </div>
  );
}