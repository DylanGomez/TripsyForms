import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Step2Weeks.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import formSvg from '../../../Icons/icons_forms.svg'

class Step2Weeks extends Component {

    handleClick(form, value) {
        this.props.addState("weeks", value);
        this.props.toggleForm(form);
    }

    render() {
        return (
            <div className="background">
                <div className="formBox">
                    <ProgressBar className="progressBar" variant="success" now={30} />
                    <h3 className="title">Hoe lang wil je op reis?</h3>
                    <div>
                        <CardDeck className="cardDeck">
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step3", "1week");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    1 week
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step3", "2weeks");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    2 weken
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step3", "3weeks");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    3 weken
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step3", "4+ weeks");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
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