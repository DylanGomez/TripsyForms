import React, { Component } from 'react';
import './Step5Activity.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import elephantIcon from '../../../Icons/elephant.svg'
import templeIcon from '../../../Icons/pagoda.svg'
import scubaIcon from '../../../Icons/scuba.svg'

import questionmark from '../../../Icons/information.svg'
import Slide from 'react-reveal/Fade';




class Step5Activity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };

    }

    handleClick(form, value) {
        this.props.addState("activity", value);
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
                    <h3 className="title">Welke activiteit spreekt je het meeste aan?</h3>
                    <div className="cardPosition">
                    <Slide right opposite when={this.state.show}>
                        <CardDeck className="cardDeck">
                            <Card onClick={() => {
                                    this.handleClick("step6", "elephantPark");
                                }}>
                                <Card.Body >
                                    <img className="activityIcon" src={elephantIcon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Olifanten natuurpark
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step6", "tempelVisit");
                                }}>
                                <Card.Body >
                                    <img className="activityIcon" src={templeIcon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Tempel bezoeken
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step6", "diving");
                                }}>
                                <Card.Body >
                                    <img className="activityIcon" src={scubaIcon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Snorkelen en duiken
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step6", "dontknow");
                                }}>
                                <Card.Body >
                                    <img className="activityIcon" src={questionmark} alt=""/>
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

export default Step5Activity;