import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import StartPage from "./StartPage";
import CasesPage from "./CasesPage";
import NotFoundPage from "./NotFoundPage";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={StartPage} exact={true}/>
            <Route path="/cases" component={CasesPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);