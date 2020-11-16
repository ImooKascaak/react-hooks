import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 250 },
];

const useStyles = makeStyles((theme) => ({
  userList: {
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
    console.log(clickedUser.data);
    setUserDetail(clickedUser.data);
  }

  function handleCallback(userDetail: User) {
    setUserDetail(userDetail);
  }

  return (
    <div className={classes.userList}>
      { userDetail === null ?
        <div style={{ width: 700, height: 400 }}>
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={5}
            onRowClick={(param: RowParams) => handleShowUserDetail(param)}
          />
        </div>
        :
        <UserDetail user={userDetail} parentCallback={handleCallback} />
      }
    </div>
  );
}

export default Users;
