import { useEffect, useState } from "react";
import SingleToy from "../components/SingleToy";
import { BiSearchAlt2 } from 'react-icons/bi';


const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState(" ");
    console.log(searchText)

    useEffect(() => {
        fetch('https://toys-car-server-ten.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    const handleSearch = () => {
        fetch(`https://toys-car-server-ten.vercel.app/searchtoys/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }


    return (
        <div className="overflow-x-auto my-container">

            <div className="text-center">
                <div className="input-group justify-end py-8 text-center mx-auto">
                    <input className="input input-bordered" placeholder="Search…" onChange={(e) => setSearchText(e.target.value)} type="text" name="" id="" />
                    <button className="btn btn-square" onClick={handleSearch}>
                        <BiSearchAlt2 size={30}></BiSearchAlt2>
                    </button>


                </div>
            </div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th> </th>
                        <th>Seller name</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>price</th>
                        <th>Available Quantity</th>
                        <th>View Details</th>

                    </tr>
                </thead>
                {
                    toys.map(toy => <SingleToy key={toy._id}
                        toy={toy}
                    ></SingleToy>)
                }



            </table>
        </div>
    );
};

export default AllToys;