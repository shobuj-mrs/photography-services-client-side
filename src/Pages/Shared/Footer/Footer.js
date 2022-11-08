import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaXbox } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='border bg-gray-100'>
            <footer aria-label="Site Footer" className="bg-white text-center">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl space-y-6">
                        <div className="flex justify-center gap-6">
                            <Link
                                className="text-blue-500 hover:text-blue-500/75"
                                to={'/'}
                            >
                                <FaTwitter></FaTwitter>
                            </Link>

                            <Link
                                className="text-gray-900 hover:text-gray-900/75"
                            ><FaGithub></FaGithub>
                            </Link>

                            <Link
                                className="text-pink-600 hover:text-pink-600/75"
                            >
                                <FaXbox></FaXbox>
                            </Link>
                        </div>

                        <nav
                            aria-label="Footer Nav"
                            className="rounded-3xl border-4 border-gray-900 p-6"
                        >
                            <ul className="flex flex-wrap justify-center gap-6 text-sm font-bold">
                                <li>
                                    <Link
                                        className="text-gray-900 transition hover:text-gray-900/75"
                                        to={'/'}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Website
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-gray-900 transition hover:text-gray-900/75"
                                        to={'/'}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Uses
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-gray-900 transition hover:text-gray-900/75"
                                        to={'/blogs'}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <p className="mx-auto max-w-lg text-xs text-gray-500">
                            Good footer design should also contain your logo, which will be the visual representation of your company. Moreover, making the most of the space you have is very important. It is also crucial to remember that simplicity works best for any footer.

                            <span className="mt-4 block"> &copy; MR Copyright 2022 </span>
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;