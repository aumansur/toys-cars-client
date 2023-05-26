import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AddToys = () => {
    const { user } = useContext(AuthContext)

    // const handleAddToysCar = e => {
    //     e.preventDefault()
    //     const form = e.target;
    //     const name = form.name.value;
    //     const seller_name = form.sellerName.value;
    //     const seller_email = form.sellerEmail.value;
    //     const sub_category = form.category.value;
    //     const price = form.price.value;
    //     const rating = form.rating.value;
    //     const quantity_available = form.quantity.value;
    //     const photo_url = form.photo.value;
    //     const description = form.description.value;

    //     const addData = { name, seller_name, seller_email, sub_category, price, rating, quantity_available, photo_url, description }
    //     console.log(addData)

    //     fetch('https://toys-car-server-ten.vercel.app/alltoys', {
    //         method: 'POST',
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(addData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.insertedId) {
    //                 Swal.fire({
    //                     title: 'Are you sure?',
    //                     text: "You won't be able to revert this!",
    //                     icon: 'success',
    //                     showCancelButton: true,
    //                     confirmButtonColor: '#3085d6',
    //                     cancelButtonColor: '#d33',
    //                     confirmButtonText: 'Added'
    //                 }).then((result) => {
    //                     if (result.isConfirmed) {
    //                         Swal.fire(
    //                             'Added!',
    //                             'Your file has been added.',
    //                             'success'
    //                         )
    //                     }
    //                 })
    //             }
    //             console.log(data)
    //         })



    // }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://toys-car-server-ten.vercel.app/alltoys', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'success',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Added'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Added!',
                                'Your file has been added.',
                                'success'
                            )
                        }
                    })
                }

            })
    };


    return (
        <div className="bg-base-200">
            <div className="pt-10">
                <h1 className="text-4xl font-bold text-center">Add a Sports Toys cars </h1>
            </div>
            <div className="hero min-h-screen bg-base-200">



                <form onSubmit={handleSubmit(onSubmit)} className="  shadow-2xl bg-base-100 p-20 rounded-lg ">

                    <div className="flex w-[800px] py-2 px-10">
                        <div className="form-control w-1/2 pr-4">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2 pl-4 ">
                            <label className="label">
                                <span className="label-text">Seller name</span>
                            </label>
                            <input defaultValue={user?.displayName} {...register("seller_name", { required: true })} type="text" placeholder="Seller Name" className="input input-bordered" />

                        </div>
                    </div>

                    <div className="flex w-[800px] py-2 px-10">
                        <div className="form-control w-1/2 pr-4">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input defaultValue={user?.email} {...register("seller_email", { required: true })} type="text" placeholder="Seller Email" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2 pl-4 ">
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            {/* <input  {...register("sub_category", { required: true })} type="text" placeholder="Sub Category" className="input input-bordered" /> */}
                            <select className="input input-bordered" defaultValue="formula" {...register("sub_category", { required: true })}>
                                <option value="truck">truck</option>
                                <option value="regularCar">regularCar</option>
                                <option value="miniPoliceCar">miniPoliceCar</option>
                            </select>

                        </div>
                    </div>

                    <div className="flex w-[800px] py-2 px-10">
                        <div className="form-control w-1/2 pr-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input {...register("price", { required: true })} type="text" placeholder="$price" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2 pl-4 ">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input {...register("rating", { required: true })} type="text" placeholder="Rating" className="input input-bordered" />

                        </div>
                    </div>

                    <div className="flex w-[800px] py-2 px-10">
                        <div className="form-control w-1/2 pr-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input {...register("quantity_available", { required: true })} type="text" placeholder="Available quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control w-5/6 pl-4 ">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input {...register("photo_url", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />

                        </div>
                    </div>
                    <div className="form-control px-10 text-center ">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input {...register("description", { required: true })} type="text" placeholder="Description" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6 px-10">
                        <input className="my-btn" type="submit" value=" Add a toys" />
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                </form>


            </div>
        </div>
    );
};

export default AddToys;