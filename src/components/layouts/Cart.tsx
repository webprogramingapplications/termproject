import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";

interface CustomButtonProps {
  isActive: boolean;
}

const CartTitle = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-top: 60px;
`;

const LeftContainer = styled.div`
  width: 70%;
  display: inline-block;
  vertical-align: top;
`;

const RightContainer = styled.div`
  width: 30%;
  display: inline-block;
  vertical-align: top;
`;

const CheckContainer = styled.div`
  margin-top: 60px;
  border-bottom: 1px solid black;
  width: 75%;
  margin-left: 20%;
`;

const Button = styled.button<CustomButtonProps>`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: ${(props) => (props.isActive ? "black" : "lightgray")};
  border: none;
  transition: background-color 0.3s ease;
  margin-bottom: 15px;
`;

const Check = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 15px;
`;

const PayContainer = styled.div`
  margin-top: 100px;
  width: 300px;
  height: 300px;
  border: 0.5px solid #e1e1e1;
  background-color: #fbfbfb;
  padding: 10px;
`;

const PaymentText = styled.div`
  font-size: 18px;
`;

const PayContainer2 = styled.div`
  margin-top: 20px;
  width: 300px;
  height: 30px;
  border: none;
  background-color: #232323;
  padding: 10px;
  border-radius: 2px;
`;

const PaymentText2 = styled.div`
  font-size: 18px;
  color: white;
  text-align: center;
  font-weight: bold;
  margin: 3px;
`;

const CheckIcon = styled.svg<{ isActive: boolean }>`
  width: 12px;
  height: 12px;
  fill: ${(props) => (props.isActive ? "white" : "#808080")};
  transition: fill 0.3s ease;
`;

const NoItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 300px);
  margin-left: 20%;
  margin-right: 5%;
  height: 350px;
`;

const NoItemsText = styled.div`
  color: #d1d1d1;
  font-weight: 700;
  margin-bottom: 50px;
`;

const Cart: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Main />
      <Header />
      <CartTitle>장바구니</CartTitle>
      <LeftContainer>
        <CheckContainer>
          <Button onClick={handleClick} isActive={isActive}>
            <CheckIcon isActive={isActive} viewBox="0 0 12 12">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.89807 8.22612L2.47217 5.80021L1.40833 6.86405L4.89807 10.3538L11.5922 3.65976L10.5284 2.59592L4.89807 8.22612Z"
              />
            </CheckIcon>
          </Button>
          <Check>전체선택</Check>
          <Check>|</Check>
          <Check>선택삭제</Check>
        </CheckContainer>
        <NoItemsContainer>
          <NoItemsText>장바구니에 담긴 상품이 없습니다</NoItemsText>
        </NoItemsContainer>
      </LeftContainer>
      <RightContainer>
        <PayContainer>
          <PaymentText>결제창</PaymentText>
        </PayContainer>
        <PayContainer2>
          <PaymentText2>구매</PaymentText2>
        </PayContainer2>
      </RightContainer>
    </>
  );
};

export default Cart;
