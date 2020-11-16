import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  { field: 'title', headerName: 'Title', width: 500 },
];

const useStyles = makeStyles((theme) => ({
  postList: {
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
    <div className={classes.postList}>
      { postDetail === null ?
        <div style={{ width: 700, height: 400 }}>
          <DataGrid
            rows={posts}
            columns={columns}
            pageSize={10}
            onRowClick={(param: RowParams) => handleShowPostDetail(param)}
          />
        </div>
        :
        <PostDetail post={postDetail} parentCallback={handleCallback} />
      }
    </div>
  );
};

export default PostList;
