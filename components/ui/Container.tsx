import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'main';
  fullWidth?: boolean;
}

/**
 * Standard container — matches the max-width used across the design.
 */
export function Container({
  children,
  className,
  as: Element = 'div',
  fullWidth = false,
}: ContainerProps) {
  return (
    <Element
      className={cn(
        fullWidth ? 'w-full' : 'mx-auto w-full max-w-9xl px-6 md:px-10 xl:px-16',
        className
      )}
    >
      {children}
    </Element>
  );
}