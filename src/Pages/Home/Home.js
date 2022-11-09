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
                <button className='btn btn-primary'>
                    <Link
                        to={'/services'}
                        className='flex'
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