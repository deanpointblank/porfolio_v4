import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

class Home extends Component{
    render(){
        return(
            <>
                <Row className="header h-100">
                    <Col className="">
                        <h1 className="text-center">Hi I'm Dean I'm a FullStack Engineer experienced in Ruby on Rails and JavaScript based programming with a background in React and Sinatra.</h1>
                    </Col>
                    <Col>
                    <Row className="mostRecent">
                        <h3>Most Recent Project: title</h3>
                        <p>Image or gif here</p>
                        <p>Text that begins to fade out or some shit</p>
                    </Row>
                    <Row className="mostRecent">
                        <h3>Most Recent Blog: title</h3>
                        <p>Image or gif here</p>
                        <p>Text that begins to fade out or some shit</p>
                    </Row>
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