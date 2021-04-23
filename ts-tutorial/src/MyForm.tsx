import React, { useState } from 'react'

// 인풋 상태 관리하기

type MyFormProps = {
    onSubmit: (form: { name: string, desc: string }) => void;
}

const MyForm: React.FC<MyFormProps> = ({ onSubmit }) => {
    const [form, setForm] = useState({
        name: '',
        desc: ''
    })
    const { name, desc } = form
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // 대충 어떤걸로 설정해야될지 모를때는 any로 설정한다.
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            desc: ''
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name='name' value={name} onChange={change}/>
            <input name='desc' value={desc} onChange={change}/>
            <button type='submit'>등록하기</button>
        </form>
    )
}

// function MyForm({ onSubmit }: MyFormProps) {
//     const [form, setForm] = useState({
//       name: '',
//       desc: ''
//     });
  
//     const { name, desc } = form;
  
//     const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       const { name, value } = e.target;
//       setForm({
//         ...form,
//         [name]: value
//       });
//     };
  
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//       // 여기도 모르니까 any 로 하겠습니다.
//       e.preventDefault();
//       onSubmit(form);
//       setForm({
//         name: '',
//         desc: ''
//       }); // 초기화
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <input name="name" value={name} onChange={onChange} />
//         <input name="desc" value={desc} onChange={onChange} />
//         <button type="submit">등록</button>
//       </form>
//     );
//   }

export default MyForm;