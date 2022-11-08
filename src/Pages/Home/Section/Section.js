import React from 'react';
import { Link } from 'react-router-dom';

const Section = () => {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Set Proper Fruit Photography Lighting
                        </h2>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                            <img
                                alt="Party"
                                src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-16">
                            <article className="space-y-4 text-gray-600">
                                <p>Since fruits generally have a rounded surface, the light will bounce of it you does not set it properly. If you want to take a spectacular fruits images, it is better to go shoot in the studio

                                </p>

                                <p>MR Sobuz Pickering is a photographer, storyteller and humanitarian who travels the world hoping to build a bridge between cultures with her photography. Before we jump into how to photograph fruit better, it is better for you to understand what fruit photography is. Fruit photography is a specific genre of food photography which is included in still life photography genreRecently, has found a connection with ice and the polar regions. Fueled by a curiosity and concern for our shared planet, she hopes that her work will inspire awareness and positive change.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt="House"
                                    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-gray-100">
                            <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold sm:text-3xl">
                                    The Basics of Real Estate Photography for Interior Home Photos
                                </h2>

                                <p className="mt-4 text-gray-600">
                                    If you are just starting out in Lightroom, we highly recommend that you start with our Complete Lightroom Tutorial for Beginners. Beyond that, we have written a large number of articles related to Lightroom that you can check out below. To make it easier to navigate through all the content, we have broken it down by organization, editing, and other Lightroom-related tutorials.
                                </p>

                                <Link
                                    to={'/services'}
                                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                >
                                    Get in service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Section;