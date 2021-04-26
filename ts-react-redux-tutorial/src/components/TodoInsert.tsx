import React, { ChangeEvent, FormEvent, useState } from 'react'

type TodoInsertPorps = {
  onInsert: (text: string) => void
}

function TodoInsert({ onInsert }: TodoInsertPorps) {
  const [value, setValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
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