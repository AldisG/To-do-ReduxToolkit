import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { addTodo } from '../slices/todosSlice';
import { useAppDispatch } from '../store/hooks';

const TodoFormStyled = styled.form`
  --black: #333333;
  --transparentBlack: rgba(0, 0, 0, 0.3);
  --transparentBlackDarker: rgba(0, 0, 0, 0.5);
  --transparentWhite: #ffffff50;
  --white: #ffffff;
  --bacground-color-accent-variation: #5757bb;
  --focus-inner-shadow-lighter: 
  var(--transparentBlack) 0px 10px 8px -10px inset, var(--transparentBlack) 0px 8px 6px -10px inset;
  --focus-inner-shadow-darker:
  var(--transparentBlack) 0px 10px 10px -8px inset, var(--transparentBlack) 0px 8px 10px -8px inset;

  --filter-drop-shadow-up: drop-shadow(var(--transparentWhite) -4px -4px 4px);
  --filter-drop-shadow-down: drop-shadow(var(--transparentBlackDarker) 4px 4px 4px);
  
  display: flex;
  width: max-content;
  width: 350px;
  gap: 10px;
  *{
    border-radius: 4px;
    color: var(--black);
    background-color: var(--white);
    /* outline: 3px solid #fff; */
  }
  .submit-todo__input{
    padding: 0 15px;
    border: none;
    font-size: 14px;
    box-shadow: var(--focus-inner-shadow-darker);
    /* filter: var(--filter-drop-shadow-up) var(--filter-drop-shadow-down); */
    &:focus{
      box-shadow: var(--focus-inner-shadow-lighter);
      /* filter: var(--filter-drop-shadow-up) var(--filter-drop-shadow-down); */
    }

  }
  .submit-todo__button{
    z-index: 2;
    min-width: 60px;
    height: 30px;
    border: none;
    cursor: pointer;
    box-shadow: var(--transparentBlack) 0px 3px 12px 0px inset;
    transition: box-shadow .2s;
    &:hover{
      /* outline: 3px solid #2345fd; */
      box-shadow: var(--transparentBlack) 0px 3px 5px 0px inset;
    }
  }
`;

const TodoForm = () => {
  const minCharacterCount = 1;
  const [newTodoText, setnewTodoText] = useState('');
  const [InputError, setInputError] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (newTodoText.length < minCharacterCount) {
      setInputError(true);
      return;
    }
    setInputError(false);
  }, [newTodoText]);

  return (
    <TodoFormStyled
      className="submit-todo"
      onSubmit={(e) => {
        e.preventDefault();
        if (newTodoText.length >= minCharacterCount) {
          dispatch(addTodo(newTodoText));
          setnewTodoText('');
        }
      }}
    >
      <input
        className="submit-todo__input"
        type="text"
        value={newTodoText}
        placeholder="New task"
        maxLength={40}
        minLength={minCharacterCount}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          setnewTodoText(target.value);
        }}
      />
      <button className="submit-todo__button" disabled={InputError}>ADD</button>
    </TodoFormStyled>
  );
};

export default TodoForm;
