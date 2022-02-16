import Card, { CardVariation } from './components/Card';
import EventsExample from './components/EventsExample';
import UserPage from './components/UserPage';
import TodoPage from './components/TodoPage';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodosItemPage from './components/TodosItemPage';

function App() {
  
  return (
    <div>
      
      
      <BrowserRouter>
        <div className='navbar' style={{background: 'blue', padding: '20px 10px'}}>
          <NavLink to={'/'}>users</NavLink>
          <NavLink to={'/todos'}>todos</NavLink>
          <NavLink to={'/rest'}>rest</NavLink>
        </div>
        <Routes>
          <Route path='/' element={<UserPage/>}/>
          <Route path='/todos' element={<TodoPage/>}/>
          <Route path='/rest' element={<EventsExample/>}/>
          <Route path='/users/:id' element={<UserItemPage/>}/>
          <Route path='/todos/:id' element={<TodosItemPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Card width='200px' height='200px' variation={CardVariation.primary}>
        <button>my button</button>
      </Card> */}
    </div>
  );
}

export default App;
