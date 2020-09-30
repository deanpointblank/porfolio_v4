import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

class Home extends Component{
    render(){
        return(
            <>
                <Col fluid>
                    <Row className="h-75 align-items-center">
                        <Col className="text-center">
                        <h1>
                            Hi I'm Dean I'm a FullStack Engineer experienced in Ruby on Rails and JavaScript based programming.
                        </h1>
                        <br />
                        <h4 cassName="lead">
                            -I know other stuff too-
                        </h4>
                        </Col>
                    </Row>
                    <Row className="h-auto">
                            <Col className="text-center home-links">
                                <h3>
                                    Who is Dean?
                                </h3>
                            </Col>
                            <Col className="text-center home-links">
                                <h3>
                                    What does he know?
                                </h3>
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