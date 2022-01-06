import { FC } from 'react';
import styled from 'styled-components';
import { Todos, toggleTodoFinished } from '../slices/todosSlice';
import { useAppDispatch } from '../store/hooks';
import '../styles/todo.scss';

type Props = {
  todo: Todos,
}

const Todo: FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleTodoFinished(todo.id));
  };
  return (
    <div
      className="todo-item"
      onClick={() => handleClick()}
    >
      <div className="completed-task-toggler-button" />
      <p className="todo-text">{todo.text}</p>
      <button className="delete-todo-button">X</button>
    </div>
  );
};

export default Todo;
