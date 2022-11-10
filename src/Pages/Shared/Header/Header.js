import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error.message)
            });
    }
    const menuItems = <>
        {
            user?.email ?
                <>
                    <button onClick={handleLogout} className="self-center lg:px-8 py-3 text-white font-semibold px-4 bg-cyan-900 rounded-2xl hover:bg-cyan-900/80 transition duration-300 ease-in-out">Log Out</button>
                </>
                :
                <div className='items-center flex-shrink-0 hidden lg:flex'>
                    <Link to='/login'><button className="self-center lg:px-8 py-3 font-semibold px-4 text-white  rounded-2xl hover:bg-black/10 transition duration-300 ease-in-out">Login</button></Link>

                    <Link to='/signin'><button className="self-center lg:px-8 py-3 border p-3 border-black/50 hover:border-white transition duration-300 ease-in-out font-semibold rounded-2xl text-white bg-cyan-900 ">Sign Up</button></Link>
                </div>
        }
    </>
    return (
        <div>
            <header className=" bg-teal-600 ">
                <div className=" py-1 flex justify-between items-center">
                    <div className='flex justify-center items-center pl-10'>
                        <Link to={'/'} className="flex items-center justify-between">
                            <img
                                src="https://i.ibb.co/bzwvTrm/images-removebg-preview.png"
                                className='w-16 h-16'
                                alt="..."
                            />
                            <h1 className="text-white font-semibold hover:text-orange-600">Photography</h1>
                        </Link>
                    </div>

                    {/* links  */}
                    <div className={`lg:flex py-2 font-semibold  lg:py-0 text-center justify-center items-center  lg:flex-row flex-col absolute lg:static bg-teal-600 lg:bg-black/0 w-full lg:w-auto  duration-200 ease-in ${open ? 'hidden' : 'top-[56px]'}`}>

                        <Link
                            to='/'
                            className="flex items-center text-white px-4 py-2 rounded-2xl hover:bg-black/10 transition duration-300 ease-in-out   "
                        >
                            Home
                        </Link>

                        <Link
                            to='/services'
                            className="flex items-center text-white px-4 py-2 rounded-2xl hover:bg-black/10 transition duration-300 ease-in-out"
                        >
                            Services
                        </Link>

                        <Link

                            to='/blogs'
                            className="flex items-center px-4 py-2 text-white rounded-2xl hover:bg-black/10 transition duration-300 ease-in-out"
                        >
                            Blogs
                        </Link>

                        <Link
                            to='/reviews'
                            className="flex items-center px-4 py-2 text-white rounded-2xl hover:bg-black/10 transition duration-300 ease-in-out"
                        >
                          Review
                        </Link>

                        <Link
                            to='/addservice'
                            className="flex items-center px-4 text-white py-2 rounded-2xl hover:bg-black/10 transition duration-300 ease-in-out"
                        >
                            Add New Services
                        </Link>
                    </div>
                    {/* sign up and sign in  */}

                    <div className="pr-10 ">
                        {menuItems}
                    </div>

                    <button onClick={() => setOpen(!open)} className=" h-12 flex w-12 text-white lg:hidden">
                        {
                            open ? <Bars3Icon /> : <XMarkIcon />
                        }
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;