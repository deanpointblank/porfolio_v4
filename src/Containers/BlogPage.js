import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

class BlogPage extends Component{
    render(){
        return(
            <>
                <Row>
                    <p>Title of Blog and Image of Topic</p>
                </Row>
                <Row>
                    <p>Blog text and stuff</p>
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

export default connect(mapStateToProps)(BlogPage);