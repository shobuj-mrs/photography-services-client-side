import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalf } from "react-icons/fa";

const DetailServices = () => {
    const { title, price, image, rating, description, _id } = useLoaderData();
    console.log(_id);


    return (
        <div className='my-12 mx-12'>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">

                <div>
                    <h2 className="mb-2 text-2xl font-semibold">{title}</h2>

                    <PhotoProvider>

                        <PhotoView src={image}>
                            <img src={image} alt="" className="object-cover w-full rounded mb-4 h-60 sm:h-96 dark:bg-gray-500" />

                        </PhotoView>

                    </PhotoProvider>

                    <p className="text-sm dark:text-gray-400">
                        {
                            description
                        }
                    </p>
                </div>
                <div className="flex flex-wrap justify-between">

                    <div className='flex items-center justify-center'>
                        <FaStar className='text-yellow-500'></FaStar>
                        <FaStar className='text-yellow-500'></FaStar>
                        <FaStarHalf className='text-yellow-500'></FaStarHalf>
                        <p>{rating}</p>
                    </div>

                    <div>
                        <p><span className='text-xl font-bold'>Price </span>: {price}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailServices;