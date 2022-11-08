import React from 'react';
import Bannar from './Bannar/Bannar';
import Section from './Section/Section';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>


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