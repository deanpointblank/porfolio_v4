import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

class Home extends Component{
    render(){
        return(
            <>
                <Row className="header h-100" id="particles-js">
                    <Col className="">
                        <h1 className="text-center">
                            Hi I'm Dean I'm a FullStack Engineer experienced in Ruby on Rails and JavaScript based programming with a background in React and Sinatra.
                        </h1>
                    </Col>
                </Row>
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