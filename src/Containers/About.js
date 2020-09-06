import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Media } from 'react-bootstrap';

class About extends Component{
    render(){
        return(
            <>
                <Row className="aboutSection">
                    <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="holder.js/64x64"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>Who I am</h5>
                            <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus.
                            </p>
                        </Media.Body>
                    </Media>
                </Row>
                <Row className="aboutSection">
                    <Media>
                        <Media.Body>
                            <h5>Skills</h5>
                            <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus.
                            </p>
                        </Media.Body>

                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="holder.js/64x64"
                            alt="Generic placeholder"
                        />
                    </Media>
                </Row>
                <Row className="aboutContact">
                    <Media.Body>
                            <h5>Contact</h5>
                            <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus.
                            </p>
                    </Media.Body>
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

export default connect(mapStateToProps)(About);