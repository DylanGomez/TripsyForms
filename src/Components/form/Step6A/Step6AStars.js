import React, { Component } from 'react';
import './Step6AStars.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import threeStars from '../../../Icons/3stars.svg'
import fourStars from '../../../Icons/4stars.svg'
import fiveStars from '../../../Icons/5stars.svg'
import questionmark from '../../../Icons/information.svg'





class Step6AStars extends Component {

    handleClick(form, value) {
        this.props.addState("acommodationStars", value);
        this.props.toggleForm(form);
    }

    render() {
        return (
            <div className="background">
                <div className="formBox">
                    <ProgressBar className="progressBar" variant="success" now={60} />
                    <h3 className="title">Hoe luxe wil je verblijven?</h3>
                    <div className="cardPosition">
                        <CardDeck className="cardDeck">
                            <Card onClick={() => {
                                    this.handleClick("finalPage", "3stars");
                                }}>
                                <Card.Body >
                                    <img className="starsIcon" src={threeStars} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    3 sterren
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("finalPage", "4stars");
                                }}>
                                <Card.Body >
                                    <img className="starsIcon" src={fourStars} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    4 sterren
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("finalPage", "5stars");
                                }}>
                                <Card.Body>
                                    <img className="starsIcon" src={fiveStars} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    5 sterren
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("finalPage", "dontknow");
                                }}>
                                <Card.Body >
                                    <img className="starsIcon" src={questionmark} alt=""/>
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

export default Step6AStars;