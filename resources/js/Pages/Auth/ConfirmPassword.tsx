import { Head, useForm } from '@inertiajs/react';
import classNames from 'clsx';
import React from 'react';
import AuthenticationCard from '@/Components/AuthenticationCard';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import route from 'ziggy-js';

export default function ConfirmPassword() {
    const form = useForm({
        password: '',
    });

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        form.post(route('password.confirm'), {
            onFinish: () => form.reset(),
        });
    }

    return (
        <AuthenticationCard>
            <Head title='Secure Area' />

            <div className='mb-4 text-sm text-gray-600'>
                This is a secure area of the application. Please confirm your password before continuing.
            </div>

            <form onSubmit={onSubmit}>
                <div>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <TextInput
                        id='password'
                        type='password'
                        className='mt-1 block w-full'
                        value={form.data.password}
                        onChange={(e) => form.setData('password', e.currentTarget.value)}
                        required
                        autoComplete='current-password'
                        autoFocus
                    />
                    <InputError className='mt-2' message={form.errors.password} />
                </div>

                <div className='mt-4 flex justify-end'>
                    <PrimaryButton
                        className={classNames('ml-4', { 'opacity-25': form.processing })}
                        disabled={form.processing}>
                        Confirm
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticationCard>
    );
}
