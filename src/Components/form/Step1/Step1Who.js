import React, { Component } from 'react';
import './Step1Who.scss'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import travelerSvg from '../../../Icons/Partner.svg'
import familieSvg from '../../../Icons/Familie.svg'
import vriendenSvg from '../../../Icons/Friends.svg'
import bedrijfSvg from '../../../Icons/Bedrijf.svg'

class Step1Who extends Component {

    handleClick(form, value) {
        var _this = this;
        this.props.addState("who", value);
        setTimeout(function () {
            _this.props.toggleForm(form)
        }, 200);
    }

    render() {
        return (
            <div className="background">
                <div className="formBox">
                    <h3 className="title">Met wie ga je op reis?</h3>
                    <div className="cardPosition">
                        <CardDeck className="cardDeck">
                            <Card onClick={() => {
                                this.handleClick("step2", "alone");
                            }}>
                                <Card.Body>
                                    <img className="svgIcon" src={travelerSvg} alt="" />
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Met partner
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                this.handleClick("step2", "partner");
                            }}>
                                <Card.Body>
                                    <img className="svgIcon" src={familieSvg} alt="" />
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Met familie
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                this.handleClick("step1A", "family");
                            }}>
                                <Card.Body>
                                    <img className="svgIcon" src={vriendenSvg} alt="" />
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Met vrienden
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                this.handleClick("step1B", "group");
                            }}>
                                <Card.Body>
                                    <img className="svgIcon" src={bedrijfSvg} alt="" />
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Met je bedrijf
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