import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

class Home extends Component{
    render(){
        return(
            <>
                <Col fluid>
                    <Row className="h-100">
                        <Col className="d-flex align-items-center">
                        <h1 className="text-center">
                            Hi I'm Dean I'm a FullStack Engineer experienced in Ruby on Rails and JavaScript based programming.
                        </h1>
                        </Col>
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


export default connect(mapStateToProps)(Home);