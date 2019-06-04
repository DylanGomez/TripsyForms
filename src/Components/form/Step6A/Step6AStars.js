import React, { Component } from 'react';
import './Step6AStars.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import threeStars from '../../../Icons/3stars.svg'
import fourStars from '../../../Icons/4stars.svg'
import fiveStars from '../../../Icons/5stars.svg'
import questionmark from '../../../Icons/information.svg'
import Slide from 'react-reveal/Fade';


class Step6AStars extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    handleClick(form, value) {
        this.props.addState("acommodationStars", value);
        this.animate();
        var _this = this;
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
                    <h3 className="title">Hoe luxe wil je verblijven?</h3>
                    <div className="cardPosition">
                    <Slide right opposite when={this.state.show}>

                        <CardDeck className="cardDeck">
                            <Card onClick={() => {
                                    this.handleClick("loading", "3stars");
                                }}>
                                <Card.Body >
                                    <img className="starsIcon" src={threeStars} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    3 sterren
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("loading", "4stars");
                                }}>
                                <Card.Body >
                                    <img className="starsIcon" src={fourStars} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    4 sterren
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("loading", "5stars");
                                }}>
                                <Card.Body>
                                    <img className="starsIcon" src={fiveStars} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    5 sterren
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("loading", "dontknow");
                                }}>
                                <Card.Body >
                                    <img className="starsIcon" src={questionmark} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Weet ik niet
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

export default Step6AStars;