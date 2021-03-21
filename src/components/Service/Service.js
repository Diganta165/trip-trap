import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {id, imgUrl, title, key} = props.transport
    const history = useHistory();
    const handleTransport = (transportType) =>{
        history.push(`/book/${transportType}`);
    }
    
    return (
        <div className="col-md-4 card-box">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button onClick ={() => handleTransport(id)} variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>

       

    );
};

export default Service;