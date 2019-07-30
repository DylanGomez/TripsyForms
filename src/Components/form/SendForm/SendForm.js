import React, { Component } from 'react';
import './SendForm.scss'
import { Form, Button, Spinner } from 'react-bootstrap';
import IntlTelInput from 'react-intl-tel-input';
import HelpIcon from '@material-ui/icons/Help';
import HelpModal from '../../MainScreen/helpModal/HelpModal';
import MediaQuery from 'react-responsive';
import * as emailjs from 'emailjs-com';
import { Redirect } from 'react-router-dom';

class SendForm extends Component {
    constructor() {
        super();
        this.state = {
            gender: "Man",
            name: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            formInfo: {},
            helpOpen: false,
            buttonPressed: false,
            validated: false,
        }
        this.toggleHelp = this.toggleHelp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.mailService = this.mailService.bind(this);
        this.goToSucces = this.goToSucces.bind(this);
        this.goToStart = this.goToStart.bind(this);
    }

    handleSubmit(event) {
        var tripName = this.state.name + "'s Trip"
        if (this.state.formInfo) {
            event.preventDefault();
            var data = JSON.stringify({
                tripTitle: tripName,
                tripType: "NATURE",
                tripSpeed: this.state.formInfo.state.speed,
                tripCountry: "Thailand",
                tripDescription: tripName,
                tripLength: this.state.formInfo.state.weeks,
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
            console.log(error)
        })
    }

    mailService(event) {
        const form = event.currentTarget;
        var check = false;
        if (form.checkValidity() === false) {
            event.preventDefault();
        } else {
            this.setState({
                buttonPressed: true,
            });
            check = true;
        }

        this.setState({
            validated: true
        });

        if (check) {
            var customerTemplate = {
                from_name: 'hallo@tripsy.nl',
                to_name: this.state.email,
                subject: this.state.name,
                message_html: 'Beste ' + this.state.name + ', <br> ' +
                    '<br>' +
                    'Bedankt voor je aanvraag! ' +
                    '<br>' +
                    '<br>' +
                    'Wij nemen zo spoedig mogelijk contact met je op om een telefonische afspraak te plannen. Dit is nodig om een reisplan op maat voor je te kunnen maken die in alle opzichten spectaculair is! <br>' +
                    '<br>' +
                    'Mocht je binnen 1 werkdag niks van ons hebben gehoord dan is er bij ons iets mis gegaan. Laat het ons alsjeblieft weten want we komen alsnog graag met je in contact.' +
                    '<br>' +
                    '<br>' +
                    'Met vriendelijke groet, ' +
                    'Het Tripsy team' +
                    '<br>' +
                    '<br>' +
                    'Bellen: 030 - 711 68 97 <br>' +
                    'Mailen: hallo@tripsy.nl <br>' +
                    'Website: www.tripsy.nl <br>' +
                    '<br>' +
                    '<br>' +

                    '<br>' +
                    '<br>'

            }
            var tripsyTemplate = {
                from_name: 'hallo@tripsy.nl',
                to_name: 'hallo@tripsy.nl',
                subject: 'Bevestiging aanvraag',
                message_html: '<b>AANVRAAG REISVOORSTEL: Thailand </b> ' +
                    '<br> <br> <b>Aanvrager voornaam:</b> ' + this.state.name + ' <br> ' +
                    '<b>Achternaam:</b> ' + this.state.lastname + '<br> ' +
                    '<b>E-mailadres:</b> ' + this.state.email + '<br>  ' +
                    '<b>Telefoonnummer:</b> ' + this.state.phoneNumber + '<br> <br> <br> ' +

                    '<b>Met wie wil je op reis: </b>' + this.state.formInfo.state.who + '<br>' +
                    '<b>Met hoeveel personen wil je op reis: </b>' + JSON.stringify(this.state.formInfo.state.howMany) + '<br>' +
                    '<b>Hoe lang wil je op reis: </b> ' + this.state.formInfo.state.weeks + ' dagen<br>' +
                    '<b>Wanneer wil je op reis: </b> ' + this.state.formInfo.state.when + ' <br>' +
                    '<b>In welke snelheid wil je reizen: </b> ' + this.state.formInfo.state.speed + ' <br>' +
                    '<b>Wat wil je het liefst ervaren:</b> ' + this.state.formInfo.state.activity + '<br>' +
                    '<b>Voorkeur voor accomodatie:</b> ' + this.state.formInfo.state.accomodation + '<br>' +
                    '<b>Optioneel: Met welke groep:</b> ' + this.state.formInfo.state.group + '<br>' +
                    + '<br>' +
                    'Met vriendelijke groet,<br> Het Tripsy Team <br> <br>' +
                    'Bellen: +31 (0)30 - 711 62 47 <br>' +
                    'Mailen: hallo@tripsy.nl<br>' +
                    'Website: www.tripsy.nl<br> <br>'
            }
            var _this = this;

            _this.props.history.push("/success")

            emailjs.send('gmail', 'customertemplate', customerTemplate, 'user_f1aefYYUBoh4CwEBL8rCN')
                .then(function (response) {
                    emailjs.send('gmail', 'tripsytemplate', tripsyTemplate, 'user_f1aefYYUBoh4CwEBL8rCN')
                }, function (err) {
                    console.log(err)
                });
        }
    }

    goToSucces() {
        return <Redirect to={{ pathname: '/success' }} />;
    }

    goToStart() {
        //HET IS NIET MOGELIJK OM TE NAVIGEREN DAN 1 BEPAALD LAND OMDAT DIT NERGENS STAAT OPGESLAGEN,
        // HET IS HANDIG DAT DIT NAVIGEERT NAAR EEN WORDPRESS PAGINA WAAR
        // DE KLANT HET LAND KAN KIEZEN IPV DIRECT NAAR HET FORMULIER NAVIGEREN, OP DEZE MANIER VERLIEST JE CONTEXT. 
        window.location.assign('https://www.tripsy.nl/bestemmingen');
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

    toggleHelp(e) {
        e.preventDefault();
        this.setState(prevState => ({ helpOpen: !prevState.helpOpen }))
    }

    render() {
        if (this.state.formInfo) {
            return (
                <div className="pageDiv">
                    <div className="headerDiv">
                        <a href="https://www.tripsy.nl/" target="_blank" rel="noopener noreferrer"><div className="logo"> Tripsy </div></a>
                        <div className="helpIcon" style={{ pointerEvents: this.state.helpOpen ? 'none' : 'fill' }} onClick={() => this.toggleHelp()}> <span className="helpword">Help</span>
                            {this.state.helpOpen &&
                            <HelpModal toggleHelp={this.toggleHelp} />
                            }
                        </div>
                    </div>
                    <div className="backgroundNew">
                        <div className="textDivSend">
                            <span className="tripSendText">Jouw rondreis Thailand</span>
                            <br />
                            <MediaQuery query='(min-device-width: 1224px)'>
                                <span className="subSendTripText">Wij maken graag gratis en vrijblijvend een reisplan op maat voor je. Daarvoor hebben nog een paar gegevens van je nodig. Je bent er bijna</span>
                            </MediaQuery>
                            <MediaQuery query='(max-device-width: 1224px)'>
                                <span className="subSendTripText">Wij maken je reis volledig op maat</span>
                            </MediaQuery>
                            <Form noValidate validated={this.state.validated} onSubmit={this.mailService}>
                                <div className="formArea">
                                    <div className="formAreaRight">
                                        <span className="whoText">Wie mag het reisplan ontvangen?</span>
                                        <br />
                                        <div className="radio-buttons">
                                            <div className="inputGroup">
                                                <input onChange={this.changeHandler} value="Man" id="radio1" name="gender" type="radio" defaultChecked="checked" />
                                                <label htmlFor="radio1" >Man</label>
                                            </div>
                                            <div className="inputGroup">
                                                <input onChange={this.changeHandler} value="Woman" id="radio2" name="gender" type="radio" />
                                                <label htmlFor="radio2">mevr.</label>
                                            </div>
                                        </div>
                                        <Form.Control className="formField" name="name" size="lg" type="text" placeholder="Voornaam" onChange={this.changeHandler} required />
                                        <Form.Control.Feedback type="invalid">
                                            Voer een naam in.
                                        </Form.Control.Feedback>
                                        <Form.Control className="formField" name="lastname" size="lg" type="text" placeholder="Achternaam" onChange={this.changeHandler} required />
                                        <Form.Control.Feedback type="invalid">
                                            Voer een achternaam in.
                                        </Form.Control.Feedback>
                                        <Form.Control className="formField" name="email" size="lg" type="text" placeholder="E-mailadres" onChange={this.changeHandler} required />
                                        <Form.Control.Feedback type="invalid">
                                            Voer een geldig e-mail adres in.
                                        </Form.Control.Feedback>

                                        <IntlTelInput
                                            className="telephoneInput"
                                            name="phoneNumber"
                                            onPhoneNumberChange={(status, value, countryData, number, id) => {
                                                this.onChange(number);
                                            }}
                                            preferredCountries={['nl']}
                                            onlyCountries={['nl', 'be']}
                                            required
                                        />
                                        {!this.state.buttonPressed &&
                                            <Button variant="success" size="lg" type="submit">Ja, ik wil graag een reisplan *</Button>
                                        }
                                        {this.state.buttonPressed &&
                                            <Button variant="success" size="lg" disabled>
                                                <Spinner animation="border" />
                                            </Button>
                                        }
                                        <br />
                                        <span class="gratisvrijblijvend"><i>*Altijd gratis en vrijblijvend</i></span>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="bottomDiv">
                    <div className="links1">
                        <span className="linksRight"> © Tripsy B.V. 2019</span>
                    </div>
                    <div className="links2">
                        <a href="https://www.tripsy.nl/algemene-voorwaarden"><span className="linksLeft"> Reisvoorwaarden </span></a>
                        <a href="https://www.tripsy.nl/privacy-cookies"><span className="linksLeft">Privacy & Cookies</span></a>
                    </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="pageDiv">
                    <div className="backgroundNew">
                        <div className="logoSuccess">  </div>
                        <div className="helpIconSuccess" style={{ pointerEvents: this.state.helpOpen ? 'none' : 'fill' }} onClick={this.toggleHelp.bind(this)}> <HelpIcon /><span className="helpwordSuccess">Help</span></div>
                        {this.state.helpOpen &&
                            <HelpModal toggleHelp={this.toggleHelp} />
                        }
                        <div className="textDivSend">
                            <span className="whoText">Wij hebben nog geen informatie van je!</span>
                            <br />
                            <Button variant="success" size="lg" onClick={this.goToStart}>Start de aanvraag!</Button>

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
}

export default SendForm;