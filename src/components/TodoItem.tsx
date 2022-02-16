import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface ITodoItemProps {
    todo: ITodo;
    onClick: (todo: ITodo) => void;
}

const TodoItem: FC<ITodoItemProps> = ({todo, onClick}) => {
    return (
        <div onClick={()=>onClick(todo)}>
            <div style={{padding: '15px'}}>
                <input type={'checkbox'} checked={todo.completed}/>
                {todo.id}. {todo.title}
            </div> 
        </div>
    );
};

export default TodoItem;