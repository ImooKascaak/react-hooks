import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import BgImage from '../assets/background.jpg';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// custom
import Posts from './Posts';
import Users from './Users';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.common.black,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  content: {
    fontSize: '17px',
    padding: theme.spacing(13, 0, 6),
  },
  background: {
    backgroundImage: `url(${BgImage})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    width: '100vh',
    minHeight: '100%',
  },
}));

export default function Layout() {
  const classes = useStyles();
  const [resourceType, setResourceType] = useState('posts');

  return (
    <React.Fragment>
      <CssBaseline />
      {/* TODO: background */}
      {/* <div className={classes.background}> */}
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <img className={classes.icon} src="https://www.smartsuppcdn.com/assets/img/logo/smartsupp.svg" alt="" width="80px" height="50px" />
            <Typography variant="h4" color="inherit" noWrap>
              {resourceType === 'posts' ? 'Posts' : 'Users'}
            </Typography>
            <div className={classes.grow} />
            {resourceType !== 'posts' ?
              <Button variant="contained" color="secondary" onClick={() => setResourceType('posts')}>
                Posts
            </Button>
              :
              <Button variant="contained" color="secondary" onClick={() => setResourceType('users')}>
                Users
            </Button>
            }
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.content}>
            <Container maxWidth="md">
              {resourceType === 'posts' ? <Posts /> : <Users />}
            </Container>
          </div>
        </main>
      {/* </div> */}
    </React.Fragment>
  );
}
