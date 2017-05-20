import React from "react";
import ReactDom from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import Todos from "./pages/Todos";
import Archives from "./pages/Archives";

const app = document.getElementById('app');

ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Todos}></IndexRoute>
            <Route path="archives" component={Archives}></Route>
        </Route>
    </Router>
, app);
