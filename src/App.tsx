import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// custom
import Layout from './components/Layout';

const useStyles = makeStyles(() => ({
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Layout />
    </div>
  );
}

export default App;
