import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <BUTTON> LOGIN </BUTTON>
          <Link  style={{ margin: '10px 0px', fontSize:'12px' , textDecoration:'underline' , cursor:'pointer'}}>FORGET PASSWORD</Link>
          <Link to="/register" style={{ margin: '5px 0px', fontSize:'12px' , textDecoration:'underline' , cursor:'pointer'}}>CREATE A NEW ACCOUNT</Link>

        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
