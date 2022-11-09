import React from 'react';
import Bannar from './Bannar/Bannar';
import Section from './Section/Section';
import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import ServiceThree from './Section/ServiceThree/ServiceThree';

const Home = () => {

    const services = useLoaderData();

    return (
        <div className='dark:bg-blue-50'>
            <Bannar></Bannar>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto my-12'>

                {
                    services.map(service => <ServiceThree
                        key={service._id}
                        service={service}

                    ></ServiceThree>)
                }
            </div>

            <div className='w-1/5 my-6 mx-auto'>
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                    <Link
                        to={'/services'}
                        className='flex items-center justify-center'
                    >
                        <span className='mr-2'>See all</span>
                        <FaArrowRight />
                    </Link>
                </button>
            </div>

            <Section></Section>

        </div>
    );
};

export default Home;