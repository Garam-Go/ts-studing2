import React, { useReducer, useState } from 'react';

// hooks를 이용한 숫자 count 작업 짆애
// useState를 이용하여 버튼숫자별로 올라갔다 내려갓다

// Reducer사용작업 진행

type Action = { type: 'INCREASE' } | { type: 'DECREASE' }; // 이렇게 액션을 | 으로 연달아서 쭉 나열

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    default: 
    throw new Error('리듀서 실패')
  }
}


function Counter() {
  // const [count, setCount] = useState<number>(0);
  // const onIncrease = () => setCount(count + 1);
  // const onDecrease = () => setCount(count - 1);
  const [count, dispatch] = useReducer(reducer, 0)
  const onIncrease = () => dispatch({ type: 'INCREASE' })
  const onDecrease = () => dispatch({ type: 'DECREASE' })
  
  return (
    <div>
      <h1> 현재 숫자 : {count}</h1>
      <div>
        <button onClick={onIncrease}> +1 </button>
        <button onClick={onDecrease}> -1 </button>
      </div>
    </div>
  );
}

export default Counter;