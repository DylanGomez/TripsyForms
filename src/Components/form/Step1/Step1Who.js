import React, { Component } from 'react';
import './Step1Who.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import Slide from 'react-reveal/Slide';

import formSvg from '../../../Icons/icons_forms.svg'

class Step1Who extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };

    }

    handleClick(form, value) {
        var _this = this;
        this.props.addState("who", value);
        this.animate();
        setTimeout(function () {
            _this.props.toggleForm(form)
        }, 200);
    }

    animate() {
        this.setState({
            show: false
        });
    }

    componentDidMount(){
        this.setState({
            show: true
        })
    }

    render() {
        return (
            <div className="background">
                <div className="formBox">
                    <h3 className="title"> Met wie ga je op reis?</h3>
                    <div className="cardPosition">
                    <Slide right opposite when={this.state.show}>
                        <CardDeck className="cardDeck">
                            <Card onClick={() => {
                                    this.handleClick("step2", "alone");
                                }}>
                                <Card.Body>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Individueel
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step2", "partner");
                                }}>
                                <Card.Body>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Met Partner
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step1A", "family");
                                }}>
                                <Card.Body>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Met Familie
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step1B", "group");
                                }}>
                                <Card.Body>
                                    <img className="svgIcon" src={formSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Met een groep
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                        </Slide>

                    </div>
                </div>
            </div>
        )
    }
}

export default Step1Who;