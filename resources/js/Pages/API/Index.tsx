import React from 'react';
import APITokenManager from '@/Pages/API/Partials/APITokenManager';
import AppLayout from '@/Layouts/AppLayout';
import { ApiToken } from '@/types';

interface Props {
    tokens: ApiToken[];
    availablePermissions: string[];
    defaultPermissions: string[];
}

export default function ApiTokenIndex({ tokens, availablePermissions, defaultPermissions }: Props) {
    return (
        <AppLayout title={'API Tokens'}>
            <div>
                <div className='mx-auto max-w-7xl py-10 sm:px-6 lg:px-8'>
                    <APITokenManager
                        tokens={tokens}
                        availablePermissions={availablePermissions}
                        defaultPermissions={defaultPermissions}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
