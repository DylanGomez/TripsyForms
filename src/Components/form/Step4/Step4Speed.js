import React, { Component } from 'react';
import './Step4Speed.scss'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import bunnyIcon from '../../../Icons/bunny.svg'
import meditateIcon from '../../../Icons/padmasana.svg'
import turtleIcon from '../../../Icons/turtle.svg'
import questionmark from '../../../Icons/information.svg'

class Step4Speed extends Component {

    handleClick(form, value) {
        this.props.addState("speed", value);
        var _this = this;
        setTimeout(function () {
            _this.props.toggleForm(form)
        }, 200);
    }    

    render() {
        return (
            <div className="background">
                <div className="formBox">
                    <h3 className="title">In welk tempo wil je reizen?</h3>
                    <div className="cardPosition">
                        <CardDeck className="cardDeck">
                            <Card onClick={() => {
                                    this.handleClick("step5", "FAST");
                                }}>
                                <Card.Body>
                                    <img className="speedIcon" src={bunnyIcon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Actief
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step5", "MODERATE");
                                }}>
                                <Card.Body>
                                    <img className="speedIcon" src={meditateIcon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    In balans
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step5", "SLOW");
                                }}>
                                <Card.Body>
                                    <img className="speedIcon" src={turtleIcon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Rustig aan
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step5", "dontknow");
                                }}>
                                <Card.Body >
                                    <img className="speedIcon" src={questionmark} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Weet ik niet
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step4Speed;