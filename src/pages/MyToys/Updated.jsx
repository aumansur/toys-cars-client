import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Updated = () => {
    const location = useLoaderData()
    const { _id, price, quantity_available, description } = location;


    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data)
        fetch(`https://toys-car-server-ten.vercel.app/mytoys/${_id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Data Updated',
                        text: 'Data Successfully Updated',

                    })
                }

            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="  shadow-2xl bg-base-100 p-20 rounded-lg ">


                <div className="flex w-[800px] py-2 px-10">
                    <div className="form-control w-1/2 pr-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input defaultValue={price} {...register("price", { required: true })} type="text" placeholder="$price" className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2 pr-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input defaultValue={quantity_available} {...register("quantity_available", { required: true })} type="text" placeholder="Available quantity" className="input input-bordered" />
                    </div>
                </div>

                <div className="form-control px-10 text-center ">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input defaultValue={description} {...register("description", { required: true })} type="text" placeholder="Description" className="input input-bordered" />

                </div>
                <div className="form-control mt-6 px-10">
                    <input className="my-btn" type="submit" value=" Update " />
                </div>
                {errors.exampleRequired && <span>This field is required</span>}
            </form>

        </div>
    );
};

export default Updated;