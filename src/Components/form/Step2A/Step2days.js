import React, { Component } from 'react';
import './Step2days.scss'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import datePickerSvg from '../../../Icons/Hoe-lang-wil-je-op-reis.svg'

class Step2days extends Component {

    handleClick(form, value) {
        var _this = this;
        this.props.addState("days", value);
        setTimeout(function () {
            _this.props.toggleForm(form)
        }, 200);
    }

    render() {
        return (
            <div className="background">
                <div className="formBox">
                    <h3 className="title">Hoe lang wil je op reis?</h3>
                    <div className="cardPosition">
                            <CardDeck className="cardDeck">
                                <Card onClick={() => {
                                    this.handleClick("step3", 7);
                                }}>
                                    <Card.Body >
                                        <img className="pickerIcon" src={datePickerSvg} alt="" />
                                    </Card.Body>
                                    <Card.Footer className="cardFooter">
                                        5 dagen
                                </Card.Footer>
                                </Card>
                                <Card onClick={() => {
                                    this.handleClick("step3", 14);
                                }}>
                                    <Card.Body >
                                        <img className="pickerIcon" src={datePickerSvg} alt="" />
                                    </Card.Body>
                                    <Card.Footer className="cardFooter">
                                        7 dagen
                                </Card.Footer>
                                </Card>
                                <Card onClick={() => {
                                    this.handleClick("step3", 21);
                                }}>
                                    <Card.Body>
                                        <img className="pickerIcon" src={datePickerSvg} alt="" />
                                    </Card.Body>
                                    <Card.Footer className="cardFooter">
                                        9 dagen
                                </Card.Footer>
                                </Card>
                                <Card onClick={() => {
                                    this.handleClick("step3", 31);
                                }}>
                                    <Card.Body >
                                        <img className="pickerIcon" src={datePickerSvg} alt="" />
                                    </Card.Body>
                                    <Card.Footer className="cardFooter">
                                        11+ dagen
                                </Card.Footer>
                                </Card>
                            </CardDeck>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step2days;