import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalf } from "react-icons/fa";


const AllServices = ({ service }) => {
    const { title, price, image, rating, description, _id } = service;
    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-2xl  dark:text-gray-900 border-2 ">

                <div>
                    <h2 className="mb-2 text-2xl font-semibold">{title}</h2>

                    <PhotoProvider>

                        <PhotoView src={image}>
                            <img src={image} alt="" className="object-cover w-full rounded mb-4 h-60 sm:h-96 dark:bg-gray-500" />

                        </PhotoView>

                    </PhotoProvider>

                    <p className="text-sm dark:text-gray-400">
                        {
                            description.length > 150 ?
                                <> {description.slice(0, 150) + '...'} <button
                                    className="mt-2 inline-block rounded border border-rose-600 bg-rose-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring active:text-rose-500"

                                > <Link to={`/services/${_id}`}>Show more Details</Link></button></>
                                :
                                <p>{description} </p>
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
                        <p>Price : {price}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllServices;