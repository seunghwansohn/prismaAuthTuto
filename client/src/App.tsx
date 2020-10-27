import React from 'react';

import { useQuery, useMutation, gql } from '@apollo/client';

import {cartItemsVar, ifCheckedVar} from './apolloClient/cache'

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

export const GET_IF_CHECKED = gql`
  query GetIfChecked {
    ifChecked @client
  }
`;

const App = () => {

  const [login, {error, data}] = useMutation(LOGIN)
  const { data : dataCart, loading, error : cartError } = useQuery(GET_CART_ITEMS);

  const { data : ifChecked, loading : ifcheckedLoading, error : ifCheckedError } = useQuery(GET_IF_CHECKED);

  const handleLogin = () =>{
    login()
  }

  const handleChangeInput = (e : any) =>{
    cartItemsVar(e.target.value)
  }

  const handleCheck = () => {
    ifCheckedVar(!ifChecked.ifChecked)
  }

  return (
    <div className="App">
      <button onClick = {() => {handleLogin()}}>로그인</button>

      <input onChange = {(e : any) => handleChangeInput(e)}></input>
      <div>입력된 텍스트는 {dataCart.cartItems}입니다.</div>
      <label>checked?
        <input 
          name = "isChecked"
          type = "checkbox"
          checked = {ifChecked.ifChecked}
          onChange = {() => handleCheck()}
        ></input>
      </label>
    </div>
  );
}

export default App;
