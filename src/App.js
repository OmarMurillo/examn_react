import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './Redux/store.js'
import routes from './Routes/routes.js'

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box'
  }
}

const App = () => {
  return (
    <Provider store = {store}>
      <div style={styles.container}>
        <Router>
          <Switch>
            {routes().map((r,i) => <Route key ={i} path = {r.path} exact >{r.component}</Route>)}
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

export default App;
