import { Button, Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import map from '../../images/Map.png'
import './Book.css'
import { useParams } from 'react-router';
import servicesData from '../data/fakeData.json'

const handleSearch= () => {
    <h1>Peak a boo </h1>
}

const Book = () => {
    const {id} = useParams();
    console.log(id);

    const [services, setServices] = useState([]);
    useEffect(()=>{
    setServices(servicesData)
    console.log(servicesData)
    console.log(servicesData[0].id)
    const vehicle = servicesData.find(({id}) => id === id);
    console.log(vehicle.id)
},[]);

    
    
    return (
        
            <div >
                
                <Container>
                    <Row>
                        <Col>
                <section className="row mt-5">
                    <Form>
                    <Form.Group>
                        <Form.Label>From</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Large text" />
                        <br />
                        <Form.Label>To</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Normal text" />
                        
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSearch}>
                        Submit
                    </Button>
                    
                    </Form>
                </section>
                </Col>
                <Col>
                <section className="">
                    <img src={map} alt="" className=""  />
                </section>
                </Col>
                </Row>
                </Container>
            </div>
        
    );
};

export default Book;