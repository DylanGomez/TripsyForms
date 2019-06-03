import React, { Component } from 'react';
import './SendForm.scss'
import { Form, Button } from 'react-bootstrap';
import IntlTelInput from 'react-intl-tel-input';




class SendForm extends Component {
    constructor() {
        super();
        this.state = {
            gender: "",
            name: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            formInfo: {

            },
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    getAmountOfPeople(whoState) {
        if(whoState === "alone"){
            return 1;
        } else if (whoState === "partner"){
            return 2;
        } else {
            return 0;
        }
    }

    handleSubmit(event) {
        var tripName = this.state.name + "'s Trip"

        var amount = this.getAmountOfPeople(this.state.formInfo.who);

        event.preventDefault();
        const data = JSON.stringify({
            tripTitle: tripName,
            tripType: "NATURE",
            tripSpeed: this.state.formInfo.state.speed,
            tripCountry: "Thailand",
            tripDescription: tripName,
            tripLength: this.state.formInfo.state.weeks,
            tripPeople: amount,
            email: this.state.email,
            customerName: this.state.name,
            prefferedActivity: this.state.formInfo.state.activity,
            accomodation: this.state.formInfo.state.accomodation
        });

        fetch('http://localhost:8042/api/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }).then(res => {
            if (res.ok) {
                res.json().then(json => {
                    console.log(json)
                })
                return res;
            }      
        });
    }


    onChange(value) {
        this.setState({
            phoneNumber: value
        });
    }

    changeHandler = event => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value  
        });
    }

    componentDidMount(){
        var states = this.props.location.givenState;

        this.setState({
            formInfo: states
        })
    }

    render() {
        return (
            <div className="pageDiv">
                <div className="textArea">
                    <div className="textBlock">
                        <span className="successText">Gelukt!</span>
                        <br />
                        <span className="subtitleSuccess">We hebben een passend reisaanbod voor je</span>
                    </div>
                </div>
                <div className="formArea">
                    <span className="whoText">Wie mag het reisaanbod ontvangen?</span>
                    <br />
                    <div className="radio-buttons">
                        <div className="inputGroup">
                            <input onChange={this.changeHandler} value="Man" id="radio1" name="gender" type="radio" />
                            <label htmlFor="radio1">Man</label>
                        </div>
                        <div className="inputGroup">
                            <input onChange={this.changeHandler} value="Woman" id="radio2" name="gender" type="radio" />
                            <label htmlFor="radio2">Vrouw</label>
                        </div>
                    </div>
                    <Form.Control className="formField" name="name" size="lg" type="text" placeholder="Voornaam" onChange={this.changeHandler} />
                    <br />
                    <Form.Control className="formField" name="lastname" size="lg" type="text" placeholder="Achternaam" onChange={this.changeHandler} />
                    <br />
                    <Form.Control className="formField" name="email" size="lg" type="text" placeholder="E-mailadres" onChange={this.changeHandler} />
                    < br />
                    <IntlTelInput
                        className="telephoneInput"
                        name="phoneNumber"
                        onPhoneNumberChange={(status, value, countryData, number, id) => {
                            this.onChange(number);
                        }}
                        preferredCountries={['nl']}
                        onlyCountries={['nl', 'be']}
                    />

                    <Button variant="success" size="lg" onClick={this.handleSubmit}>Ja, verstuur het reisaanbod</Button>
                    <br />
                    <span><i>Gratis en vrijblijvend </i></span>

                </div>
            </div>
        )
    }
}

export default SendForm;