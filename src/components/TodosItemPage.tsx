import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { ITodo} from '../types/types';
import { useParams, useNavigate } from 'react-router-dom';

type TodoItemPageParams = {
    id: string;
}
const TodosItemPage: FC = () => {

    const [todo, setTodo] = useState<ITodo | null>(null);
    const {id} = useParams<TodoItemPageParams>();
    const navigate = useNavigate();

    useEffect(()=>{
        fetchTodo();
    }, [])

  async function fetchTodo(){
    try{
     const response = await axios.request<ITodo>({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos/' + id
      })
      setTodo(response.data);
    }catch(e){
      alert(e)
    }
  }
    return (
        <>
            <h1>{todo?.id} todo page</h1>
            <div style={{padding: '25px 30px'}}>
                {todo?.title}, completed: {todo?.completed+''};
            </div>
            <button onClick={()=>navigate('/todos')}>back to todos list</button>
        </>
    );
};

export default TodosItemPage;