import React, { Component } from 'react';
import './Step2Weeks.scss'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import datePickerSvg from '../../../Icons/datepicker.svg'



class Step2Weeks extends Component {

    handleClick(form, value) {
        this.props.addState("weeks", value);
        var _this = this;
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
                                        1 week
                                </Card.Footer>
                                </Card>
                                <Card onClick={() => {
                                    this.handleClick("step3", 14);
                                }}>
                                    <Card.Body >
                                        <img className="pickerIcon" src={datePickerSvg} alt="" />
                                    </Card.Body>
                                    <Card.Footer className="cardFooter">
                                        2 weken
                                </Card.Footer>
                                </Card>
                                <Card onClick={() => {
                                    this.handleClick("step3", 21);
                                }}>
                                    <Card.Body>
                                        <img className="pickerIcon" src={datePickerSvg} alt="" />
                                    </Card.Body>
                                    <Card.Footer className="cardFooter">
                                        3 weken
                                </Card.Footer>
                                </Card>
                                <Card onClick={() => {
                                    this.handleClick("step3", 31);
                                }}>
                                    <Card.Body >
                                        <img className="pickerIcon" src={datePickerSvg} alt="" />
                                    </Card.Body>
                                    <Card.Footer className="cardFooter">
                                        4+ weken
                                </Card.Footer>
                                </Card>
                            </CardDeck>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step2Weeks;