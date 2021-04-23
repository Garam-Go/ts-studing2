import React from 'react';
import './App.css';
import Greetings from './Greetings'
import Counter from './Counter'
import MyForm from './MyForm'
import ReducerSample from './ReducerSample'
import { SampleProvider }from './SampleContext'

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name}, says hello!`)
  }
  const onSubmit = (form: {name:string, desc: string}) => {
    console.log('form : ', form)
  }
  return (
    <div>
      <Greetings name='Hello!' onClick={onClick}/>
      <Counter/>
      <MyForm onSubmit={onSubmit}/>
      <SampleProvider>
        <ReducerSample/>
      </SampleProvider>
    </div>
  );
}

export default App;
