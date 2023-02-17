import { Head, Link, useForm } from '@inertiajs/react';
import classNames from 'clsx';
import React from 'react';
import AuthenticationCard from '@/Components/AuthenticationCard';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import route from 'ziggy-js';

interface Props {
    canResetPassword: boolean;
    status: string;
}

export default function Login({ canResetPassword, status }: Props) {
    const form = useForm({
        email: '',
        password: '',
        remember: '',
    });

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        form.post(route('login'), {
            onFinish: () => form.reset('password'),
        });
    }

    return (
        <AuthenticationCard>
            <Head title='login' />

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

                <div className='mt-4'>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <TextInput
                        id='password'
                        type='password'
                        className='mt-1 block w-full'
                        value={form.data.password}
                        onChange={(e) => form.setData('password', e.currentTarget.value)}
                        required
                        autoComplete='current-password'
                    />
                    <InputError className='mt-2' message={form.errors.password} />
                </div>

                <div className='mt-4'>
                    <label className='flex items-center'>
                        <Checkbox
                            name='remember'
                            checked={form.data.remember === 'on'}
                            onChange={(e) => form.setData('remember', e.currentTarget.checked ? 'on' : '')}
                        />
                        <span className='ml-2 text-sm text-gray-600'>Remember me</span>
                    </label>
                </div>

                <div className='mt-4 flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0'>
                    {canResetPassword && (
                        <div>
                            <Link
                                href={route('password.request')}
                                className='text-sm text-gray-600 underline hover:text-gray-900'>
                                Forgot your password?
                            </Link>
                        </div>
                    )}

                    <div className='flex items-center justify-end'>
                        <Link href={route('register')} className='text-sm text-gray-600 underline hover:text-gray-900'>
                            Need an account?
                        </Link>

                        <PrimaryButton
                            className={classNames('ml-4', { 'opacity-25': form.processing })}
                            disabled={form.processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </AuthenticationCard>
    );
}
