import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, error, helperText, id, ...props }, ref) => {
        const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={textareaId}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        {label}
                    </label>
                )}

                <textarea
                    ref={ref}
                    id={textareaId}
                    className={cn(
                        'w-full rounded-lg border px-4 py-3 text-base transition-all duration-200',
                        'placeholder:text-gray-400 dark:placeholder:text-gray-500',
                        'focus:outline-none focus:ring-2 focus:ring-offset-2',
                        'disabled:opacity-50 disabled:cursor-not-allowed',
                        'resize-y min-h-[120px]',
                        error
                            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                            : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500',
                        'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
                        className
                    )}
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={
                        error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
                    }
                    {...props}
                />

                {error && (
                    <p
                        id={`${textareaId}-error`}
                        className="mt-2 text-sm text-red-600 dark:text-red-400"
                        role="alert"
                    >
                        {error}
                    </p>
                )}

                {!error && helperText && (
                    <p
                        id={`${textareaId}-helper`}
                        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                    >
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export default Textarea;
