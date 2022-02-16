import React, { FC } from 'react';
import { IUser } from '../types/types';

interface IUserItemProps {
    user: IUser;
    onClick: (user: IUser)=> void
}

const UserItem: FC<IUserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={()=>onClick(user)} style={{padding: '15px', border: '1px solid gray'}}>
                    {user.id}. {user.name} living in city: {user.address.city}, on street: {user.address.street}, 
                    {user.address.suite}, zipcode: {user.address.zipcode}
                </div>  
    );
};

export default UserItem;