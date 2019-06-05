import React, { Component } from 'react';
import './Step3When.scss'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import planeSvg from '../../../Icons/world.svg'


class Step3When extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };

    }

    handleClick(form, value) {
        this.props.addState("when", value);
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
                    <h3 className="title">Wanneer wil je op reis?</h3>
                    <div className="cardPosition">
                        <CardDeck className="cardDeck">
                            <Card onClick={() => {
                                    this.handleClick("step4", "1to3Months");
                                }}>
                                <Card.Body>
                                    <img className="planeIcon" src={planeSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    In 1 - 3 maanden
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step4", "4to6Months");
                                }}>
                                <Card.Body >
                                    <img className="planeIcon" src={planeSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    In 4 - 6 maanden
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step4", "7to9Months");
                                }}>
                                <Card.Body >
                                    <img className="planeIcon" src={planeSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    In 7 - 9 maanden
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("step4", "10to12Months");
                                }}>
                                <Card.Body >
                                    <img className="planeIcon" src={planeSvg} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    In 10 - 12 maanden
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step3When;