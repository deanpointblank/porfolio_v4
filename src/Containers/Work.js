import React, { Component } from 'react';
import { Col, Row} from 'react-bootstrap';

export default class Work extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    /*
        
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