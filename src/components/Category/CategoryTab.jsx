import { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FormulaCars from "./FormulaCars";
import RegularCar from "./RegularCar";
import MiniPoliceCar from "./MiniPoliceCar";



const CategoryTab = () => {
    const [corToys, setCarToys] = useState([])
    const [cors, setCor] = useState([])
    useEffect(() => {
        fetch('https://toys-car-server-ten.vercel.app/cartab')
            .then(res => res.json())
            .then(data => setCarToys(data))
    }, [])
    // console.log(corToys);


    return (



        <div className='my-container'>
            <div>
                <h1 className="text-5xl pc font-bold text-center py-20 drop-shadow-md" >Car Category </h1>
            </div>
            <Tabs>
                <TabList>
                    <Tab>All Toys </Tab>
                    <Tab>Truck</Tab>
                    <Tab>Regular Car</Tab>
                    <Tab>Mini Police Car</Tab>
                </TabList>

                <TabPanel>
                    {/* {
                        corToys.map(singleCar=>)
                    } */}
                </TabPanel>
                <TabPanel>
                    <FormulaCars></FormulaCars>
                </TabPanel>
                <TabPanel>
                    <RegularCar></RegularCar>
                </TabPanel>
                <TabPanel>
                    <MiniPoliceCar></MiniPoliceCar>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default CategoryTab;