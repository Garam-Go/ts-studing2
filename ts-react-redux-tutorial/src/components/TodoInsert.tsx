import React, { ChangeEvent, FormEvent, useState } from 'react'

// 부모 컨테이너에서 받아온 props 타입 정의중
type TodoInsertPorps = {
  onInsert: (text: string) => void
}

// function TodoInsert({ onInsert }: TodoInsertPorps) {
//   const [value, setValue] = useState('')
//   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value)
//   }
//   const onSubmit = (e: FormEvent) => {
//     e.preventDefault()
//     onInsert(value)
//     setValue('')
//   }

//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         placeholder='할 일을 입력하세요'
//         value={value}
//         onChange={onChange}
//       />
//       <button type='submit'>등록하기</button>
//     </form>
//   )
// }

// todo 등록하기 
const TodoInsert: React.FC<TodoInsertPorps> = ({ onInsert }) => {
  // state for saving todo string items
  const [value, setValue] = useState('')
  // input상자에서 onChange될떄마다 state값 변경진행
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  // submit이벤트 발생
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    onInsert(value)
    setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={onChange}
      />
      <button type='submit'>등록하기</button>
    </form>
  )
}

export default TodoInsert;