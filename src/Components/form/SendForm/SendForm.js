import React, { Component } from 'react';
import './SendForm.scss'
import { Form, Button, Spinner, Tooltip, OverlayTrigger } from 'react-bootstrap';
import IntlTelInput from 'react-intl-tel-input';
import HelpIcon from '@material-ui/icons/Help';
import HelpModal from '../../MainScreen/helpModal/HelpModal';
import MediaQuery from 'react-responsive';
import * as emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'


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

    validatePhoneNumber = (number) => {
        var numberNew = number.replace(/\s/g, '');

        const isValidPhoneNumber = validator.isMobilePhone(numberNew, "any", { strictMode: true })
        return (isValidPhoneNumber)
    }

    mailService(event) {
        const form = event.currentTarget;
        var check = false;
        const validNumber = this.validatePhoneNumber(this.state.phoneNumber);
        event.preventDefault();
        if (form.checkValidity() === false || this.state.phoneNumber === "" || !validNumber) {
            event.preventDefault();
            toast.error("Oeps, je telefoonnummer is nog niet helemaal compleet");
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
                message_html: '<b>AANVRAAG REISVOORSTEL: ' + this.state.formInfo.state.currentCountry.countryName + ' </b> ' +
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

            emailjs.send('gmail', 'customertemplate', customerTemplate, 'user_f1aefYYUBoh4CwEBL8rCN')
                .then(function (response) {
                    emailjs.send('gmail', 'tripsytemplate', tripsyTemplate, 'user_f1aefYYUBoh4CwEBL8rCN')
                        .then(function (response) {
                            _this.props.history.push("/success")

                        })
                }, function (err) {
                    console.log(err)
                });
        }
    }

    goToSucces() {
        this.props.push("https://www.tripsy.nl/gelukt")
        return null
    }

    goToStart() {
        //HET IS NIET MOGELIJK OM TE NAVIGEREN DAN 1 BEPAALD LAND OMDAT DIT NERGENS STAAT OPGESLAGEN,
        // HET IS HANDIG DAT DIT NAVIGEERT NAAR EEN WORDPRESS PAGINA WAAR
        // DE KLANT HET LAND KAN KIEZEN IPV DIRECT NAAR HET FORMULIER NAVIGEREN, OP DEZE MANIER VERLIEST JE CONTEXT. 
        window.location.assign('https://www.tripsy.nl/');
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

        console.log(states);

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
                        <div className="helpIcon" style={{ pointerEvents: this.state.helpOpen ? 'none' : 'fill' }} onClick={this.toggleHelp.bind(this)}> <span className="helpword">Help</span>
                            {this.state.helpOpen &&
                                <HelpModal toggleHelp={this.toggleHelp} />
                            }
                        </div>
                    </div>
                    <div className="backgroundNew">
                        <div className="textDivSend">
                            <span className="tripSendText">Wij hebben de perfecte reis voor jou</span>
                            <br />
                            <MediaQuery query='(min-device-width: 1224px)'>
                                <span className="subSendTripText">Wij maken je reis volledig op maat</span>
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
                                                <label htmlFor="radio1" >Dhr.</label>
                                            </div>
                                            <div className="inputGroup">
                                                <input onChange={this.changeHandler} value="Woman" id="radio2" name="gender" type="radio" />
                                                <label htmlFor="radio2">Mevr.</label>
                                            </div>
                                        </div>
                                        <Form.Control className="formField" name="name" size="lg" type="text" placeholder="Voornaam" onChange={this.changeHandler} required isValid={this.state.name} />
                                        <Form.Control.Feedback type="invalid">
                                            Voer een naam in.
                                        </Form.Control.Feedback>
                                        <Form.Control className="formField" name="lastname" size="lg" type="text" placeholder="Achternaam" onChange={this.changeHandler} required isValid={this.state.lastname} />
                                        <Form.Control.Feedback type="invalid">
                                            Voer een achternaam in.
                                        </Form.Control.Feedback>
                                        <Form.Control className="formField" name="email" size="lg" type="email" placeholder="E-mailadres" onChange={this.changeHandler} required isValid={this.state.email} />
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
                                            autoHideDialCode={true}
                                            required
                                        />
                                        <OverlayTrigger trigger={['hover', 'click']} overlay={<Tooltip id="tooltip-disabled">Wij gebruiken je telefoonnummer om persoonlijk met je in contact te komen voor een reisplan op maat</Tooltip>}>
                                            <HelpIcon className="helpWidgetPhone" />
                                        </OverlayTrigger>
                                        <OverlayTrigger trigger={['hover', 'click']} overlay={<Tooltip id="tooltip-disabled">We hebben je e-mailadres nodig om een reisplan op maat naar je te kunnen sturen</Tooltip>}>
                                            <HelpIcon className="helpWidgetEmail" />
                                        </OverlayTrigger>

                                        {!this.state.buttonPressed &&
                                            <Button variant="success" size="lg" type="submit">Ja, ik wil graag een reisplan*</Button>
                                        }
                                        {this.state.buttonPressed &&
                                            <Button variant="success" size="lg" disabled>
                                                <Spinner animation="border" />
                                            </Button>
                                        }
                                        <br />
                                        <span className="gratisvrijblijvend"><i>*Altijd gratis en vrijblijvend</i></span>
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
                            <a href="https://www.tripsy.nl/algemene-voorwaarden" target="_blank" without rel="noopener noreferrer"><span className="linksLeft"> Reisvoorwaarden </span></a>
                            <a href="https://www.tripsy.nl/privacy-cookies" target="_blank" without rel="noopener noreferrer"><span className="linksLeft">Privacy & Cookies</span></a>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            )
        } else {
            return (
                <div className="pageDiv">
                    <div className="headerDiv">
                        <a href="https://www.tripsy.nl/" target="_blank" rel="noopener noreferrer"><div className="logo"> Tripsy </div></a>
                        <div className="helpIcon" style={{ pointerEvents: this.state.helpOpen ? 'none' : 'fill' }} onClick={this.toggleHelp.bind(this)}> <span className="helpword">Help</span>
                            {this.state.helpOpen &&
                                <HelpModal toggleHelp={this.toggleHelp} />
                            }
                        </div>
                    </div>
                    <div className="backgroundNew2">
                        <div className="textDivSend">
                            <span className="tripSendText">Oeps er gaat iets mis</span>
                            <br />
                            <MediaQuery query='(min-device-width: 1224px)'>
                                <span className="subSendTripText">Begin je aanvraag opnieuw en klik op het land naar keuze.</span>
                            </MediaQuery>
                            <MediaQuery query='(max-device-width: 1224px)'>
                                <span className="subSendTripText">Begin je aanvraag opnieuw en klik op het land naar keuze.</span>
                            </MediaQuery>
                            <div className="countryNames">
                                <div className="continent">
                                    <div className="continentTitle">Afrika</div>
                                    <a href="https://forms.tripsy.nl/#/des/botswana"><div className="countryLink">Botswana</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/kenia"><div className="countryLink">Kenia</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/mozambique"><div className="countryLink">Mozambique</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/namibie"><div className="countryLink">Namibië</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/oeganda"><div className="countryLink">Oeganda</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/tanzania"><div className="countryLink">Tanzania</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/zuidafrika"><div className="countryLink">Zuid-Afrika</div></a>
                                </div>
                                <div className="continent">
                                    <div className="continentTitle">Azië</div>
                                    <a href="https://forms.tripsy.nl/#/des/china"><div className="countryLink">China</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/india"><div className="countryLink">India</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/indonesie"><div className="countryLink">Indonesië</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/japan"><div className="countryLink">Japan</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/maleisie"><div className="countryLink">Maleisië</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/srilanka"><div className="countryLink">Sri Lanka</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/thailand"><div className="countryLink">Thailand</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/vietnam"><div className="countryLink">Vietnam</div></a>
                                </div>
                                <div className="continent">
                                    <div className="continentTitle">Europa</div>
                                    <a href="https://forms.tripsy.nl/#/des/ijsland"><div className="countryLink">IJsland</div></a>
                                </div>
                                <div className="continent">
                                    <div className="continentTitle">Noord-Amerika</div>
                                    <a href="https://forms.tripsy.nl/#/des/canada"><div className="countryLink">Canada</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/costarica"><div className="countryLink">Costa Rica</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/cuba"><div className="countryLink">Cuba</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/mexico"><div className="countryLink">Mexico</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/usa"><div className="countryLink">Usa</div></a>
                                </div>
                                <div className="continent">
                                    <div className="continentTitle">Oceanië</div>
                                    <a href="https://forms.tripsy.nl/#/des/australie"><div className="countryLink">Australië</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/nieuwzeeland"><div className="countryLink">Nieuw-Zeeland</div></a>
                                </div>
                                <div className="continent">
                                    <div className="continentTitle">Zuid-Amerika</div>
                                    <a href="https://forms.tripsy.nl/#/des/argentinie"><div className="countryLink">Argentinië</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/bolivia"><div className="countryLink">Bolivia</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/brazilie"><div className="countryLink">Brazilië</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/chili"><div className="countryLink">Chili</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/colombia"><div className="countryLink">Colombia</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/ecuador"><div className="countryLink">Ecuador</div></a>
                                    <a href="https://forms.tripsy.nl/#/des/peru"><div className="countryLink">Peru</div></a>
                                </div>
                            </div>
                            <MediaQuery query='(min-device-width: 1224px)'>
                                <span className="subSendTripText">Of ga terug naar de homepage</span>
                            </MediaQuery>
                            <MediaQuery query='(max-device-width: 1224px)'>
                                <span className="subSendTripText">Of ga terug naar de homepage</span>
                            </MediaQuery>
                            <br />
                            <div className="formAreaRight">
                                <Button variant="success" size="lg" onClick={this.goToStart}>Naar Home</Button>
                            </div>
                        </div>
                    </div>
                    <div className="bottomDiv">
                        <div className="links1">
                            <span className="linksRight"> © Tripsy B.V. 2019</span>
                        </div>
                        <div className="links2">
                            <a href="https://www.tripsy.nl/algemene-voorwaarden" target="_blank" without rel="noopener noreferrer"><span className="linksLeft"> Reisvoorwaarden </span></a>
                            <a href="https://www.tripsy.nl/privacy-cookies" target="_blank" without rel="noopener noreferrer"><span className="linksLeft">Privacy & Cookies</span></a>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default SendForm;