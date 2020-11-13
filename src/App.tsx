import React from "react";
import "./styles.css";
import {Layout} from "./components/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import {Jokes} from "./Pages/Jokes";
import {MyJokes} from "./Pages/MyJokes";

const App = () => {
  return <div className="App">
      <Layout>
          <Switch>
              <Route exact path='/'>
                  <Redirect to="/jokes" />
              </Route>
              <Route path='/jokes' component={Jokes} />
              <Route path='/myjokes' component={MyJokes} />
          </Switch>
      </Layout>
  </div>;
};

export default App;
