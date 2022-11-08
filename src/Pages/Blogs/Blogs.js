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
                        <p className="mt-2">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                        <p className="mt-2">For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.</p>
                        <p className="mt-2">JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                        <p className="mt-2">The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn't been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </p>
                    </div>
                </div>
            </div>
            <div className=" dark:text-gray-100 my-3">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <span className="text-sm dark:text-gray-400">November 09, 2022</span>
                    <div className="mt-3">
                        <h1 className='text-4xl font-semibold text-orange-500'>3. What is the difference between javascript and NodeJS?</h1>
                        <p className="mt-2">NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                        <p className="mt-2">Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                        <p className="mt-2">Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. NodeJs V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>
                        <p className="mt-2">It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++. Nodejs is written in C, C++ and Javascript.</p>
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