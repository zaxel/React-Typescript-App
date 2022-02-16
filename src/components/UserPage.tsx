﻿import React, { FC , useEffect, useState} from 'react';
import axios from 'axios';
import List from './List';
import { IUser } from '../types/types';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();
  useEffect(()=>{
    fetchUsers();
  }, [])

  async function fetchUsers(){
    try{
     const response = await axios.request<IUser[]>({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users?_limit=10'
      })
      setUsers(response.data);
    }catch(e){
      alert(e)
    }
  }



    return (
        <List items={users} renderItem={(user: IUser)=> <UserItem onClick={()=>navigate('/users/'+ user.id)} user={user} key={user.id}/>}/>
    );
};

export default UserPage;