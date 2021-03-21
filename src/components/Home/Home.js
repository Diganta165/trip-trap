import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import servicesData from '../data/fakeData.json'



const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
    setServices(servicesData)
    console.log(servicesData)
},[])

    return (
        
        <div className ="container">
            <div className ="row">
            {
               services.map(transport => <Service key={transport.id} transport={transport} ></Service>) 
            }
            </div>
        </div>
    );
};

export default Home;