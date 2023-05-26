import { useContext, useEffect, useState } from "react";
import SingleMyToy from "./SingleMyToy";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyToys = () => {
  const { user } = useContext(AuthContext)

  const [myToys, setMyToys] = useState([]);

  const url = `https://toys-car-server-ten.vercel.app/mytoys?email=${user?.email}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setMyToys(data))
  }, [url])


  const handleDelete = (id) => {
    const proceed = confirm('Are you sure you want to delete')
    if (proceed) {
      fetch(`https://toys-car-server-ten.vercel.app/alltoys/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {

          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              icon: 'error',
              title: 'Deleted',
              text: 'Successfully deleted',
              footer: '<a href="">Why do I have this issue?</a>'
            })
            const remaining = myToys.filter(toy => toy._id !== id)
            setMyToys(remaining)

          }
        })
    }



  }


  // update 


  return (
    <div className="my-container overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>

            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            <th>Add Toy</th>
            <th>Update</th>
            <th>

            </th>
          </tr>
        </thead>
        {
          myToys.map(myToy => <SingleMyToy key={myToy._id}
            myToy={myToy}
            handleDelete={handleDelete}

          ></SingleMyToy>)
        }



      </table>
    </div>
  );
};

export default MyToys;