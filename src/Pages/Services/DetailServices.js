import React, { useContext, useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider';

const DetailServices = () => {
    const [review, setReview] = useState({});
    const [addedReview, setAddedReview] = useState([]);

    const { title, price, image, rating, description, _id } = useLoaderData();
    // console.log(_id);
    const { user } = useContext(AuthContext);

    const handleInputBlur = e => {
        const form = e.target;
        const email = user?.email || 'unregistered';
        const reviewMessage = form.value;

        const reviewDetails = {
            id: _id,
            serviceName: title,
            customer: user.displayName,
            email,
            reviewMessage
        }
        setReview(reviewDetails);
        // form.reset("");
       
    }

    const handleAddToReview = e => {
        e.preventDefault();
        const form = e.target;
        

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Your review added successfully')
                    form.reset();

                }

            })
            .catch(err => console.error(err));

    }


    return (
        <div className='my-12 mx-12 grid grid-cols-1 lg:grid-cols-2 gap-2'>


            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-2xl dark:bg-gray-900 dark:text-gray-100">

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

            <div className='flex  justify-center shadow-2xl'>
                <div>
                    {
                        user?.email ?
                            <div className="flex flex-col w-full p-8 shadow-sm rounded-xl lg:p-12 bg-emerald-700 text-gray-100">
                                <div className="flex flex-col  w-full">
                                    <h2 className="text-3xl">User Name : {user.displayName}</h2>
                                    <h4 className="text-xl mb-4">Photography item is {title}</h4>
                                    <h2 className="text-3xl font-semibold text-center">Your Review and feedback mettars!</h2>
                                    <div className="flex flex-col items-center py-6 space-y-2">
                                        <span className="text-center">How was your experience?</span>

                                    </div>

                                    {/* review form  */}

                                    <form onSubmit={handleAddToReview} className="flex flex-col w-full">
                                        <input onBlur={handleInputBlur} rows="3" type="text" placeholder='Write a review...' name='message' className="p-4 rounded-md resize-none text-cyan-900 bg-white" />

                                        <button type="submit" className='text-white text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  mt-4 px-5 py-2.5 text-center mr-2 mb-2'>Add Your Review</button>

                                    </form>

                                </div>

                            </div>

                            :
                            <div className='bg-cyan-800 p-6 w-full rounded-2xl shadow-2xl mt-12'>

                                <p>Please login to give a review!</p>
                                <button
                                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                >
                                    <Link
                                        to={'/login'}
                                    >
                                        Login
                                    </Link>
                                </button>
                            </div>
                    }
                </div>

                <div>
                    {/* {
                addedReview.map(rvw => <Opinions key={rvw._id} rvw={rvw}></Opinions>)
            } */}
                </div>
            </div>


        </div>
    );
};

export default DetailServices;