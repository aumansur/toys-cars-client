import React, { useContext } from 'react';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleFormula = ({ truck }) => {

    const { _id, photo_url, rating, price, name, } = truck;
    const { user } = useContext(AuthContext)
    const handleView = (id) => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Please Login ',
                text: 'Something went wrong please log in!',

            })
        }

    }
    return (
        <div className="card card-compact h-80 w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-60' src={photo_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
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
                <div className=" w-full">
                    {
                        user ? <Link to={`alltoys/${_id}`}>  <button onClick={() => handleView(_id)} className="my-btn">View Details</button></Link> : <button onClick={() => handleView(_id)} className="my-btn">View Details</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleFormula;