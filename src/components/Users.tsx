import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { DataGrid, ColDef, RowParams } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

// custom
import UserDetail from './UserDetail';

export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number,
      lng: number
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
};

const columns: ColDef[] = [
  { field: 'id', headerName: '#', width: 70 },
  { field: 'username', headerName: 'Username', width: 200 },
  { field: 'name', headerName: 'Name', width: 270 },
  { field: 'email', headerName: 'Email', width: 330 },
];

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  dataTable: {
    backgroundColor: 'white',
    borderRadius: '5px',
    width: '90vw',
    height: '80vh',
  },
}));

const Users = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState<User | null>(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  function handleShowUserDetail(clickedUser: any) {
    setUserDetail(clickedUser.data);
  }

  function handleCallback(userDetail: User) {
    setUserDetail(userDetail);
  }

  return (
    <div className={classes.root}>
      { userDetail === null ?
        <Grid container spacing={3}>
          <Grid item className={classes.dataTable}>
            <DataGrid
              rows={users}
              columns={columns}
              pageSize={10}
              onRowClick={(param: RowParams) => handleShowUserDetail(param)}
            />
          </Grid>
        </Grid>
        :
        <UserDetail user={userDetail} parentCallback={handleCallback} />
      }
    </div>
  );
}

export default Users;
