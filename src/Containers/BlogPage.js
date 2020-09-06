import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Container, Jumbotron, Image } from 'react-bootstrap';

class BlogPage extends Component{
    render(){
        return(
            <>
                <Jumbotron fluid>
                    <Container>
                        <Image src="holder.js/171x180" alt="picture for the blog" rounded />
                        <h1>Blog Title</h1>
                        <p>
                        Tagline or some shit like that
                        </p>
                    </Container>
                </Jumbotron>
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