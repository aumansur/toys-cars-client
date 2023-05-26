import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import notfound from '../assets/error.gif'
const Error = () => {
    return (
        <div>
            <div className=' my-container my-10 text-center flex flex-col justify-center items-center'>
                <img className='w-[400px]  p-0' src={notfound} alt="" />
                <h1 className='text-9xl font-bold'>404</h1>
                <h4 className='text-xl'>Data not Found! </h4>
                <Link to='/'><button className='my-btn flex text-xl'> <BsArrowLeft className='mr-4' size={30} /> <span> Back to Home</span> </button> </Link>

            </div>
        </div>
    );
};

export default Error;