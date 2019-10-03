import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    progress: {
        margin: theme.spacing(2),
    },
});

class LoadingComponent extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <CircularProgress className={classes.progress} />
            </div>
        );
    }
}

export default withStyles(styles)(LoadingComponent);
