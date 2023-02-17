import React from 'react';
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm';
import LogoutOtherBrowserSessions from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm';
import TwoFactorAuthenticationForm from '@/Pages/Profile/Partials/TwoFactorAuthenticationForm';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm';
import useTypedPage from '@/Hooks/useTypedPage';
import SectionBorder from '@/Components/SectionBorder';
import AppLayout from '@/Layouts/AppLayout';
import { Session } from '@/types';

interface Props {
    sessions: Session[];
    confirmsTwoFactorAuthentication: boolean;
}

export default function Show({ sessions, confirmsTwoFactorAuthentication }: Props) {
    const { jetstream, auth } = useTypedPage().props;

    return (
        <AppLayout
            title={'Profile'}
            renderHeader={() => <h2 className='text-xl font-semibold leading-tight text-gray-800'>Profile</h2>}>
            <div>
                <div className='mx-auto max-w-7xl py-10 sm:px-6 lg:px-8'>
                    {jetstream.canUpdateProfileInformation ? (
                        <div>
                            <UpdateProfileInformationForm user={auth.user} />

                            <SectionBorder />
                        </div>
                    ) : null}

                    {jetstream.canUpdatePassword ? (
                        <div className='mt-10 sm:mt-0'>
                            <UpdatePasswordForm />

                            <SectionBorder />
                        </div>
                    ) : null}

                    {jetstream.canManageTwoFactorAuthentication ? (
                        <div className='mt-10 sm:mt-0'>
                            <TwoFactorAuthenticationForm requiresConfirmation={confirmsTwoFactorAuthentication} />

                            <SectionBorder />
                        </div>
                    ) : null}

                    <div className='mt-10 sm:mt-0'>
                        <LogoutOtherBrowserSessions sessions={sessions} />
                    </div>

                    {jetstream.hasAccountDeletionFeatures ? (
                        <>
                            <SectionBorder />

                            <div className='mt-10 sm:mt-0'>
                                <DeleteUserForm />
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </AppLayout>
    );
}
