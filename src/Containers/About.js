import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

class About extends Component{
    render(){
        return(
            <>
                <Col>
                    <p>Who I am</p>
                </Col>
                <Col>
                    <p>Skills</p>
                </Col>
                <Col>
                    <p>Contact</p>
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