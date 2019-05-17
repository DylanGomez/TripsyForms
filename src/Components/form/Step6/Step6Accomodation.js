import React, { Component } from 'react';
import './Step6Accomodation.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import formSvg from '../../../Icons/icons_forms.svg'

class Step6Accomodation extends Component {

    handleClick(form, value) {
        this.props.addState("accomodation", value);
        this.props.toggleForm(form);
    }

    render() {
        return (
            <div className="background">
                <div className="formBox">
                    <ProgressBar className="progressBar" variant="success" now={30} />
                    <h3 className="title">Welk type verblijf heeft je voorkeur</h3>
                    <div>
                        <CardDeck className="cardDeck">
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step6A", "hotel");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Hotels
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step6A", "resort");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Resorts
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step7", "beachhouse");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Strandhutje
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body onClick={() => {
                                    this.handleClick("step7", "dontknow");
                                }}>
                                    <img className="svgIcon" src={formSvg} alt=""/>
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