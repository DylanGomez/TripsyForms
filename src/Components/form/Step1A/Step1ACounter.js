import React, { Component } from 'react';
import './Step1ACounter.scss'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Button } from 'semantic-ui-react';



class Step1ACounter extends Component {

    state = {
        AdultCount: 1,
        TeenCount: 0,
        ChildCount: 0,
        BabyCount: 0,
        show: false
    }

    increment = (typeCount) => {
        if (typeCount === "adult") {
            this.setState({
                AdultCount: this.state.AdultCount + 1
            });
        } if (typeCount === "teen") {
            this.setState({
                TeenCount: this.state.TeenCount + 1
            });
        } if (typeCount === "child") {
            this.setState({
                ChildCount: this.state.ChildCount + 1
            });
        } if (typeCount === "baby") {
            this.setState({
                BabyCount: this.state.BabyCount + 1
            });
        }
    }

    decrement = (typeCount) => {
        if (typeCount === "adult") {
            this.setState({
                AdultCount: this.state.AdultCount - 1
            });
        } if (typeCount === "teen") {
            this.setState({
                TeenCount: this.state.TeenCount - 1
            });
        } if (typeCount === "child") {
            this.setState({
                ChildCount: this.state.ChildCount - 1
            });
        } if (typeCount === "baby") {
            this.setState({
                BabyCount: this.state.BabyCount - 1
            });
        }
    }

    handleSubmit(form) {
        this.props.addState("howMany", this.state);
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

    componentDidMount() {
        this.setState({
            show: true
        })
    }

    render() {
        return (
            <div className="background">
                <div className="formBoxWithButton">
                    <h3 className="title"> Met hoeveel personen ga je op reis?</h3>
                    <div className="cardPosition">
                        <CardDeck className="cardDeck">
                            <Card>
                                <Card.Body>
                                    <span className="addSpan">
                                        <Button disabled={this.state.AdultCount === 1} className="add-button" onClick={() => this.decrement("adult")} circular icon='minus' />
                                        <span className="counter">{this.state.AdultCount}</span>
                                        <Button className="add-button" onClick={() => this.increment("adult")} circular icon='add' />
                                    </span>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Volwassenen
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <span className="addSpan">
                                        <Button disabled={this.state.TeenCount === 0} className="add-button" onClick={() => this.decrement("teen")} circular icon='minus' />
                                        <span className="counter">{this.state.TeenCount}</span>
                                        <Button className="add-button" onClick={() => this.increment("teen")} circular icon='add' />
                                    </span>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Jongeren  &lt; 16 jaar
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <span className="addSpan">
                                        <Button disabled={this.state.ChildCount === 0} className="add-button" onClick={() => this.decrement("child")} circular icon='minus' />
                                        <span className="counter">{this.state.ChildCount}</span>
                                        <Button className="add-button" onClick={() => this.increment("child")} circular icon='add' />
                                    </span>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Kinderen &lt; 12 jaar
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <span className="addSpan">
                                        <Button disabled={this.state.BabyCount === 0} className="add-button" onClick={() => this.decrement("baby")} circular icon='minus' />
                                        <span className="counter">{this.state.BabyCount}</span>
                                        <Button className="add-button" onClick={() => this.increment("baby")} circular icon='add' />
                                    </span>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Baby's &lt; 2 jaar
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                    <Button color="green" className="ui large button stepButton" onClick={() =>
                        this.handleSubmit("step2")}>Volgende</Button>

                </div>
            </div>
        )
    }
}

export default Step1ACounter;