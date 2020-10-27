import React, {useState} from 'react';
import './App.css';

import { useQuery, useMutation, gql } from '@apollo/client';

import { makeVar } from '@apollo/client';

const LOGIN = gql`
  mutation{
    loginUser(email:"lee@sohntech.net", password: "ddffdgbvdvcf"){
      id
      email
      token
    }
  }
`;

function App() {

  const [login, {error, data}] = useMutation(LOGIN)

  const cartItemsVar    = makeVar('카카카');
  const [text, setText] = useState(cartItemsVar)

  const handleLogin = () =>{
    login()
  }

  const handleChangeInput = (e : any) =>{
    setText(cartItemsVar(e.target.value))
  }

  return (
    <div className="App">
      <button onClick = {() => {handleLogin()}}>로그인</button>
      <input onChange = {(e : any) => handleChangeInput(e)}></input>

      <div>입력된 텍스트는 {text}입니다.</div>
    </div>
  );
}

export default App;
