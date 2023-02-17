import classNames from 'clsx';
import React, { forwardRef } from 'react';

const TextInput = forwardRef<
    HTMLInputElement,
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>((props, ref) => (
    <input
        {...props}
        ref={ref}
        className={classNames(
            'rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
            props.className
        )}
    />
));

export default TextInput;
