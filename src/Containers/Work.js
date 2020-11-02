import React, { Component } from 'react';
import { Col, Row} from 'react-bootstrap';

export default class Work extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    /*
        break down, of the structure of work page.
        AA is supposed to be spinning graphic of current skills.
        AB is supposed to be ???
    */

    render(){
        return(
            <>
                <Col fluid>
                    <Row className="h-50">
                        <Col className="h-100">
                        </Col>
                        <Col className="h-100">
                        </Col>
                    </Row>
                    <Row className="h-50">
                        <Col className="h-100">
                        </Col>
                        <Col className="h-100">
                        </Col>
                    </Row>
                </Col>
            </>
        )
    }
}