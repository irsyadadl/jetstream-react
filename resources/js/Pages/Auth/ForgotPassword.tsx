import { Head, useForm } from '@inertiajs/react';
import classNames from 'clsx';
import React from 'react';
import AuthenticationCard from '@/Components/AuthenticationCard';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import route from 'ziggy-js';

interface Props {
    status: string;
}

export default function ForgotPassword({ status }: Props) {
    const form = useForm({
        email: '',
    });

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        form.post(route('password.email'));
    }

    return (
        <AuthenticationCard>
            <Head title='Forgot Password' />

            <div className='mb-4 text-sm text-gray-600'>
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </div>

            {status && <div className='mb-4 text-sm font-medium text-green-600'>{status}</div>}

            <form onSubmit={onSubmit}>
                <div>
                    <InputLabel htmlFor='email'>Email</InputLabel>
                    <TextInput
                        id='email'
                        type='email'
                        className='mt-1 block w-full'
                        value={form.data.email}
                        onChange={(e) => form.setData('email', e.currentTarget.value)}
                        required
                        autoFocus
                    />
                    <InputError className='mt-2' message={form.errors.email} />
                </div>

                <div className='mt-4 flex items-center justify-end'>
                    <PrimaryButton className={classNames({ 'opacity-25': form.processing })} disabled={form.processing}>
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticationCard>
    );
}
