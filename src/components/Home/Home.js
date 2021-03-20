import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import servicesData from '../data/fakeData.json'



const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
    setServices(servicesData)
    console.log(servicesData)
},[])


    // const style = {
    //     display: 'flex',
    //     margin: '40px',
    //     justifyContent: 'space-between'
    // }
    // const services = [
    //     {
    //         id:1,
    //         title: 'Bike',
    //         imgUrl: 'https://i.ibb.co/029Q4N4/Frame.png',
    //         type: 'bike'
    //     },
    //     {
    //         id:2,
    //         title: 'Bus',
    //         imgUrl: 'https://i.ibb.co/dPK8xVt/Frame-1.png',
    //         type: 'bus'
    //     },
    //     {
    //         id:3,
    //         title: 'Car',
    //         imgUrl: 'https://i.ibb.co/xJLgn32/Frame-2.png',
    //         type:'car'
    //     },
    //     {
    //         id:4,
    //         title: 'Train',
    //         imgUrl: 'https://i.ibb.co/Ht3KcRw/Group.png',
    //         type: 'train'
    //     }

    // ]
    return (
        // <div className="" style={style}>
        <div className ="container">
            <div className ="row">
            {
               services.map(transport => <Service transport={transport} ></Service>) 
            }
            </div>
        </div>
    );
};

export default Home;