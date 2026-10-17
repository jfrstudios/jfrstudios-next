import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Light = cream background, dark = ink (default) */
  theme?: 'light' | 'dark';
  /** Vertical spacing multiplier */
  spacing?: 'sm' | 'lg' | 'xl';
}

/**
 * Page section wrapper with consistent vertical rhythm.
 */
export function Section({
  children,
  className,
  id,
  theme = 'dark',
  spacing = 'lg',
}: SectionProps) {
  const spacingMap = {
    sm: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
    xl: 'py-32 md:py-48',
  };

  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden',
        theme === 'dark' ? 'bg-ink-950 text-cream-50' : 'bg-cream-50 text-ink-950',
        spacingMap[spacing],
        className
      )}
    >
      {children}
    </section>
  );
}