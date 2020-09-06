import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Media } from 'react-bootstrap';

class Blog extends Component{
    render(){
        return(
            <>
                <Row className="aboutSection">
                    <Media>
                        <img
                            width={200}
                            height={200}
                            className="mr-3"
                            src="holder.js/64x64"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>blog 1</h5>
                            <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus.
                            </p>
                        </Media.Body>
                    </Media>
                </Row>
                <p>Pagination goes here</p>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        falseState: 'state.falsestate'
    }
}

export default connect(mapStateToProps)(Blog);