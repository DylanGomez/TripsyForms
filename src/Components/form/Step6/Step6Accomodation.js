import React, { Component } from 'react';
import './Step6Accomodation.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import hotelIcon from '../../../Icons/resort.svg'
import resortIcon from '../../../Icons/sun-bath.svg'
import beachhouseIcon from '../../../Icons/stilt-home.svg'
import questionmark from '../../../Icons/information.svg'


class Step6Accomodation extends Component {

    handleClick(form, value) {
        this.props.addState("accomodation", value);
        this.props.toggleForm(form);
    }

    render() {
        return (
            <div className="background">
                <div className="formBox">
                    <ProgressBar className="progressBar" variant="success" now={55} />
                    <h3 className="title">Welk type verblijf heeft je voorkeur</h3>
                    <div className="cardPosition">
                        <CardDeck className="cardDeck">
                            <Card onClick={() => {
                                    this.handleClick("step6A", "hotel");
                                }}>
                                <Card.Body>
                                    <img className="accomodationIcon" src={hotelIcon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Hotel
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step6A", "resort");
                                }}>
                                <Card.Body >
                                    <img className="accomodationIcon" src={resortIcon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Resort
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("finalPage", "beachhouse");
                                }}>
                                <Card.Body >
                                    <img className="accomodationIcon" src={beachhouseIcon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Strandhutje
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("finalPage", "dontknow");
                                }}>
                                <Card.Body >
                                    <img className="accomodationIcon" src={questionmark} alt=""/>
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

export default Step6Accomodation;