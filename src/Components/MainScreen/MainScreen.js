import React, { Component } from 'react';
import './MainScreen.scss'
// import GGTOLogo from '../../images/GGTO.jpg'

import HelpIcon from '@material-ui/icons/Help';
import MediaQuery from 'react-responsive';
import { Redirect } from 'react-router-dom';

import Step1Who from '../form/Step1/Step1Who';
import Step1ACounter from '../form/Step1A/Step1ACounter';
import Step1BGroup from '../form/Step1B/Step1BGroup';
import Step2Weeks from '../form/Step2/Step2Weeks';
import Step3When from '../form/Step3/Step3When';
import Step4Speed from '../form/Step4/Step4Speed';
import Step5Activity from '../form/Step5/Step5Activity';
import Step6Accomodation from '../form/Step6/Step6Accomodation';
import Step6AStars from '../form/Step6A/Step6AStars';
import LoadScreen from '../form/LoadScreen/LoadScreen';
import ProgressBar from 'react-bootstrap/ProgressBar'
import elephantIcon from '../../Icons/elephant.svg';
import BackgroundThailand from '../../images/Rondreis-Thailand-Phuket.jpg';
import BackgroundVietnam from '../../images/VietnamBackground.jpg'


class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentForm: 'startForm',
            who: "",
            howMany: {},
            weeks: "",
            when: "",
            speed: "",
            activity: "",
            accomodation: "",
            accomodationStars: "",
            userInfo: {},
            helpOpen: false,
            show: true,
            currentCountry: {}
        };

        window.history.replaceState('startForm', null, "");

        this.getObject = this.getObject.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.addState = this.addState.bind(this);
        this.onBackButtonEvent = this.onBackButtonEvent.bind(this);
    }

    destination = this.props.match.params.destination;

    destinations =  [{
        thailand: {
            backgroundImage: `linear-gradient(to bottom, rgba(20, 55, 106, 0.5), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.0)),url(${BackgroundThailand})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    },
    {
        vietnam: {
            backgroundImage: `linear-gradient(to bottom, rgba(20, 55, 106, 0.5), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.0)),url(${BackgroundVietnam})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: elephantIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Duiken",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    },
    ]


    getForm(currentForm) {

        const forms = {
            startForm: <Step1Who toggleForm={this.toggleForm} addState={this.addState} />,
            step1A: <Step1ACounter toggleForm={this.toggleForm} addState={this.addState} />,
            step1B: <Step1BGroup toggleForm={this.toggleForm} addState={this.addState} />,
            step2: <Step2Weeks toggleForm={this.toggleForm} addState={this.addState} />,
            step3: <Step3When toggleForm={this.toggleForm} addState={this.addState} />,
            step4: <Step4Speed toggleForm={this.toggleForm} addState={this.addState} />,
            step5: <Step5Activity country={this.state.currentCountry} toggleForm={this.toggleForm} addState={this.addState} />,
            step6: <Step6Accomodation country={this.getObject} toggleForm={this.toggleForm} addState={this.addState} />,
            step6A: <Step6AStars toggleForm={this.toggleForm} addState={this.addState} />,
            loading: <LoadScreen toggleForm={this.toggleForm} />,

            finalPage: this.goToSuccess()
        }

        return forms[currentForm];
    }

    componentDidMount() {
        window.onpopstate = this.onBackButtonEvent;
        this.getObject();

        
        console.log(this.state.currentCountry.backgroundImage)
    }

    goToSuccess() {
        return <Redirect to={{ pathname: '/success', givenState: { state: this.state } }} />;
    }

    addState(question, value) {
        this.setState({
            [question]: value
        })
    }

    toggleForm = (currentForm) => {
        window.history.pushState(currentForm, null, "")
        this.setState({
            currentForm,
        });
    }

    getObject() {
        for(var i = 0; i < this.destinations.length; i++) {
            var obj = this.destinations[i];
            if (this.destination in obj){
                this.setState({ 
                    currentCountry : obj[this.destination] 
                })
            }
        }
    }

    onBackButtonEvent(e) {
        e.preventDefault();
        this.previousForm(e.state);
    }

    previousForm(currentForm) {
        this.setState({ currentForm })
        this.progress -= 10;
    }

    toggleHelp() {
        this.setState(prevState => ({ helpOpen: !prevState.helpOpen }))
    }

    getProgress(currentForm) {

        const progress = {
            startForm: 10,
            step1A: 30,
            step1B: 20,
            step2: 40,
            step3: 50,
            step4: 60,
            step5: 70,
            step6: 80,
            step6A: 90,
            loading: 100,
        }
        return progress[currentForm];
    }

    render() {

        this.backgroundStyle = {
            backgroundImage: this.state.currentCountry.backgroundImage
        }

        return (
            <div>
                <div style={this.backgroundStyle} className="topDiv">
                    <div className="logo"> Tripsy </div>
                    <div className="helpIcon" onClick={() => { this.toggleHelp() }}> <HelpIcon /><span className="helpword">Help</span></div>
                    {this.state.helpOpen &&
                        <div className="helpHover">
                            <h3>Hulp nodig?</h3>
                            <br />
                            <span>Wij helpen je graag via de telefoon of email met het boeken van je droomreis</span>
                            <br />
                            <img alt="" ></img>
                            <br />
                            <span>Telefoonnummer</span>
                            <br />
                            <span>E-mail</span>
                        </div>
                    }
                    <div className="textDiv">
                        <span className="tripText">Jouw droomtrip naar {this.country}</span>
                        <br />
                        <MediaQuery query='(min-device-width: 1224px)'>
                            <span className="subTripText">Wij maken je reis - gratis en vrijblijvend - volledig op maat</span>
                        </MediaQuery>
                        <MediaQuery query='(max-device-width: 1224px)'>
                            <span className="subTripText">gratis en vrijblijvend</span>
                        </MediaQuery>
                        <div className="cardBox">
                            <ProgressBar animated className="progressBar" variant="success" now={this.getProgress(this.state.currentForm)} />
                            {this.getForm(this.state.currentForm)}
                           
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

export default MainScreen;