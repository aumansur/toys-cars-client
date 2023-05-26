import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({ toy }) => {
    const { _id, name, seller_name, sub_category, price, quantity_available, } = toy;
    const handleViewDetails = () => {
        fetch(`https://toys-car-server-ten.vercel.app/alltoys/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <tbody className='border h-16 mb-20 '>
            <tr className=''>

                <th className='my-40'>{seller_name}</th>
                <td>{name}</td>
                <td>{sub_category}</td>
                <td>${price}</td>
                <td>{quantity_available}</td>
                <td className='my-btn w-8'><Link to={`/alltoys/${_id}`}><button onClick={handleViewDetails}>View Details</button></Link>  </td>
            </tr>

        </tbody>
    );
};

export default SingleToy;