import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Step1BGroup.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import formSvg from '../../../Icons/icons_forms.svg'

class Step1BGroup extends Component {

    handleClick(form, value) {
        this.props.addState("group", value);
        this.props.toggleForm(form);
    }

    render() {
        return (
            <div className="background">
                <div className="formBox">
                    <ProgressBar className="progressBar" variant="success" now={25} />
                    <h3 className="title"> Met welke groep ga je op reis?</h3>
                    <div>
                        <CardDeck className="cardDeck">
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step1A", "friendgroup");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Vriendengroep
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step1A", "club");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Club/ Vereniging
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step1A", "business");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Werk/ Business
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step1A", "congres");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Congress/ Cursus
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step1BGroup;