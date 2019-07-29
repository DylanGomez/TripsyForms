import React, { Component } from 'react';
import './MainScreen.scss'

// import HelpIcon from '@material-ui/icons/Help';

import MediaQuery from 'react-responsive';

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
import BackgroundVietnam from '../../images/VietnamBackground.jpg';
import ggtoSvg from '../../Icons/GGTO_logo_grijs_zonder ondertitel.svg';

import HelpModal from './helpModal/HelpModal';

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
        this.toggleHelp = this.toggleHelp.bind(this);
        this.goToSuccess = this.goToSuccess.bind(this);
    }

    destination = this.props.match.params.destination;

    destinations = [{
        thailand: {
            countryName: "Thailand",
            backgroundImage: `linear-gradient(to bottom, rgba(20, 55, 106, 0.5), rgba(0, 0, 0, 0.1)),url(${BackgroundThailand})`,
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
    } //EINDE LAND
        , {
        vietnam: {
            countryName: "Vietnam",
            backgroundImage: `linear-gradient(to bottom, rgba(20, 55, 106, 0.5), rgba(0, 0, 0, 0.1)),url(${BackgroundVietnam})`,
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
    }, // EINDE LAND
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
            loading: <LoadScreen goToSuccess={this.goToSuccess} />,

            // finalPage: this.goToSuccess()
        }

        return forms[currentForm];
    }

    componentDidMount() {
        window.onpopstate = this.onBackButtonEvent;
        this.getObject();
    }

    goToSuccess() {
        this.props.history.push({
            pathname: "/sendform",
            givenState: {
                state: this.state
            }
        });
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
        for (var i = 0; i < this.destinations.length; i++) {
            var obj = this.destinations[i];
            if (this.destination in obj) {
                if (this.destination) {
                    this.setState({
                        currentCountry: obj[this.destination]
                    })
                } else {
                    this.setState({
                        currentCountry: obj["thailand"]
                    })
                }

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

    toggleHelp(e) {
        e.preventDefault();
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
            backgroundImage: this.state.currentCountry.backgroundImage,
        }

        return (
            <div>
                <div className="headerDiv">
                    <a href="https://www.tripsy.nl/" target="_blank" without rel="noopener noreferrer"><div className="logo"> Tripsy </div></a>
                    <div className="helpIcon"  style={{ pointerEvents: this.state.helpOpen ? 'none' : 'fill' }} onClick={this.toggleHelp.bind(this)}> <span className="helpword">Help</span>
                        {this.state.helpOpen &&
                            <HelpModal toggleHelp={this.toggleHelp} />
                        }
                    </div>
                </div>
                <div style={this.backgroundStyle} className="topDiv">
                    <div className="textDiv">
                        <span className="tripText">Jouw rondreis {this.state.currentCountry.countryName}</span>
                        <br />
                        <MediaQuery query='(min-device-width: 575px)'>
                            <span className="subTripText">Wij maken je reis - gratis en vrijblijvend - volledig op maat</span>
                        </MediaQuery>
                        <MediaQuery query='(max-device-width: 575px)'>
                            <span className="subTripText">Wij maken je reis - gratis en vrijblijvend</span>
                        </MediaQuery>
                        <div className="cardBox">
                            <ProgressBar animated className="progressBar" variant="success" now={this.getProgress(this.state.currentForm)} />
                            {this.getForm(this.state.currentForm)}
                        </div>
                        <div className="garrantyDiv">
                            <div className="onsGarantiefonds">
                                <span >Ons garantiefonds</span>
                            </div>
                            <div className="Garantiefonds">
                                <a href="https://www.stichting-ggto.nl/html/Welkom.asp" target="_blank" without rel="noopener noreferrer"> <img src={ggtoSvg} alt="GGTO garantiefonds" className="ggtogrey" /></a>
                            </div>
                        </div>
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
    }
}

export default MainScreen;