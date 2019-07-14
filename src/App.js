import React, {Component} from 'react';
import styles from "./styles.js"
import {withStyles} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles';
import TaskBoard from '../src/TaskBoard/index'
import theme from "../src/Theme/index"
class App extends Component {
  render () {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <TaskBoard/>
        </ThemeProvider>
      </div>
    );
  }  
}

export default withStyles(styles)(App);
