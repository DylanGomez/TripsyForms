import React from 'react'
import {
    HashRouter,
    Route,
} from 'react-router-dom'
import SendForm from '../Components/form/SendForm/SendForm';
import MainScreen from '../Components/MainScreen/MainScreen';
import SuccessPage from '../Components/form/SuccesPage/SuccessPage';



const RouterForms = () => (
    <HashRouter>
        <div>
            <Route path="/des/:destination" component={MainScreen} />
            <Route path="/sendform" component={SendForm} />
            <Route path="/success" component={SuccessPage} />
        </div>
    </HashRouter>
)
export default RouterForms