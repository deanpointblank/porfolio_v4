import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Jumbotron, Container, Image } from 'react-bootstrap';

class PortfolioPage extends Component{
    render(){
        return(
            <>
                <Jumbotron fluid>
                    <Container>
                        <Image src="holder.js/171x180" alt="picture for the blog" rounded />
                        <h1>Project Title</h1>
                        <p>gif/ video link to project demo</p>
                        <p>Link to live site</p>
                    </Container>
                </Jumbotron>
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