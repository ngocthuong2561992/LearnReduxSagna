import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import styles from "./styles";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { STATUES } from "../constants/index";
import TaskList from '../components/TaskList/index';
import TaskForm from '../components/TaskForm/index';
import PropsTypes from 'prop-types';

const listTask = [
  {
    id : 1,
    title : "Read book 1",
    description : "Read material ui book",
    status : 0
  },
  {
    id : 2,
    title : "Play football",
    description : "With my friend",
    status : 2
  },
  {
    id : 3,
    title : "Play game",
    description : "With play game",
    status : 0
  },
]

class TaskBoard extends Component {
    _renderBoard() {
      let xhtml =  null;
      xhtml = (
        <Grid container spacing={2}>
          {
            STATUES.map((status, index)=>{
              const taskFiltered = listTask.filter(
                task => task.status === status.value);
              return (<TaskList key={index} task ={taskFiltered} status={status}/>);
              })}
        </Grid>
      );
      return xhtml;
    };
  
    _handleClose() {
      this.setState({
        open: false
      });
    };

    _openForm() {
      this.setState({
        open: true
      })
    };

    _renderForm() {
      const { open } = this.state;
      let xhtml =  null;
      xhtml = (
        <TaskForm open= {open} onClose= {this._handleClose}/>
      );
      return xhtml;
    }
    render() {
        const { classes } = this.props;
        return (
          <div className = {classes.taskBoard}>
            <Button variant="contained" className={classes.button}>
              <Icon className={classes.icon} color="secondary"/>Thêm mới công việc
            </Button>
            {this._renderBoard()}
            {this._renderForm()}
          </div> 
        )
    }
}

TaskBoard.propsTypes =  {
  classes: PropsTypes.object
}
export default withStyles(styles)(TaskBoard)

