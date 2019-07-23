import React, { Component } from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail'
import './HelpModal.scss'


import helpPhoto from "../../../images/Foto-Elise-100x100.jpg"

class HelpModal extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.toggleHelp();
        }
    }

    render() {
        return (
            <div ref={this.setWrapperRef} className="helpDiv">
                <h3 className="helpTitle">Hulp nodig?</h3>
                <br />
                <span className="helpText">Wij helpen je graag via <br /> de telefoon of e-mail met het <br /> boeken van je rondreis</span>
                <br />
                <img alt="" className="helpPhoto" src={helpPhoto}></img>
                <br />
                <a href="tel:0031307116247"><span className="helpPhone"> <PhoneIcon /> 030-7116127</span></a>
                <br />
                <a href="tel:0031307116247"><span className="subText">ma t/m vr 9:30u - 17:00u</span></a>
                <br />
                <br />
                <a href="mailto:hallo@tripsy.nl"><span className="helpMail"> <MailIcon /> hallo@tripsy.nl</span></a>
                <br />
                <a href="mailto:hallo@tripsy.nl"><span className="subText">binnen 24u antwoord</span></a>
            </div>
        )
    }
}

export default HelpModal;