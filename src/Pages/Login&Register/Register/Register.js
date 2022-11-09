import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const Register = () => {

    const [error, setError] = useState('');
    const { createUser, updateUserProfile, loginProvider } = useContext(AuthContext);
    const navigate = useNavigate();

    //  google sign in method
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        loginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    // email registration  sign in method
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handleUpdateUserProfile(name);
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <div className=" grid gap-6 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-full' src='https://i.ibb.co/MVVm1Hx/password.webp' alt="" />
                </div>

                <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-2xl dark:bg-gray-900 dark:text-gray-100">
                    <h1 className="text-2xl font-bold text-center">Sign Up</h1>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 ng-untouched ng-pristine ng-valid"
                    >
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-400">User Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="User name"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                required />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                            <input
                                type="password"
                                name="password"

                                placeholder="Password"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                required />
                        </div>

                        <button className="mt-8 w-full inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Sign Up</button>
                        <p className='text-red-600'>
                            {error}
                        </p>

                    </form>

                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={handleGoogleSignIn}
                            aria-label="Log in with Google"
                            className="p-3 rounded-sm"
                        >
                            <FaGoogle></FaGoogle>
                        </button>

                        <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                            <FaGithub></FaGithub>
                        </button>
                    </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                        <Link rel="noopener noreferrer" to={'/login'} className='text-orange-600 font-bold'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;