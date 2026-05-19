import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    background?: 'default' | 'muted' | 'gradient';
    animate?: boolean;
}

export default function Section({
    className,
    children,
    background = 'default',
    animate = true,
    id,
    ...props
}: SectionProps) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    const backgrounds = {
        default: 'bg-white dark:bg-gray-900',
        muted: 'bg-gray-50 dark:bg-gray-800/50',
        gradient:
            'bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900',
    };

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            id={id}
            className={cn(
                'section-padding relative',
                backgrounds[background],
                animate && 'transition-opacity duration-700',
                animate && (isVisible ? 'opacity-100' : 'opacity-0'),
                className
            )}
            {...props}
        >
            <div className="container-custom">{children}</div>
        </section>
    );
}

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    className?: string;
}

export function SectionHeader({
    title,
    subtitle,
    align = 'center',
    className,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                'mb-12 md:mb-16',
                align === 'center' && 'text-center',
                align === 'left' && 'text-left',
                className
            )}
        >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 text-gray-900 dark:text-white">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
