import React, { Component } from 'react';
import './SendForm.scss'
import { Form, Button } from 'react-bootstrap';
import IntlTelInput from 'react-intl-tel-input';
import HelpIcon from '@material-ui/icons/Help';
import HelpModal from '../../MainScreen/helpModal/HelpModal';
import MediaQuery from 'react-responsive';
import * as emailjs from 'emailjs-com';


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
        this.mailService = this.mailService.bind(this);
    }
    getAmountOfPeople(whoState) {
        if (whoState === "alone") {
            return 1;
        } else if (whoState === "partner") {
            return 2;
        } else {
            return 1;
        }
    }

    handleSubmit(event) {
        var tripName = this.state.name + "'s Trip"
        if (this.state.formInfo) {
            var amount = this.getAmountOfPeople(this.state.formInfo.who);
            event.preventDefault();
            var data = JSON.stringify({
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
        } else {
            data = "";
        }

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
        }).catch((error) => {
            console.log("test");
        })
    }

    mailService(event) {
        event.preventDefault();

        var amount = this.getAmountOfPeople(this.state.formInfo.who);

        var customerTemplate = {
            from_name: 'tripsytravelservice@gmail.com',
            to_name: this.state.email,
            subject: this.state.name,
            message_html: 'Beste ' + this.state.name + ', <br> ' +
                '<br>' +
                'Bedankt voor je aanvraag! ' +
                '<br>' +
                '<br>' +
                'Wij sturen je zo snel mogelijk een reisplan op maat. We hebben nog een paar vragen, want: hoe meer we weten, hoe beter! <br>' +
                '<br>' +
                'Heb je deze vragen al ingevuld? Heel erg bedankt. Mocht je ze hebben gemist klik dan <a href="https://tripsy.nl/je-bent-er-bijna/">hier</a> en vul ze alsnog in zodat wij een zo goed mogelijk reisplan voor je kunnen maken.' +
                '<br>' +
                '<br>' +
                'Met vriendelijke groet, ' +
                'Het Tripsy team' +
                '<br>' +
                '<br>' +
                'Bellen: 030 - 711 68 97 <br>' +
                'Mailen: hallo@tripsy.nl <br>' +
                'Website: www.tripsy.nl <br>' +
                '<br>'
        }
        var tripsyTemplate = {
            from_name: 'tripsytravelservice@gmail.com',
            to_name: 'tripsytravelservice@gmail.com',
            subject: 'Bevestiging aanvraag',
            message_html: '<b>AANVRAAG REISVOORSTEL: Thailand </b> ' +
                '<br> <br> <b>Aanvrager:</b> ' + this.state.name + ' <br> ' +
                '<b>E-mailadres:</b> ' + this.state.email + '<br> <br> <br> ' +
                '<b>Aantal personen:</b>' + amount + '<br>' +
                '<b>Hoe lang wil je op reis:</b> ' + this.state.formInfo.state.weeks + ' dagen<br>' +
                '<b>Wat wil je het liefst ervaren:</b> ' + this.state.formInfo.state.activity + '<br>' +
                '<b>Voorkeur voor accomodatie:</b> ' + this.state.formInfo.state.accomodation + '<br>' +
                + '<br>' +
                'Met vriendelijke groet,<br> Het Tripsy Team <br> <br>' +
                'Bellen: +31 (0)30 - 711 62 47 <br>' +
                'Mailen: hallo@tripsy.nl<br>' +
                'Website: www.tripsy.nl<br> <br>'
        }

        emailjs.send('gmail', 'custome_template', customerTemplate, 'user_pFcFNWKnDCsz1SB49OGyC')
            .then(function (response) {
                emailjs.send('gmail', 'template_swB6ioGg', tripsyTemplate, 'user_pFcFNWKnDCsz1SB49OGyC')
                    .then(function (response) {
                        this.props.history.push('/success')
                    });
            }, function (err) {
                console.log(err)
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

                                <Button variant="success" size="lg" onClick={this.mailService}>Ja, verstuur het reisaanbod</Button>
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