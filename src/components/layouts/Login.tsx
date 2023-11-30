import React from "react";
import Header from "./Header";
import Main from "./Main";
import styled from "styled-components";

const LoginTitle = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-top: 60px;
  margin-bottom: 30px;
`;

const IdContainer = styled.div`
  margin-top: 15px;
  text-align: center;
`;

const IdInput = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  width: 330px;
  height: 25px;
  margin-right: 10px;
  border-radius: 2px;
`;

const PwContainer = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const PwInput = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  width: 330px;
  height: 25px;
  margin-right: 10px;
  border-radius: 2px;
`;

const LoginButtonContainer = styled.div`
  text-align: center;
`;

const LoginButton = styled.button`
  border: none;
  width: 350px;
  height: 45px;
  border-radius: 2px;
  background-color: #232323;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  justify-content: center;
  margin-top: 20px;
  line-height: 45px;
  margin-right: 10px;
`;

const Login: React.FC = () => {
  return (
    <>
      <Main />
      <Header />
      <LoginTitle>로그인</LoginTitle>
      <IdContainer>
        <IdInput type="text" placeholder="아이디를 입력해주세요" />
      </IdContainer>
      <PwContainer>
        <PwInput type="text" placeholder="비밀번호를 입력해주세요" />
      </PwContainer>
      <LoginButtonContainer>
        <LoginButton>로그인</LoginButton>
      </LoginButtonContainer>
    </>
  );
};

export default Login;
