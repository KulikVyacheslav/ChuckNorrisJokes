import * as React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import App from "./App";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./store";

const rootElement = document.getElementById("root");

render(
    <Router>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </Router>,
    rootElement);