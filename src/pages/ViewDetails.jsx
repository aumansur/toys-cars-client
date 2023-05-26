import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ViewDetails = () => {
    const loaderData = useLoaderData()
    const { _id, name, seller_email, seller_name, sub_category, description, price, quantity_available, photo_url, rating } = loaderData;




    return (
        <div className="card w-[600px] my-20 mx-auto bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo_url} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div className=" p-20 ">
                <h2 className="card-title ">Toy Name: {name}</h2>
                <p className='py-2'>Seller Name:{seller_name}</p>
                <p className='py-2'>Seller Email:{seller_email}</p>
                <div className='flex justify-between'>
                    <p>
                        <Rating
                            className='text-amber-500'
                            placeholderRating={rating}
                            emptySymbol={<AiOutlineStar />}
                            placeholderSymbol={<AiFillStar />}
                            fullSymbol={<AiFillStar />}
                        /> {rating}
                    </p>
                    <p>Price:$ {price} </p>

                </div>
                <p className='py-2' >available quantity: {quantity_available}</p>
                <p className='py-2'>{description} </p>

            </div>
        </div>
    );
};

export default ViewDetails;