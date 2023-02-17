import CreateTeamForm from '@/Pages/Teams/Partials/CreateTeamForm';
import AppLayout from '@/Layouts/AppLayout';
import React from 'react';

export default function Create() {
    return (
        <AppLayout
            title='Create Team'
            renderHeader={() => <h2 className='text-xl font-semibold leading-tight text-gray-800'>Create Team</h2>}>
            <div>
                <div className='mx-auto max-w-7xl py-10 sm:px-6 lg:px-8'>
                    <CreateTeamForm />
                </div>
            </div>
        </AppLayout>
    );
}
