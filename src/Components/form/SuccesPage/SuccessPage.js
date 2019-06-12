
import React, { Component } from 'react';
import './SuccessPage.scss'
import { Button } from 'react-bootstrap';
import HelpIcon from '@material-ui/icons/Help';

import HelpModal from '../../MainScreen/helpModal/HelpModal';

class SuccessPage extends Component {
    constructor() {
        super();
        this.state = {
            helpOpen: false,
        }
        this.toggleHelp = this.toggleHelp.bind(this);
        this.goToWebsite = this.goToWebsite.bind(this);
    }

    goToWebsite() {
        this.props.history.push('/main/thailand')
    }

    toggleHelp() {
        this.setState(prevState => ({ helpOpen: !prevState.helpOpen }))
    }

    render() {
        return (
            <div className="pageDiv">
                <div className="textArea">
                    {/* <div className="textBlock">
                        <span className="successText">Yes!</span>
                        <br />
                        <span className="subtitleSuccess">We hebben een passend reisaanbod voor je gevonden</span>
                    </div> */}
                </div>
                <div className="logoSuccess">  </div>
                <div className="helpIconSuccess" onClick={() => { this.toggleHelp() }}> <HelpIcon /><span className="helpwordSuccess">Help</span></div>
                {this.state.helpOpen &&
                    <HelpModal toggleHelp={this.toggleHelp} />
                }
                <div className="formAreaSuccess">
                    <span className="successTitle">Bedankt voor je aanvraag!</span>
                    <br />
                    <br />
                    <span className="successSub">Je zal binnenkort je op maat gemaakte reisvoortel ontvangen!</span>
                    <br />
                    <Button variant="success" size="lg" onClick={this.goToWebsite}>Ga terug naar Tripsy.nl</Button>
                    <br />
                </div>
                <div className="bottomDivSuc">
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

export default SuccessPage; 