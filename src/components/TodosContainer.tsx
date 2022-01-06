// import { addTodo } from '../slices/todosSlice';
import styled from 'styled-components';
import { useAppSelector } from '../store/hooks';
import Todo from './Todo';

const TodosContainerStyled = styled.div`
  .wrapper{
    display: flex;
    min-width: 100%;
  }
  .todos-container__info{
    color: #fff;
  }
  .todos-container{
    min-width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const TodosContainer = () => {
  const todoList = useAppSelector(({ todos }) => todos.todos);
  return (
    <TodosContainerStyled>
      <span className="todos-container__info">{`Todo items: ${todoList.length}`}</span>
      <div className="wrapper">
        {/* <span className="todos-container__completed-bar">Input bar...</span> */}
        <div className="todos-container">
          {todoList.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </div>
      </div>
    </TodosContainerStyled>
  );
};

export default TodosContainer;
