import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component{
    render(){
        return(
            <>
                <p>This is a Home Container</p>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        falseState: 'falsestate'
    }
}

export default connect(mapStateToProps)