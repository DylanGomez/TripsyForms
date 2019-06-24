import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import SendForm from '../Components/form/SendForm/SendForm';
import MainScreen from '../Components/MainScreen/MainScreen';
import SuccessPage from '../Components/form/SuccesPage/SuccessPage';



const RouterForms = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <div>
            <Route path="/main/:destination" component={MainScreen} />
            <Route path="/sendform" component={SendForm} />
            <Route path="/success" component={SuccessPage} />
            <Route component={() => (<div>404 Not found </div>)} />
        </div>
    </Router>
)
export default RouterForms