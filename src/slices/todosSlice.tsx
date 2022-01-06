import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as todoID } from 'uuid';

export type Todos = {
  text: string;
  finished: boolean;
  id: string;
}
// state.todos = [{ text: payload, finished: false, id: todoID() }, ...initialState.todos];

const initialState = {
  todos: [
    {
      text: `'test 1 lLorem ipsum dolor sit amet, , consectetur adipisicing elit. Iure odit , 
      consectetur adipisicing elit. Iure odit voluptatem eos placeat quidem, esse quos labore 
      et i voluptatem eos placeat quidem, es , consectetur adipisicing elit. Iure odit voluptatem 
      eos placeat quidem, esse quos labore et i, consectetur adipisicing elit. Iure odit voluptatem 
      eos placeat quidem, esse quos labore et i, consectetur adipisicing elit. Iure odit voluptatem 
      eos placeat quidem, esse quos labore et i, consectetur adipisicing elit. Iure odit voluptatem 
      eos placeat quidem, esse quos labore et ise quos labore et i, consectetur adipisicing elit. 
      Iure odit voluptatem eos placeat quidem, esse quos labore et iconsectetur adipisicing elit. 
      Iure odit voluptatem eos placeat quidem, esse quos labore et incidunt laboriosam ipsam necessitatibus 
      obcaecati quo, eligendi qui maxime fugit ea corporis.'`,
      finished: false,
      id: '1',
    },
    { text: 'test 2', finished: true, id: '2' },
    { text: 'test 3', finished: false, id: '3' },
  ] as Todos[],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<string>) => {
      // hmmmm, nepapildinas initial state
      const heyDoggy = [...initialState.todos];
      heyDoggy.unshift({ text: payload, finished: false, id: todoID() });
    },
    toggleTodoFinished: (state, { payload }: PayloadAction<string>) => {
      // initialState.todos[payload].finished = !initialState.todos[payload].finished;
      const clickedIndex = initialState.todos.findIndex((item) => item.id === payload);
    },
    updateEditedTodo: (state, { payload }: PayloadAction<{id: number, text: string}>) => {
      initialState.todos[payload.id].text = payload.text;
    },
  },
});

export const { addTodo, toggleTodoFinished, updateEditedTodo } = todosSlice.actions;
export default todosSlice.reducer;
