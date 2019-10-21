import React from 'react';
import './App.css';
import Tabber from './page/tabbar.jsx'
import Login from './page/loginReg/login.jsx'
import Reg from './page/loginReg/reg.jsx'

import {Switch,Route} from "react-router-dom";

function App() {
    return (
        <div>
            <Switch>
                {/* <Route path="/contact/:id">
                    <Login />
                </Route> */}
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/reg">
                    <Reg />
                </Route>
                <Route path="/">
                    <Tabber />
                </Route>
            </Switch>
        </div>
    )
}
export default App;