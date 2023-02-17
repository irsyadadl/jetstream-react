import classNames from 'clsx';
import React, { PropsWithChildren } from 'react';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function SecondaryButton({ children, ...props }: PropsWithChildren<Props>) {
    return (
        <button
            {...props}
            className={classNames(
                'inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition hover:text-gray-500 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 active:bg-gray-50 active:text-gray-800 disabled:opacity-25',
                props.className
            )}>
            {children}
        </button>
    );
}
