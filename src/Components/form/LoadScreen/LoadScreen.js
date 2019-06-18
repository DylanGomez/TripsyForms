import React, { Component } from 'react';
import './LoadScreen.scss'

import loadingIcon from "../../../Icons/Eclipse-1s-200px.gif"


class LoadScreen extends Component {

    componentDidMount(){
        var _this = this
        setTimeout(function () {
            _this.props.toggleForm("finalPage")
        }, 2000);
    }

    render() {
        return (
            <div className="background">
                <div className="formBox">
                    <h3 className="title">Even geduld, wij zijn op zoek naar je perfecte reis</h3>
                    <div className="gifPosition">
                        <img className="gif" src={loadingIcon} alt="loading..." />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoadScreen;