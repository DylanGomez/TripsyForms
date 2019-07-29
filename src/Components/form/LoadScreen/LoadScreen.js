import React, { Component } from 'react';
import './LoadScreen.scss'
import { Spinner } from 'react-bootstrap';




class LoadScreen extends Component {

    componentDidMount(){
        var _this = this
        setTimeout(function () {
            _this.props.goToSuccess()
        }, 2000);
    }

    render() {
        return (
            <div className="background">
                <div className="formBoxLoadscreen">
                    <h3 className="title">Even geduld, wij zijn op zoek naar je perfecte reis</h3>
                    <div className="gifPosition">
                        <Spinner className="spinner" animation="border" variant="success" />                    
                    </div>
                </div>
            </div>
        )
    }
}

export default LoadScreen;