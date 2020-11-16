import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Button, Paper } from '@material-ui/core';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

// custom
import User from './Users';

const useStyles = makeStyles((theme) => ({
  post: {
  },
  title: {
    margin: theme.spacing(2, 0, 4),
  },
  avatar: {
    display: 'inline-flex',
    width: theme.spacing(6),
    height: theme.spacing(6),
    margin: theme.spacing(0, 2, 4, 0),
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  commentsIcon: {
    position: 'relative',
    top: '5px',
    marginRight: theme.spacing(2),
  },
  commentList: {
    listStyleType: 'none',
    paddingInlineStart: '0',
  },
  commentItem: {
    padding: theme.spacing(2),
    margin: theme.spacing(0, 0, 2),
  },
  commentItemHeader: {
    fontSize: '0.8em',
    padding: theme.spacing(0, 0, 1),
  },
}));

const PostDetail = (props: any) => {
  const classes = useStyles();
  const [post] = useState(props.post);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState<typeof User | null>(props.post.userId);
  const [avatar, setAvatar] = useState<string | null>(null);

  function onTrigger(event: any) {
    props.parentCallback(null);
    event.preventDefault();
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then(res => {
        setComments(res.data);
      })
      .catch(err => {
        console.error(err);
      })

    axios.get(`https://jsonplaceholder.typicode.com/users/${user}`)
      .then(res => {
        setUser(res.data);
        setAvatar(res.data.name.charAt(0));
      })
      .catch(err => {
        console.error(err);
      })
  }, [post]);

  return (
    <div className={classes.post}>
      <Typography variant="h3" color="inherit" className={classes.title}>
        {post.title}
      </Typography>
      {
        user !== null ?
          <div>
            <Avatar className={classes.avatar}>{avatar}</Avatar>
            <span>{user.name}</span>
          </div>
          : null
      }
      <div>{post.body}</div>
      <h3><ChatOutlinedIcon className={classes.commentsIcon}></ChatOutlinedIcon>Comments</h3>
      {
        comments.length !== 0 ?
          <ul className={classes.commentList}>
            {
              comments.map((comment: any) => (
                <li key={comment.id}>
                  <Paper className={classes.commentItem}>
                    <Typography className={classes.commentItemHeader}>
                      <b>{comment.name}</b>, <i><a href={`mailto:${comment.email}`}>{comment.email}</a></i>
                    </Typography>
                    <Typography>{comment.body}</Typography>
                  </Paper>
                </li>
              ))
            }
          </ul>
          : null
      }
      <Button variant="contained" color="primary" onClick={onTrigger}>
        Go Back
      </Button>
    </div>
  );
};

export default PostDetail;
