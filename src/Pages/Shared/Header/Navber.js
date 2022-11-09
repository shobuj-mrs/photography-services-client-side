import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navber = () => {
    const { logOut } = useContext(AuthContext);

    return (
        <div>

            <nav className="bg-teal-600 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to={'/'} className="flex items-center justify-between">
                        <img
                            src="https://i.ibb.co/bzwvTrm/images-removebg-preview.png"
                            className='w-16 h-16'
                            alt="..."
                        />
                        <h1 className="text-white font-semibold hover:text-orange-600">Photography</h1>
                    </Link>
                    <div className="flex md:order-2">


                        <button onClick={logOut} >Log Out</button>


                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col p-4 mt-2  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium  ">
                            <li>
                                <Link
                                    className=''
                                    to={'/'}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=''
                                    to={"/services"}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=''
                                    to={"/blogs"}
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=''
                                    to={"/signin"}
                                >
                                    Sign Up
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=''
                                    to={"/login"}
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navber;