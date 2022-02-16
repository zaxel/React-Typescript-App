import React, { FC, useState, useEffect } from 'react';
import { IUser } from '../types/types';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

type UserItemPageParams = {
    id: string
}
const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const {id} = useParams<UserItemPageParams>();
    const navigate = useNavigate();

    useEffect(()=>{
        fetchUser();
    }, [])

  async function fetchUser(){
    try{
     const response = await axios.request<IUser>({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users/' + id
      })
      setUser(response.data);
    }catch(e){
      alert(e)
    }
  }
    return (
        <>
            <h1>{user?.id} user page</h1>
            <div style={{padding: '25px 30px'}}>
                <div>name: {user?.name}</div> 
                <div>address: {user?.address.street}</div> 
                <div>email: {user?.email}</div> 
            </div>
            <button onClick={()=>navigate('/')}>back to users list</button>
        </>
    );
};

export default UserItemPage;