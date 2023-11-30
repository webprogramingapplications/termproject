import React from "react";
import Header from "./Header";
import Main from "./Main";
import styled from "styled-components";

const JoinContainer = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 60px;
`;

const Required = styled.div`
  font-size: 14px;
  color: #868686;
  margin-bottom: 10px;
  text-align: right;
  margin-right: 25%;

  &::before {
    content: "*";
    color: black;
  }
`;

const Line = styled.hr`
  border: none;
  border-top: 2px solid black;
  width: 50%;
  margin: 0 auto;
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

const IdLabel = styled.label`
  font-size: 14px;
  color: black;
  font-weight: bold;
  margin-right: 110px;
`;

const IdButtonContainer = styled.div`
  display: inline-block;
  margin-left: 10px;
  position: relative;
`;

const IdCheckButton = styled.button`
  border: 1.5px solid #000;
  background-color: white;
  color: black;
  font-size: 14px;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 2px;
  cursor: pointer;
  width: 120px;
  height: 41px;
`;

const CheckText = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 4px;
  font-weight: bold;
  color: black;
  border: 2px solid #000;
  border-top: none;
  border-radius: 0 0 4px 4px;
  display: none;
`;

const PwContainer = styled.div`
  margin-top: 15px;
`;

const PwInput = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  width: 330px;
  height: 25px;
  margin-right: 180px;
  border-radius: 2px;
`;

const PwLabel = styled.label`
  font-size: 14px;
  color: black;
  font-weight: bold;
  margin-right: 100px;
  margin-left: 40px;
`;

const PwcheckContainer = styled.div`
  margin-top: 15px;
`;

const PwcheckInput = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  width: 330px;
  height: 25px;
  margin-right: 180px;
  border-radius: 2px;
`;

const PwcheckLabel = styled.label`
  font-size: 14px;
  color: black;
  font-weight: bold;
  margin-right: 75px;
  margin-left: 40px;
`;

const NameContainer = styled.div`
  margin-top: 15px;
`;

const NameInput = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  width: 330px;
  height: 25px;
  margin-right: 180px;
  border-radius: 2px;
`;

const NameLabel = styled.label`
  font-size: 14px;
  color: black;
  font-weight: bold;
  margin-right: 124px;
  margin-left: 40px;
`;

const EmailContainer = styled.div`
  margin-top: 15px;
`;

const EmailInput = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  width: 330px;
  height: 25px;
  margin-right: 10px;
  border-radius: 2px;
`;

const EmailLabel = styled.label`
  font-size: 14px;
  color: black;
  font-weight: bold;
  margin-right: 110px;
`;

const EmailButtonContainer = styled.div`
  display: inline-block;
  margin-left: 10px;
  position: relative;
`;

const EmailCheckButton = styled.button`
  border: 1.5px solid #000;
  background-color: white;
  color: black;
  font-size: 14px;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 2px;
  cursor: pointer;
  width: 120px;
  height: 41px;
`;

const EmailCheckText = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 4px;
  font-weight: bold;
  color: black;
  border: 2px solid #000;
  border-top: none;
  border-radius: 0 0 4px 4px;
  display: none;
`;

const PhoneContainer = styled.div`
  margin-top: 15px;
`;

const PhoneInput = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  width: 330px;
  height: 25px;
  margin-right: 10px;
  border-radius: 2px;
`;

const PhoneLabel = styled.label`
  font-size: 14px;
  color: black;
  font-weight: bold;
  margin-right: 110px;
`;

const PhoneButtonContainer = styled.div`
  display: inline-block;
  margin-left: 10px;
  position: relative;
`;

const PhoneCheckButton = styled.button`
  border: 1.5px solid #ccc;
  background-color: white;
  color: #ccc;
  font-size: 14px;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 2px;
  cursor: pointer;
  width: 120px;
  height: 41px;
`;

const PhoneCheckText = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 4px;
  font-weight: bold;
  color: #ccc;
  border: 2px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  display: none;
`;

