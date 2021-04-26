import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

// 부모 컨테이너에서 받아온 props타입 정의중
type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

// function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
//   if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;
//   return (
//     <ul>
//       {todos.map(todo => (
//         <TodoItem
//           todo={todo}
//           onToggle={onToggle}
//           onRemove={onRemove}
//           key={todo.id}
//         />
//       ))}
//     </ul>
//   );
// }

// typeScript 구조변경
const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  // 등록된 todo 항목이 없을때
  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;
  // 등록된 todo 항목이 있다면 리스트 노출
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id}
        />
      ))}
    </ul>
  );
}

export default TodoList;