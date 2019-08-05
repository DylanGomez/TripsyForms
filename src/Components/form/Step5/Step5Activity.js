import React, { Component } from 'react';
import './Step5Activity.scss'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
// import templeIcon from '../../../Icons/pagoda.svg'
// import snorklingIcon from '../../../Icons/snorkeling.svg'
import questionmark from '../../../Icons/questionmarks.svg'


class Step5Activity extends Component {

    handleClick(form, value) {
        this.props.addState("activity", value);
        var _this = this;
        setTimeout(function () {
            _this.props.toggleForm(form)
        }, 200);
    }     

    render() {
        return (
            <div className="background">
                <div className="formBox">
                    <h3 className="title">Welke activiteit past bij jou?</h3>
                    <div className="cardPosition">
                        <CardDeck className="cardDeck">
                            <Card onClick={() => {
                                    this.handleClick("loading", this.props.country.step5.one.value);
                                }}>
                                <Card.Body >
                                    <img className="activityIcon" src={this.props.country.step5.one.icon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    {this.props.country.step5.one.text}
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("loading", this.props.country.step5.two.value);
                                }}>
                                <Card.Body >
                                    <img className="activityIcon" src={this.props.country.step5.two.icon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                {this.props.country.step5.two.text}
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("loading", this.props.country.step5.three.value);
                                }}>
                                <Card.Body >
                                    <img className="activityIcon" src={this.props.country.step5.three.icon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                {this.props.country.step5.three.text}
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("loading", "dontknow");
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