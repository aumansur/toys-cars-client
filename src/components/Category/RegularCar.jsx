import React, { useEffect, useState } from 'react';
import SingleFormula from './SingleFormula';
import SingleRegular from './SingleRegular';

const RegularCar = () => {
    const [regularCars, setRegularCars] = useState([]);


    const url = 'https://toys-car-server-ten.vercel.app/regularcar'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRegularCars(data))



    }, [url])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {
                regularCars.map(regularCar => <SingleRegular key={regularCar._id}
                    regularCar={regularCar}
                >

                </SingleRegular>)
            }

        </div>
    );
};

export default RegularCar;