import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Contact extends Component{
    render(){
        return(
            <>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Control type="text" placeholder="Normal text" />
                    <br />

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }
}