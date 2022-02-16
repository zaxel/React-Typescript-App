import React, { FC , useEffect, useState} from 'react';
import { ITodo } from '../types/types';
import axios from 'axios';
import List from './List';
import TodoItem from './TodoItem';
import { useNavigate } from 'react-router-dom';


const TodoPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const navigate = useNavigate();
  useEffect(()=>{
    fetchTodos();
  }, [])

  
  async function fetchTodos(){
    try{
     const response = await axios.request<ITodo[]>({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos?_limit=10'
      })
      setTodos(response.data);
    }catch(e){
      alert(e)
    }
  }
    return (
        <List items={todos} renderItem={(todo: ITodo)=> <TodoItem onClick={()=>navigate('/todos/'+ todo.id)} todo={todo} key={todo.id}/>}/>
    );
};

export default TodoPage;