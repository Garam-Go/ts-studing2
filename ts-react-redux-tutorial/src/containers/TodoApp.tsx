import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { toggleTodo, removeTodo, addTodo } from '../modules/todos';
import TodoInsert from '../components/TodoInsert'
import TodoList from '../components/TodoList';

const TodoApp: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    console.log('app 할일 등록하기 ', text)
    dispatch(addTodo(text));
  };

  const onToggle = (id: number) => {
    console.log('app Toggle ', id)
    dispatch(toggleTodo(id));
  };

  const onRemove = (id: number) => {
    console.log('app 할일 삭제하기 ', id)
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </div>
  )
}

export default TodoApp;