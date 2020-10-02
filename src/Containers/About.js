import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row} from 'react-bootstrap';

class About extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <>
                <Col fluid>
                    <Row className="h-100 align-items-center d-flex justify-content-center">
                        <div>
                            <h1>Play</h1>
                            <h4>Random Facts</h4>
                        </div>
                        <div>
                            <h1>Work</h1>
                            <h4>timeline</h4>
                            <p>description of skills</p>
                        </div>
                    </Row>
                </Col>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        falseState: 'state.falsestate'
    }
}

export default connect(mapStateToProps)(About);