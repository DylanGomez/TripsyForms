import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import FormFirstStep from '../Components/form/FirstStep/FormFirstStep';
import FormCountStep from '../Components/form/AdditionalCount/FormCountStep';
import SendForm from '../Components/form/SendForm/SendForm';
import MainScreen from '../Components/MainScreen/MainScreen';



const RouterForms = () => (
    <Router>
        <div>
            <Route path="/main" component={MainScreen} />
            <Route path="/form" component={FormFirstStep} />
            <Route path="/formCount" component ={FormCountStep} />
            <Route path="/success" component={SendForm} />
        </div>
    </Router>
)
export default RouterForms