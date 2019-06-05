import React, { Component } from 'react';
import './Step5Activity.scss'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import templeIcon from '../../../Icons/pagoda.svg'
import scubaIcon from '../../../Icons/scuba.svg'

import questionmark from '../../../Icons/information.svg'




class Step5Activity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            formInfo: {}
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
                        <CardDeck className="cardDeck">
                            <Card onClick={() => {
                                    this.handleClick("step6", this.props.country.step5.one.value);
                                }}>
                                <Card.Body >
                                    <img className="activityIcon" src={this.props.country.step5.one.icon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    {this.props.country.step5.one.text}
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step6", this.props.country.step5.two.value);
                                }}>
                                <Card.Body >
                                    <img className="activityIcon" src={templeIcon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                {this.props.country.step5.two.text}
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step6", this.props.country.step5.three.value);
                                }}>
                                <Card.Body >
                                    <img className="activityIcon" src={scubaIcon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                {this.props.country.step5.three.text}
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Step5Activity;