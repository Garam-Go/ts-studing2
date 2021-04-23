import React, { FC } from 'react';

// TS의 기초적인 props 관리

type GreetingsProps = {
  name: string
  optional?: string
  onClick: (name: string) => void;
};

const Greetings: FC<GreetingsProps> = ({ name, optional, onClick }) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click BTN</button>
      </div>
    </div>
  );
}

// function Greetings({ name, optional, onClick }: GreetingsProps) {
//     const handleClick = () => onClick(name);
//     return (
//         <div>
//             Hello, {name}
//             {optional && <p>{optional}</p>}
//             <div>
//                  <button onClick={handleClick}>click</button>
//              </div>
//         </div>
        
//     )
// }

export default Greetings;