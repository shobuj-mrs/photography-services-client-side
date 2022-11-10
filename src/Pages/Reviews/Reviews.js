import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import SingleReview from './SingleReview';


const Reviews = () => {
    const myReview = useLoaderData()

    return (
        <div>
            <h3 className="text-4xl text-center my-4">You Have {myReview.length} reviews !! </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto my-12'>
                {
                    myReview.map(review => <SingleReview
                        key={review._id}
                        review={review}
                    ></SingleReview>)
                }
            </div>

        </div>
    );
};

export default Reviews;