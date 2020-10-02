import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Media } from 'react-bootstrap';

class About extends Component{
    render(){
        return(
            <>
                <Col>
                    <Row className="aboutSection">
                        <p>placement words for now</p>
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