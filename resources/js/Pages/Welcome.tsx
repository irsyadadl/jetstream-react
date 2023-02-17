import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Link } from '@inertiajs/react';

interface Props {
    laravelVersion: string;
    phpVersion: string;
}

const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
];

export default function Welcome({ laravelVersion, phpVersion }: Props) {
    const route = useRoute();
    const { auth } = useTypedPage().props;
    return (
        <div className='relative min-h-screen bg-gray-900'>
            <div className='fixed z-50 flex w-full max-w-screen-2xl items-center justify-end gap-x-4 p-6'>
                {auth.user ? (
                    <>
                        <Link
                            className='font-medium text-slate-400 transition hover:text-white'
                            href={route('profile.show')}>
                            Profile
                        </Link>
                        <Link
                            className='font-medium text-slate-400 transition hover:text-white'
                            href={route('dashboard')}>
                            Dashboard
                        </Link>
                    </>
                ) : (
                    <>
                        <Link className='font-medium text-slate-400 transition hover:text-white' href={route('login')}>
                            Login
                        </Link>
                        <Link
                            className='font-medium text-slate-400 transition hover:text-white'
                            href={route('register')}>
                            Register
                        </Link>
                    </>
                )}
            </div>
            <div className='absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full'>
                <div className='h-full w-full xl:grid xl:grid-cols-2'>
                    <div className='h-full xl:relative xl:col-start-2'>
                        <img
                            className='h-full w-full object-cover opacity-25 xl:absolute xl:inset-0'
                            src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100'
                            alt='People working on laptops'
                        />
                        <div
                            aria-hidden='true'
                            className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r'
                        />
                    </div>
                </div>
            </div>
            <div className='mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8'>
                <div className='relative pt-12 pb-64 sm:pt-16 sm:pb-24 xl:col-start-1 xl:pb-16'>
                    <h2 className='text-base font-semibold text-indigo-300'>Jetstream With React</h2>
                    <p className='mt-3 text-3xl font-bold tracking-tight text-white'>
                        Welcome to your Jetstream application!
                    </p>
                    <p className='mt-5 text-lg text-gray-300'>
                        Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application.
                        Laravel is designed to help you build your application using a development environment that is
                        simple, powerful, and enjoyable.
                    </p>
                    <div className='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2'>
                        <p>
                            <span className='block text-2xl font-bold text-white'>Laravel</span>
                            <span className='mt-1 block text-base text-gray-300'>
                                Laravel is a web application framework with expressive, elegant syntax. We’ve already
                                laid the foundation — freeing you to create without sweating the small things.
                            </span>
                        </p>
                        <p>
                            <span className='block text-2xl font-bold text-white'>Jetstream</span>
                            <span className='mt-1 block text-base text-gray-300'>
                                Laravel Jetstream is a beautifully designed application starter kit for Laravel and
                                provides the perfect starting point for your next Laravel application.
                            </span>
                        </p>
                        <p>
                            <span className='block text-2xl font-bold text-white'>React</span>
                            <span className='mt-1 block text-base text-gray-300'>
                                React is a JavaScript library for building user interfaces. It is maintained by Facebook
                                and a community of individual developers and companies.
                            </span>
                        </p>
                        <p>
                            <span className='block text-2xl font-bold text-white'>Inertia.js</span>
                            <span className='mt-1 block text-base text-gray-300'>
                                Inertia.js is a tool for building single-page apps using server-side rendering and the
                                Laravel framework.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
