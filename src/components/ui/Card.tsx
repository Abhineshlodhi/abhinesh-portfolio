import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass';
    hover?: boolean;
    children: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', hover = false, children, ...props }, ref) => {
        const baseStyles = 'rounded-xl transition-all duration-300';

        const variants = {
            default:
                'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-elevation-2',
            glass:
                'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-white/20 dark:border-gray-800/50 shadow-elevation-2',
        };

        const hoverStyles = hover
            ? 'hover:shadow-elevation-3 hover:-translate-y-1 hover:border-primary-400 dark:hover:border-primary-600'
            : '';

        return (
            <div
                ref={ref}
                className={cn(baseStyles, variants[variant], hoverStyles, className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
    return (
        <div className={cn('p-6 pb-3', className)} {...props}>
            {children}
        </div>
    );
}

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export function CardBody({ className, children, ...props }: CardBodyProps) {
    return (
        <div className={cn('p-6 pt-3', className)} {...props}>
            {children}
        </div>
    );
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
    return (
        <div className={cn('p-6 pt-3 border-t border-gray-200 dark:border-gray-700', className)} {...props}>
            {children}
        </div>
    );
}

export default Card;
