import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral';
    size?: 'sm' | 'md' | 'lg';
}

export default function Badge({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}: BadgeProps) {
    const baseStyles =
        'inline-flex items-center justify-center font-medium rounded-full transition-colors';

    const variants = {
        primary: 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300',
        secondary: 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900 dark:text-secondary-300',
        accent: 'bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300',
        success: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
        warning: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
        error: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
        neutral: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
    };

    const sizes = {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
    };

    return (
        <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
            {children}
        </span>
    );
}
