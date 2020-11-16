import React, { useState } from 'react';
import { Button, Link, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  user: {
  },
  title: {
    margin: theme.spacing(2, 0, 4),
  },
  userCard: {
    padding: theme.spacing(5),
    margin: theme.spacing(0, 0, 4),
  },
}));

const UserDetail = (props: any) => {
  const classes = useStyles();
  const [user] = useState(props.user);

  function onTrigger(event: any) {
    props.parentCallback(null);
    event.preventDefault();
  }

  return (
    <div className={classes.user}>
      <Typography variant="h3" color="inherit" className={classes.title}>
        {user.name}
      </Typography>
      <Paper className={classes.userCard} elevation={3}>
        <div><b>Username:</b> {user.username}</div>
        <div><b>Email:</b> <i><Link href={`mailto:${user.email}`}>{user.email}</Link></i></div>
        <hr />
        <div><b>Address</b></div>
        <div><b>Street:</b> {user.address['street']}</div>
        <div><b>Suite:</b> {user.address['suite']}</div>
        <div><b>City:</b> {user.address['city']}</div>
        <div><b>Zipcode:</b> {user.address['zipcode']}</div>
        <div><b>Geo</b></div>
        <div><b>Lat:</b> {user.address['geo']['lat']}</div>
        <div><b>Lng:</b> {user.address['geo']['lng']}</div>
        <hr />
        <div><b>Contact</b></div>
        <div><b>Phone:</b> {user.phone}</div>
        <div>
          <b>Website: </b> 
          <Link
            href={`http://www.${user.website}`}
            target="_blank"
            rel="noreferrer"
          >
            {user.website}
          </Link>
        </div>
        <hr />
        <div><b>Company</b></div>
        <div><b>Name:</b> {user.company['name']}</div>
        <div><b>Catch Phrase:</b> {user.company['catchPhrase']}</div>
        <div><b>Bs:</b> {user.company['bs']}</div>
      </Paper>
      <Button variant="contained" color="primary" onClick={onTrigger}>
        Go Back
      </Button>
    </div>
  );
};

export default UserDetail;
