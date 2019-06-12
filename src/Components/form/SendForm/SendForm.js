import React, { Component } from 'react';
import './SendForm.scss'
import { Form, Button } from 'react-bootstrap';
import IntlTelInput from 'react-intl-tel-input';
import HelpIcon from '@material-ui/icons/Help';
import HelpModal from '../../MainScreen/helpModal/HelpModal';
import MediaQuery from 'react-responsive';

class SendForm extends Component {
    constructor() {
        super();
        this.state = {
            gender: "",
            name: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            formInfo: {},
            helpOpen: false,
        }
        this.toggleHelp = this.toggleHelp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    getAmountOfPeople(whoState) {
        if (whoState === "alone") {
            return 1;
        } else if (whoState === "partner") {
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
                    this.props.history.push('/success')
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

    componentDidMount() {
        var states = this.props.location.givenState;

        this.setState({
            formInfo: states
        })

    }

    toggleHelp() {
        this.setState(prevState => ({ helpOpen: !prevState.helpOpen }))
    }

    render() {

        return (
            <div className="pageDiv">
                <div className="backgroundNew">
                    <div className="logoSuccess">  </div>
                    <div className="helpIconSuccess" onClick={() => { this.toggleHelp() }}> <HelpIcon /><span className="helpwordSuccess">Help</span></div>
                    {this.state.helpOpen &&
                        <HelpModal toggleHelp={this.toggleHelp} />
                    }
                    <div className="textDivSend">
                        <span className="tripSendText">Jouw droomtrip naar Thailand</span>
                        <br />
                        <MediaQuery query='(min-device-width: 1224px)'>
                            <span className="subSendTripText">Wij maken je reis - gratis en vrijblijvend - volledig op maat</span>
                        </MediaQuery>
                        <MediaQuery query='(max-device-width: 1224px)'>
                            <span className="subSendTripText">gratis en vrijblijvend</span>
                        </MediaQuery>
                        <div className="formArea">
                            <div className="formAreaRight">
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

                                <Form.Control className="formField" name="lastname" size="lg" type="text" placeholder="Achternaam" onChange={this.changeHandler} />

                                <Form.Control className="formField" name="email" size="lg" type="text" placeholder="E-mailadres" onChange={this.changeHandler} />

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
                    </div>
                </div>
                <div className="bottomDiv">
                    {/* <span className="garantyTitle">Garantiefonds</span>
                    <br />
                    <span className="garantyText"> Al onze reizen vallen onder het garantiefonds van de GGTO.
                    Hierdoor heb je de garantie dat wanneer de organisator van de reis,
                    zoals de lokale touroperator of de luchtvaartmaatschappij, failliet gaat je het betaalde bedrag vergoedt krijgt.
                    Voor andere onvoorziene gebeurtenissen raden wij een goede reisverzekering aan.
                    Wij kunnen je hierbij helpen.</span>
                    <br />
                    <img className="ggtoLogo" src={GGTOLogo} alt="" />
                    <br />
                    <div className="line"></div>
                    <br /> */}
                    <div className="links1">
                        <a href="https://tripsy.nl/"><span className="linksLeft"> Disclaimer </span></a>
                        <a href="https://tripsy.nl/"><span className="linksLeft"> Reisvoorwaarden </span></a>
                        <a href="https://tripsy.nl/"><span className="linksLeft"> Privacybeleid</span></a>
                    </div>
                    <div className="links2">
                        <span className="linksRight"> © Tripsy B.V. 2019</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SendForm;