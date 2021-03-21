import { Button, Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import './Book.css'
import { useParams } from 'react-router';
import servicesData from '../data/fakeData.json'
import { MapContext } from '@react-google-maps/api';
import Map from '../Map/Map';



const Book = () => {
    
    const {id} = useParams();

    const [services, setServices] = useState([]);
    const [formShow,setFormShow] = useState(false);
    


let vehicle = servicesData.find(function(post, index){
    if(post.id == id){
        return true;
    }
});
const {imgUrl,type} = vehicle;

const handleSearch = (data) =>{
    
    setFormShow(data);
    console.log(data);
    
}
    
    return (
        
            <div >
                
                <Container>
                    <Row>
                        <Col>
                <section className="row mt-5">
                    
                    <Form.Group>
                        <Form.Label>From</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Large text" />
                        <br />
                        <Form.Label>To</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Normal text" />
                        <br/>
                        <input type="date" name="date"/>
                        <br/>
                        <button variant="primary" type="submit" onClick={()=>handleSearch(true)}>
                        Submit
                        </button>
                    </Form.Group>
                    
               
                     
                </section>
                </Col>
                <Col>
                <section className="">
                    <Map></Map>
                </section>
                </Col>
                </Row>
                </Container>
                
                {
                
                    formShow ? <div>
                        <form>
                            <section className="available">
                                <img src={imgUrl}/><p>{type} $54</p>
                            </section>
                            <section className="available">
                                <img src={imgUrl}/><p>{type} $54</p>
                            </section>
                            <section className="available">
                                <img src={imgUrl}/><p>{type} $54</p>
                            </section>
                            
                            
                            
                        </form>
                    </div>
                    :<p></p>
            
                
                }

            </div>
            
        
    );
};

export default Book;