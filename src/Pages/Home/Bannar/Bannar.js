import React from 'react';
import { Link } from 'react-router-dom';

const Bannar = () => {
    return (
        <div>
            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1580892047528-7dfd384dce65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-white/25"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Let us find your

                            <strong className="block font-extrabold text-cyan-500">
                                Next Destination
                            </strong>
                            <strong className="block font-extrabold text-rose-600">
                                Forever Your Home.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl dark:text-gray-900 sm:leading-relaxed">
                        As a photographer or simply a photography lover you are always curious to find out what are the best photography out there. But there are so many amazing photographers that it is sometimes difficult to know where to look and you miss the ones you wish you had known sooner.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link
                              to={'/services'}
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Services
                            </Link>

                            <Link
                               to={'/learnmore'}
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bannar;