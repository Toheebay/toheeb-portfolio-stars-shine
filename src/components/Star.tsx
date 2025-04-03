
import React from 'react';
import { cn } from '@/lib/utils';

interface StarProps {
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  className?: string;
  color?: 'green' | 'red';
}

const Star: React.FC<StarProps> = ({ 
  size = 3, 
  top, 
  left, 
  right, 
  bottom, 
  delay = 0,
  className,
  color = 'green'
}) => {
  const animationClass = delay === 0 
    ? 'animate-star-twinkle' 
    : delay === 1 
      ? 'animate-star-twinkle-delay' 
      : 'animate-star-twinkle-delay-2';
  
  return (
    <div 
      className={cn(
        color === 'green' ? 'star' : 'red-star', 
        animationClass,
        className
      )}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        top,
        left,
        right,
        bottom,
      }}
    />
  );
};

export default Star;
