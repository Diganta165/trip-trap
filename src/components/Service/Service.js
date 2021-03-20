import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = (props) => {
    
    const history = useHistory();
    const handleTransport = (transportType) =>{
        history.push(`/book/${transportType}`);
    }
    // console.log(props.transport)
    // const {title,image} = {props}
    return (
        <div className="col-md-4 card-box">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.transport.imgUrl} />
        <Card.Body>
        <Card.Title>{props.transport.title}</Card.Title>
        <Button onClick ={() => handleTransport(props.transport.id)} variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>

        // <div className = "container mt-5 ">
        //     <div className=" row row-cols-1 row-cols-md-3 g-4">
        //         <div className="col-md-3">
        //             <div className="card h-80">
        //                 <img className="card-img-top" src={props.transport.imgUrl} alt="" />
        //                 <div className ="card-body">
        //                     <h5 className ="card-title">{props.transport.title}</h5>

        //                 </div>

        //             </div>

        //         </div>

        //     </div>
        // </div>

    );
};

export default Service;