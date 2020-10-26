import React from 'react';
import './App.css';

import { useQuery, useMutation, gql } from '@apollo/client';

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

  console.log(data)
  const handleLogin = () =>{
    console.log('로긴버튼')
    login()
  }

  return (
    <div className="App">
      <button onClick = {() => {handleLogin()}}>로그인</button>
    </div>
  );
}

export default App;
