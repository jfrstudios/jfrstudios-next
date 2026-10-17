import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'icon';
type Size = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  showArrow?: boolean;
  iconPosition?: 'left' | 'right';
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  onClick?: never;
  disabled?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  external?: never;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

/**
 * Polished button/link component with multiple variants.
 * Used throughout the project for navigation and interactive CTAs.
 */
export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className,
    showArrow = false,
    iconPosition = 'right',
  } = props;

  const sizeMap = {
    sm: 'text-[12px] px-4 py-2',
    lg: 'text-[15px] px-7 py-4',
  };

  const baseClass = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight uppercase whitespace-nowrap transition-all duration-250 ease-soft',
    size === 'md' && 'text-[13px] px-6 py-3',
    size !== 'md' && sizeMap[size],
    variant === 'primary' && 'bg-accent-300 text-ink-950 hover:bg-accent-200',
    variant === 'ghost' && 'border border-cream-50/20 text-cream-50 hover:border-accent-300 hover:text-accent-300',
    variant === 'icon' && 'w-12 h-12 border border-cream-50/20 text-cream-50 hover:border-accent-300 hover:text-accent-300',
    className
  );

  const content = (
    <>
      {showArrow && iconPosition === 'left' && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-250 ease-soft group-hover:-translate-x-1 group-hover:-translate-y-1" />
      )}
      <span>{children}</span>
      {showArrow && iconPosition === 'right' && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-250 ease-soft group-hover:translate-x-1 group-hover:-translate-y-1" />
      )}
    </>
  );

  if ('href' in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={baseClass}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={baseClass}
    >
      {content}
    </button>
  );
}