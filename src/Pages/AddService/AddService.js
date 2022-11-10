import React from 'react';

const AddService = () => {


    return (
        <div>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form className="space-y-4">
                    <div>
                        <label className="sr-only" htmlFor="name">title</label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="title"
                            type="text"

                        />
                    </div>

                    <div >
                        <div>
                            <label className="sr-only" htmlFor="email">Image URL</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                name='image'
                                placeholder="image url"
                                type="text"

                            />
                        </div>

                    </div>

                    <div>
                        <label className="sr-only" htmlFor="message">Description</label>
                        <textarea
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Description"
                            rows="8"

                        ></textarea>
                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            className='text-white text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  mt-4 px-5 py-2.5 text-center mr-2 mb-2'
                        >
                            Add service
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;