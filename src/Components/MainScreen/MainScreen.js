import React, { Component } from 'react';
import './MainScreen.scss'

import GGTOLogo from '../../images/GGTO.jpg'

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
import Slide from 'react-reveal/Slide';
import ProgressBar from 'react-bootstrap/ProgressBar'


class MainScreen extends Component {
    progress = 10;

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
            show: true
        };

        window.history.replaceState('startForm', null, "");

        this.toggleForm = this.toggleForm.bind(this);
        this.addState = this.addState.bind(this);
        this.onBackButtonEvent = this.onBackButtonEvent.bind(this);

    }

    getForm(currentForm) {

        const forms = {
            startForm: <Step1Who toggleForm={this.toggleForm} addState={this.addState} />,
            step1A: <Step1ACounter toggleForm={this.toggleForm} addState={this.addState} />,
            step1B: <Step1BGroup toggleForm={this.toggleForm} addState={this.addState} />,
            step2: <Step2Weeks toggleForm={this.toggleForm} addState={this.addState} />,
            step3: <Step3When toggleForm={this.toggleForm} addState={this.addState} />,
            step4: <Step4Speed toggleForm={this.toggleForm} addState={this.addState} />,
            step5: <Step5Activity toggleForm={this.toggleForm} addState={this.addState} />,
            step6: <Step6Accomodation toggleForm={this.toggleForm} addState={this.addState} />,
            step6A: <Step6AStars toggleForm={this.toggleForm} addState={this.addState} />,
            loading: <LoadScreen toggleForm={this.toggleForm} />,

            finalPage: this.goToSuccess()
        }

        return forms[currentForm];
    }

    componentDidMount() {
        window.onpopstate = this.onBackButtonEvent;
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
            step1A: 20,
            step1B: 30,
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

    country = "Thailand";

    render() {
        return (
            <div>
                <div className="topDiv">
                    <div className="logo"> Tripsy </div>
                    <div className="helpIcon" onClick={() => { this.toggleHelp() }}> <HelpIcon /><span class="helpword">Help</span></div>
                    {this.state.helpOpen &&
                        <div className="helpHover">
                            <h3>Hulp nodig?</h3>
                            <br />
                            <span>Wij helpen je graag via de telefoon of email met het boeken van je droomreis</span>
                            <br />
                            <img></img>
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
                        <span className="linksLeft"> Disclaimer </span>
                        <span className="linksLeft"> Reisvoorwaarden </span>
                        <span className="linksLeft"> Privacybeleid</span>
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