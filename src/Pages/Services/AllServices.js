import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalf } from "react-icons/fa";

const AllServices = ({ service }) => {
    const { title, price, image, rating, description, _id } = service;
    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">

                <div>
                    <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
                    <img src={image} alt="" className="object-cover w-full rounded mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <p className="text-sm dark:text-gray-400">
                        {
                            description.length > 100 ?
                                <> {description.slice(0, 100) + '...'} <button
                                    className='bg-indigo-500 text-white font-semibold hover:bg-pink-600 px-2 py-1 rounded-lg'

                                > <Link to={`/courses/${_id}`}>Show more Details</Link></button></>
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