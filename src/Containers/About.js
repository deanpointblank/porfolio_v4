import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Media } from 'react-bootstrap';

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
                        <div>Play</div>
                        <div>Work</div>
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