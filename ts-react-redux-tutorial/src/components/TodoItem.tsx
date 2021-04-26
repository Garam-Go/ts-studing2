import React, { CSSProperties } from 'react'
import { Todo } from '../modules/todos'

// 부모 컨테이너에서 받아온 props 타입 정의중
type TodoItemProps = {
  todo: Todo
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

// function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
//   // CSSProperties는 style 객체의 타입
//   const textStyle: CSSProperties = {
//     textDecoration: todo.done ? 'line-through' : 'none'
//   }
//   const removeStyle: CSSProperties = {
//     marginLeft: 8,
//     color: 'red'
//   }

//   const handleToggle = () => {
//     onToggle(todo.id)
//   }

//   const handleRemove = () => {
//     onRemove(todo.id)
//   }

//   return (
//     <li>
//       <span onClick={handleToggle} style={textStyle}>
//         {todo.text}
//       </span>
//       <span onClick={handleRemove} style={removeStyle}>
//         (X)
//       </span>
//     </li>
//   )
// }

// 리스트에서 노출할 todo 아이템
const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  // CSSProperties는 style 객체의 타입
  const textStyle: CSSProperties = {
    textDecoration: todo.done ? 'line-through' : 'none'
  }
  const removeStyle: CSSProperties = {
    marginLeft: 8,
    color: 'red'
  }

  const handleToggle = () => {
    onToggle(todo.id)
  }

  const handleRemove = () => {
    onRemove(todo.id)
  }

  return (
    <li>
      <span onClick={handleToggle} style={textStyle}>
        {todo.text}
      </span>
      <span onClick={handleRemove} style={removeStyle}>
        (X)
      </span>
    </li>
  )
}

export default TodoItem;