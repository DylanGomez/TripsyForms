import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import SendForm from '../Components/form/SendForm/SendForm';
import MainScreen from '../Components/MainScreen/MainScreen';



const RouterForms = () => (
    <Router>
        <div>
            <Route path="/main/:destination" component={MainScreen} />
            <Route path="/success" component={SendForm} />
        </div>
    </Router>
)
export default RouterForms