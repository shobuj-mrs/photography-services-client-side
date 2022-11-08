import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServices from './AllServices';

const Services = () => {
    const data = useLoaderData()
    // console.log(data);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto my-12'>
            {
                data.map(service => <AllServices

                    key={service._id}
                    service={service}
                ></AllServices>)
            }
        </div>
    );
};

export default Services;