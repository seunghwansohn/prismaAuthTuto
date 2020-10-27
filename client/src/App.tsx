import React from 'react';

import { useQuery, useMutation, gql } from '@apollo/client';

import {cartItemsVar} from './apolloClient/cache'

const LOGIN = gql`
  mutation{
    loginUser(email:"lee@sohntech.net", password: "ddffdgbvdvcf"){
      id
      email
      token
    }
  }
`;

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

const App = () => {

  const [login, {error, data}] = useMutation(LOGIN)
  const { 
    data : dataCart, 
    loading, 
    error : cartError } = useQuery(GET_CART_ITEMS);

  const handleLogin = () =>{
    login()
  }

  const handleChangeInput = (e : any) =>{
    cartItemsVar(e.target.value)
  }

  return (
    <div className="App">
      <button onClick = {() => {handleLogin()}}>로그인</button>

      <input onChange = {(e : any) => handleChangeInput(e)}></input>
      <div>입력된 텍스트는 {dataCart.cartItems}입니다.</div>
    </div>
  );
}

export default App;
