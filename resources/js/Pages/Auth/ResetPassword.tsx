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
    token: string;
    email: string;
}

export default function ResetPassword({ token, email }: Props) {
    const form = useForm({
        token,
        email,
        password: '',
        password_confirmation: '',
    });

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        form.post(route('password.update'), {
            onFinish: () => form.reset('password', 'password_confirmation'),
        });
    }

    return (
        <AuthenticationCard>
            <Head title='Reset Password' />

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
                        autoComplete='new-password'
                    />
                    <InputError className='mt-2' message={form.errors.password} />
                </div>

                <div className='mt-4'>
                    <InputLabel htmlFor='password_confirmation'>Confirm Password</InputLabel>
                    <TextInput
                        id='password_confirmation'
                        type='password'
                        className='mt-1 block w-full'
                        value={form.data.password_confirmation}
                        onChange={(e) => form.setData('password_confirmation', e.currentTarget.value)}
                        required
                        autoComplete='new-password'
                    />
                    <InputError className='mt-2' message={form.errors.password_confirmation} />
                </div>

                <div className='mt-4 flex items-center justify-end'>
                    <PrimaryButton className={classNames({ 'opacity-25': form.processing })} disabled={form.processing}>
                        Reset Password
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticationCard>
    );
}
