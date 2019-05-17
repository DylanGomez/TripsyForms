import React, { Component } from 'react';
import './MainScreen.scss'

import GGTOLogo from '../../images/GGTO.jpg'

import SendForm from '../form/SendForm/SendForm';

import { Icon } from 'semantic-ui-react';

import Step1Who from '../form/Step1/Step1Who';
import Step1ACounter from '../form/Step1A/Step1ACounter';
import Step1BGroup from '../form/Step1B/Step1BGroup';
import Step2Weeks from '../form/Step2/Step2Weeks';
import Step3When from '../form/Step3/Step3When';
import Step4Speed from '../form/Step4/Step4Speed';
import Step5Activity from '../form/Step5/Step5Activity';
import Step6Accomodation from '../form/Step6/Step6Accomodation';
import Step6AStars from '../form/Step6A/Step6AStars';


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
            userInfo: {}
        };
        this.toggleForm = this.toggleForm.bind(this);
        this.addState = this.addState.bind(this);
    }

    getForm(currentForm) {
        console.log(this.state);
        const forms = {
            startForm: <Step1Who toggleForm={this.toggleForm} addState={this.addState}/>,
            step1A: <Step1ACounter toggleForm={this.toggleForm} addState={this.addState} />,
            step1B: <Step1BGroup toggleForm={this.toggleForm} addState={this.addState} />,
            step2: <Step2Weeks toggleForm={this.toggleForm} addState={this.addState} />,
            step3: <Step3When toggleForm={this.toggleForm} addState={this.addState} />,
            step4: <Step4Speed toggleForm={this.toggleForm} addState={this.addState} />,
            step5: <Step5Activity toggleForm={this.toggleForm} addState={this.addState} />,
            step6: <Step6Accomodation toggleForm={this.toggleForm} addState={this.addState} />,
            step6A: <Step6AStars toggleForm={this.toggleForm} addState={this.addState} />,

            finalPage: <SendForm toggleForm={this.toggleForm} addState={this.addState} />
        }

        return forms[currentForm];
    }

    addState(question, value){
        this.setState({
            [question]: value
        })
    }

    toggleForm(currentForm) {
        this.setState({currentForm});
    }

    country = "Thailand";

    render() {
        return (
            <div>
                <div className="topDiv">
                    <div className="logo"> Tripsy </div>
                    <div className="helpIcon"> <Icon name="help circle" /> Help</div>
                    <div className="textDiv">
                        <span className="tripText">Jouw droomtrip naar {this.country}</span>
                        <br />
                        <span className="subTripText">Wij maken je reis - gratis en vrijblijvend - volledig op maat</span>
                        {this.getForm(this.state.currentForm)}
                    </div>
                </div>
                <div className="bottomDiv">
                    <span className="garantyTitle">Garantiefonds</span>
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
                    <br />
                    <span className="links"> Disclaimer &nbsp;&nbsp;&nbsp;&nbsp; Reisvoorwaarden &nbsp;&nbsp;&nbsp;&nbsp;Privacybeleid</span>
                </div>
            </div>
        )
    }
}

export default MainScreen;