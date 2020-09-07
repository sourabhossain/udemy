import React from 'react';
import './Courses.css';
import { Card, Button } from 'react-bootstrap';
import { useState, useRef } from 'react';

const Courses = (props) => {
    const courses = props.courses;
    const { name, img, mentor, price, description, rating } = props.courses;
    const [btnText, setBtnText] = useState('Enroll Now')
    const changeBtnText = (text) => setBtnText(text);
    const btnRef = useRef();
    const changeBgColor = () => btnRef.current.setAttribute('class', 'bg-dark');

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='mb-1'>Desciption: <span>{description}</span></Card.Text>
                    <Card.Text className='mb-1'>Mentor: <span>{mentor}</span></Card.Text>
                    <Card.Text className='mb-0'></Card.Text>
                    <Card.Text className='mb-1'>Rating: <span>{rating} (out of 5)</span></Card.Text>
                    <Card.Text className='mb-1'>Price: <span>${price}</span></Card.Text>
                    <Button ref={btnRef} variant='btn' onClick={() => {
                        props.btnEventHandler(courses);
                        changeBtnText('Enrolled');
                        changeBgColor();
                    }}> {btnText}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Courses;