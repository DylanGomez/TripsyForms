import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Step1Who.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import formSvg from '../../../Icons/icons_forms.svg'

class Step1Who extends Component {

    handleClick(form, value) {
        this.props.addState("who", value);
        this.props.toggleForm(form);
    }

    render() {
        return (
            <div className="background">
                <div className="formBox">
                    <ProgressBar className="progressBar" variant="success" now={20} />
                    <h3 className="title"> Met wie ga je op reis?</h3>
                    <div>
                        <CardDeck className="cardDeck">
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step2", "alone");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Individueel
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step2", "partner");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Met Partner
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step1A", "family");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Met Familie
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step1B", "group");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Met een groep
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step1Who;