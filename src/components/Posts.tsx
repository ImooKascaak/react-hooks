import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { DataGrid, ColDef, RowParams } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

// custom
import PostDetail from './PostDetail';

export type Post = {
  userId: number,
  id: number,
  title: string;
  body: string;
};

const columns: ColDef[] = [
  { field: 'id', headerName: '#', width: 70 },
  { field: 'title', headerName: 'Title', width: 600 },
];

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  dataTable: {
    width: '90vw',
    height: '80vh',
  },
}));

const PostList = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [postDetail, setPostDetail] = useState<Post | null>(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  function handleShowPostDetail(clickedPost: any) {
    setPostDetail(clickedPost.data);
  }

  function handleCallback(postDetail: Post) {
    setPostDetail(postDetail);
  }

  return (
    <div className={classes.root}>
      { postDetail === null ?
        <Grid container spacing={3}>
          <Grid item className={classes.dataTable}>
            <DataGrid
              rows={posts}
              columns={columns}
              pageSize={10}
              onRowClick={(param: RowParams) => handleShowPostDetail(param)}
            />
          </Grid>
        </Grid>
        :
        <PostDetail post={postDetail} parentCallback={handleCallback} />
      }
    </div>
  );
};

export default PostList;
