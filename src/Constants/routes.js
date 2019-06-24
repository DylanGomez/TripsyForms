import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import SendForm from '../Components/form/SendForm/SendForm';
import MainScreen from '../Components/MainScreen/MainScreen';
import SuccessPage from '../Components/form/SuccesPage/SuccessPage';



const RouterForms = () => (
    <Router >
        <div>
            <Route path="/:destination" component={MainScreen} />
            <Route path="/sendform" component={SendForm} />
            <Route path="/success" component={SuccessPage} />
        </div>
    </Router>
)
export default RouterForms