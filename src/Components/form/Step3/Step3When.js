import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Step3When.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import formSvg from '../../../Icons/icons_forms.svg'

class Step3When extends Component {

    handleClick(form, value) {
        this.props.addState("when", value);
        this.props.toggleForm(form);
    }

    render() {
        return (
            <div className="background">
                <div className="formBox">
                    <ProgressBar className="progressBar" variant="success" now={30} />
                    <h3 className="title">Wanneer wil je op reis?</h3>
                    <div>
                        <CardDeck className="cardDeck">
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step4", "1to3Months");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    In 1 - 3 maanden
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step4", "4to6Months");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    In 4 - 6 maanden
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step4", "7to9Months");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    In 7 - 9 maanden
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step4", "10to12Months");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    In 10 - 12 maanden
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step3When;