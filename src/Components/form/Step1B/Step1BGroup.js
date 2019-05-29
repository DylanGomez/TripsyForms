import React, { Component } from 'react';
import './Step1BGroup.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import enterpriseIcon from '../../../Icons/enterprise.svg'
import friendshipIcon from '../../../Icons/friendship.svg'
import congressIcon from '../../../Icons/ho-chi-minh-mausoleum.svg'
import clubIcon from '../../../Icons/football-club.svg'


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
                    <div className="cardPosition">
                        <CardDeck className="cardDeck">
                            <Card onClick={() => {
                                    this.handleClick("step1A", "friendgroup");
                                }}>
                                <Card.Body>
                                    <img className="groupIcon" src={friendshipIcon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Vriendengroep
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step1A", "club");
                                }}>
                                <Card.Body>
                                    <img className="groupIcon" src={clubIcon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Club/ Vereniging
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step1A", "business");
                                }}>
                                <Card.Body>
                                    <img className="groupIcon" src={enterpriseIcon} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Werk/ Business
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step1A", "congres");
                                }}>
                                <Card.Body >
                                    <img className="groupIcon" src={congressIcon} alt=""/>
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