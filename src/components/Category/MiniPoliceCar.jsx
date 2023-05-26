import React, { useEffect, useState } from 'react';
import SingleMiniCar from './SingleMiniCar';

const MiniPoliceCar = () => {
    const [miniCars, setMiniCars] = useState([])
    const url = 'https://toys-car-server-ten.vercel.app/mini'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMiniCars(data))

    }, [url])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {
                miniCars.map(minicar => <SingleMiniCar key={minicar._id}
                    minicar={minicar}>

                </SingleMiniCar>)
            }

        </div>
    );
};

export default MiniPoliceCar;