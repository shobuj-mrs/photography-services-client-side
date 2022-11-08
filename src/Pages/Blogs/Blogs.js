import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className=" dark:text-gray-100 my-3">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <span className="text-sm dark:text-gray-400">November 09, 2022</span>
                    <div className="mt-3">
                        <h1 className='text-4xl font-semibold text-orange-500'>1. What is the Difference between SQL and NoSQL?</h1>
                        <p className="mt-2">When choosing a modern database, one of the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both are viable options, there are key differences between the two that users must keep in mind when making a decision.</p>
                        <p className='mt-2'>The five critical differences between SQL vs NoSQL are:--</p>
                        <p className="mt-2">1. SQL databases are relational, NoSQL databases are non-relational.</p>
                        <p className="mt-2">2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</p>
                        <p className="mt-2">3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                        <p className="mt-2">4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                        <p className="mt-2">5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                </div>
            </div>
            <div className=" dark:text-gray-100 my-3">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <span className="text-sm dark:text-gray-400">November 09, 2022</span>
                    <div className="mt-3">
                        <h1 className='text-4xl font-semibold text-orange-500'>2. What is JWT, and how does it work?</h1>
                        <p className="mt-2">.</p>
                    </div>
                </div>
            </div>
            <div className=" dark:text-gray-100 my-3">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <span className="text-sm dark:text-gray-400">November 09, 2022</span>
                    <div className="mt-3">
                        <h1 className='text-4xl font-semibold text-orange-500'>3. What is the difference between javascript and NodeJS?</h1>
                        <p className="mt-2">.</p>
                    </div>
                </div>
            </div>
            <div className=" dark:text-gray-100 my-3">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <span className="text-sm dark:text-gray-400">November 09, 2022</span>
                    <div className="mt-3">
                        <h1 className='text-4xl font-semibold text-orange-500'>4. How does NodeJS handle multiple requests at the same time?</h1>
                        <p className="mt-2">We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.</p>
                        <p className='mt-2'> A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.</p>
                        <p className='mt-2'>They are all share same port (PORT 3000) but not state. The master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;