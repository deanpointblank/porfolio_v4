import React, { Component } from 'react';
import { connect } from 'react-redux';

class Portfolio extends Component{
    render(){
        return(
            <>
                <p>import list of projects and list them here</p>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        falseState: 'state.falsestate'
    }
}

export default connect(mapStateToProps)(Portfolio);