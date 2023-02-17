import React, { PropsWithChildren } from 'react';

interface Props {
    value?: string;
    htmlFor?: string;
}

export default function InputLabel({ value, htmlFor, children }: PropsWithChildren<Props>) {
    return (
        <label className='block text-sm font-medium text-gray-700' htmlFor={htmlFor}>
            {value || children}
        </label>
    );
}
