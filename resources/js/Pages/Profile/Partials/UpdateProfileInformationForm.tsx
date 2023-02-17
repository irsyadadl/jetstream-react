import { router, useForm } from '@inertiajs/react';
import classNames from 'clsx';
import React, { useRef, useState } from 'react';
import ActionMessage from '@/Components/ActionMessage';
import FormSection from '@/Components/FormSection';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SecondaryButton from '@/Components/SecondaryButton';
import { User } from '@/types';
import route from 'ziggy-js';
import useTypedPage from '@/Hooks/useTypedPage';

interface Props {
    user: User;
}

export default function UpdateProfileInformationForm({ user }: Props) {
    const form = useForm({
        _method: 'PUT',
        name: user.name,
        email: user.email,
        photo: null as File | null,
    });
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const photoRef = useRef<HTMLInputElement>(null);
    const { jetstream } = useTypedPage().props;

    function updateProfileInformation() {
        form.post(route('user-profile-information.update'), {
            errorBag: 'updateProfileInformation',
            preserveScroll: true,
            onSuccess: () => clearPhotoFileInput(),
        });
    }

    function selectNewPhoto() {
        photoRef.current?.click();
    }

    function updatePhotoPreview() {
        const photo = photoRef.current?.files?.[0];

        if (!photo) {
            return;
        }

        form.setData('photo', photo);

        const reader = new FileReader();

        reader.onload = (e) => {
            setPhotoPreview(e.target?.result as string);
        };

        reader.readAsDataURL(photo);
    }

    function deletePhoto() {
        router.delete(route('current-user-photo.destroy'), {
            preserveScroll: true,
            onSuccess: () => {
                setPhotoPreview(null);
                clearPhotoFileInput();
            },
        });
    }

    function clearPhotoFileInput() {
        if (photoRef.current?.value) {
            photoRef.current.value = '';
            form.setData('photo', null);
        }
    }

    return (
        <FormSection
            onSubmit={updateProfileInformation}
            title={'Profile Information'}
            description={`Update your account's profile information and email address.`}
            renderActions={() => (
                <>
                    <ActionMessage on={form.recentlySuccessful} className='mr-3'>
                        Saved.
                    </ActionMessage>

                    <PrimaryButton className={classNames({ 'opacity-25': form.processing })} disabled={form.processing}>
                        Save
                    </PrimaryButton>
                </>
            )}>
            {/* <!-- Profile Photo --> */}
            {jetstream.managesProfilePhotos ? (
                <div className='col-span-6 sm:col-span-4'>
                    {/* <!-- Profile Photo File Input --> */}
                    <input type='file' className='hidden' ref={photoRef} onChange={updatePhotoPreview} />

                    <InputLabel htmlFor='photo' value='Photo' />

                    {photoPreview ? (
                        // <!-- New Profile Photo Preview -->
                        <div className='mt-2'>
                            <span
                                className='block h-20 w-20 rounded-full'
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center center',
                                    backgroundImage: `url('${photoPreview}')`,
                                }}></span>
                        </div>
                    ) : (
                        // <!-- Current Profile Photo -->
                        <div className='mt-2'>
                            <img
                                src={user.profile_photo_url}
                                alt={user.name}
                                className='h-20 w-20 rounded-full object-cover'
                            />
                        </div>
                    )}

                    <SecondaryButton className='mt-2 mr-2' type='button' onClick={selectNewPhoto}>
                        Select A New Photo
                    </SecondaryButton>

                    {user.profile_photo_path ? (
                        <SecondaryButton type='button' className='mt-2' onClick={deletePhoto}>
                            Remove Photo
                        </SecondaryButton>
                    ) : null}

                    <InputError message={form.errors.photo} className='mt-2' />
                </div>
            ) : null}

            {/* <!-- Name --> */}
            <div className='col-span-6 sm:col-span-4'>
                <InputLabel htmlFor='name' value='Name' />
                <TextInput
                    id='name'
                    type='text'
                    className='mt-1 block w-full'
                    value={form.data.name}
                    onChange={(e) => form.setData('name', e.currentTarget.value)}
                    autoComplete='name'
                />
                <InputError message={form.errors.name} className='mt-2' />
            </div>

            {/* <!-- Email --> */}
            <div className='col-span-6 sm:col-span-4'>
                <InputLabel htmlFor='email' value='Email' />
                <TextInput
                    id='email'
                    type='email'
                    className='mt-1 block w-full'
                    value={form.data.email}
                    onChange={(e) => form.setData('email', e.currentTarget.value)}
                />
                <InputError message={form.errors.email} className='mt-2' />
            </div>
        </FormSection>
    );
}
