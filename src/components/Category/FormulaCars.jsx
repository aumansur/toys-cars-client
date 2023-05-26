import { useEffect, useState } from "react";
import SingleFormula from "./SingleFormula";

const FormulaCars = () => {
    const [trucks, setTrucks] = useState([])



    const truckUrl = 'https://toys-car-server-ten.vercel.app/truck'
    useEffect(() => {
        fetch(truckUrl)
            .then(res => res.json())
            .then(data => setTrucks(data))



    }, [truckUrl]);





    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {
                trucks.map(truck => <SingleFormula key={truck._id}
                    truck={truck}
                >

                </SingleFormula>)
            }

        </div>
    );
};

export default FormulaCars;