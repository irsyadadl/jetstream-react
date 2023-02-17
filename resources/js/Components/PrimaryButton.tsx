import classNames from 'clsx';
import React, { PropsWithChildren } from 'react';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function PrimaryButton({ children, ...props }: PropsWithChildren<Props>) {
    return (
        <button
            {...props}
            className={classNames(
                'inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-gray-700 focus:border-gray-900 focus:outline-none focus:ring focus:ring-gray-300 active:bg-gray-900 disabled:opacity-25',
                props.className
            )}>
            {children}
        </button>
    );
}