const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-left: 375px;
`;

const AddressButton = styled.button`
  border: 1px solid #000;
  width: 348px;
  height: 37px;
  margin-right: 180px;
  border-radius: 2px;
  background-color: transparent;
  color: black;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const AddressLabel = styled.label`
  font-size: 14px;
  color: black;
  font-weight: bold;
  margin-right: 120px;
  margin-left: 40px;
`;

const JoinButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const JoinButton = styled.button`
  border: none;
  width: 250px;
  height: 50px;
  border-radius: 2px;
  background-color: #232323;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  line-height: 50px;
`;

const IdComponent = () => {
  const handleLeave = () => {
    const checkText = document.getElementById("checkText");
    if (checkText) {
      checkText.style.display = "none";
    }
  };

  return (
    <IdContainer>
      <IdLabel>아이디*</IdLabel>
      <IdInput type="text" placeholder="아이디를 입력해주세요" />
      <IdButtonContainer>
        <IdCheckButton onMouseLeave={handleLeave}>중복확인</IdCheckButton>
        <CheckText id="checkText">중복확인</CheckText>
      </IdButtonContainer>
    </IdContainer>
  );
};

const PwComponent = () => {
  return (
    <PwContainer>
      <PwLabel>비밀번호*</PwLabel>
      <PwInput type="text" placeholder="비밀번호를 입력해주세요" />
    </PwContainer>
  );
};

const PwcheckComponent = () => {
  return (
    <PwcheckContainer>
      <PwcheckLabel>비밀번호확인*</PwcheckLabel>
      <PwcheckInput type="text" placeholder="비밀번호를 한번 더 입력해주세요" />
    </PwcheckContainer>
  );
};

const NameComponent = () => {
  return (
    <NameContainer>
      <NameLabel>이름*</NameLabel>
      <NameInput type="text" placeholder="이름을 입력해주세요" />
    </NameContainer>
  );
};

const EmailComponent = () => {
  const handleLeave = () => {
    const checkText = document.getElementById("emailCheckText");
    if (checkText) {
      checkText.style.display = "none";
    }
  };

  return (
    <EmailContainer>
      <EmailLabel>이메일*</EmailLabel>
      <EmailInput type="text" placeholder="예: itmarket@it.com" />
      <EmailButtonContainer>
        <EmailCheckButton onMouseLeave={handleLeave}>중복확인</EmailCheckButton>
        <EmailCheckText id="emailCheckText">중복확인</EmailCheckText>
      </EmailButtonContainer>
    </EmailContainer>
  );
};

const AddressComponent = () => {
  return (
    <AddressContainer>
      <AddressLabel>주소*</AddressLabel>
      <AddressButton type="button">주소 검색</AddressButton>
    </AddressContainer>
  );
};

const PhoneComponent = () => {
  const handleLeave = () => {
    const checkText = document.getElementById("phoneCheckText");
    if (checkText) {
      checkText.style.display = "none";
    }
  };

  return (
    <PhoneContainer>
      <PhoneLabel>휴대폰*</PhoneLabel>
      <PhoneInput type="text" placeholder="숫자만 입력해주세요" />
      <PhoneButtonContainer>
        <PhoneCheckButton onMouseLeave={handleLeave}>
          인증번호 받기
        </PhoneCheckButton>
        <PhoneCheckText id="phoneCheckText">인증번호 받기</PhoneCheckText>
      </PhoneButtonContainer>
    </PhoneContainer>
  );
};

const Join: React.FC = () => {
  return (
    <JoinContainer>
      <Main />
      <Header />
      <Title>회원가입</Title>
      <Required>필수입력사항</Required>
      <Line />
      <IdComponent />
      <PwComponent />
      <PwcheckComponent />
      <NameComponent />
      <EmailComponent />
      <PhoneComponent />
      <AddressComponent />
      <JoinButtonContainer>
        <JoinButton>가입하기</JoinButton>
      </JoinButtonContainer>
    </JoinContainer>
  );
};

export default Join;
