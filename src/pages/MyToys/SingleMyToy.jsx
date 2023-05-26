import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
const SingleMyToy = ({ myToy, handleDelete }) => {
    const { _id, name, seller_email, seller_name, sub_category, description, price, quantity_available, photo_url, rating } = myToy;


    return (
        <tbody>
            {/* row 1 */}
            <tr>

                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className=" rounded-lg w-20 h-20">
                                <img src={photo_url} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>

                    </div>
                </td>
                <td>
                    {name}

                </td>
                <td>
                    {seller_email}

                </td>
                <td>
                    $:{price}

                </td>
                <td>
                    <Link to='../addtoys'> <button className='my-btn'> Add toy</button></Link>
                </td>
                <th>
                    <Link to={`/mytoys/${_id}`}> <button className="btn">Update</button></Link>
                </th>
                <th>
                    <button onClick={() => handleDelete(_id)} className=" text-white w-16 h-16 rounded-full flex items-center justify-center  bg-red-600 hover:bg-red-800">
                        <AiFillDelete size={30}></AiFillDelete>
                    </button>
                </th>
            </tr>

        </tbody>
    );
};

export default SingleMyToy;