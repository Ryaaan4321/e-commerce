import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh; /* Corrected height to use viewport height */

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
      background-size:cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 35%;
  background-color: white;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: #333; /* Add a color property */
  margin-bottom: 10px; /* Add margin for spacing */
`;

const Form = styled.form`
  display: flex;
  flex-direction:column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0; /* Added a semicolon at the end */
  padding: 10px;
`;

const BUTTON = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom:10px;
`;

const Login = () => {
  const [username , setUserName]=useState("");
  const[password , setPassword]=useState("");
  const dispatch= useDispatch();
  const{isFetching , error}=useSelector((state)=>state.user)

  const handleClick= (e)=>{
    e.preventDefault();
    login(dispatch,{username , password})
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username"  onChange={(e)=>setUserName(e.target.value)}/>
          <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
          <BUTTON onClick={handleClick} disabled={isFetching}> LOGIN </BUTTON>
          <Link  style={{ margin: '10px 0px', fontSize:'12px' , textDecoration:'underline' , cursor:'pointer'}}>FORGET PASSWORD</Link>
          <Link to="/register" style={{ margin: '5px 0px', fontSize:'12px' , textDecoration:'underline' , cursor:'pointer'}}>CREATE A NEW ACCOUNT</Link>

        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
