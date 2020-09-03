import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

class Home extends Component{
    render(){
        return(
            <>
                <Row>
                    <Col>
                        <p>Big Picture and blurb here</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Most Recent Project</p>
                    </Col>
                    <Col>
                        <p>Most Recent Blog</p>
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