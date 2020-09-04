import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

class PortfolioPage extends Component{
    render(){
        return(
            <>
                <Row>
                    <h1>Project title</h1>
                    <p>gif/ video link to project demo</p>
                    <p>Link to live site</p>
                </Row>
                <Row>
                    <p>text blog about project challenges</p>
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

export default connect(mapStateToProps)(PortfolioPage);