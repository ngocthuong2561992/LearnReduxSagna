import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import styles from './styles'

class TaskItem extends Component {
    render() {
        const { classes, task, status } = this.props;
        const { id, title } = task;
        return (
            <Card key= {task.id} className={classes.card}>
            <CardContent>
              <Grid container justify="space-between">
                <Grid item md={8}>
                 <Typography component = "h2">{title}</Typography>
                </Grid>
                <Grid item md={4}>
                 {status.label}
                </Grid>
              </Grid>
              <p>{task.description}</p>
            </CardContent>
           <CardActions className={classes.CardActions}>
             <Fab disabled aria-label="Edit" className={classes.fab}>
              <Icon fontSize = "small" />
                 edit_icon
            </Fab>    
             <Fab disabled aria-label="Delete" className={classes.fab}>
              <Icon fontSize = "small" />
                 delete_icon
            </Fab>            
             </CardActions>
          </Card>
        )
    }
}

export default withStyles(styles)(TaskItem)