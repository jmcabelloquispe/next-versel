import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

type Props = {
  children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // root: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   '& > *': {
    //     margin: theme.spacing(1),
    //     height: theme.spacing(16),
    //   },
    // },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
    }
  }),
);

export default function FormContainer({children}:Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        {children}
      </Paper>
    </div>
  );
}
