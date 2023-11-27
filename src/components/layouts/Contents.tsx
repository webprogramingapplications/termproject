import React from "react";
import Header from "./Header";
import Main from "./Main";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface Product {
  name: string;
  price: string;
  image: string;
}

const LeftContainer = styled.div`
  width: 48%;
  display: inline-block;
  vertical-align: top;
  margin-top: 40px;
`;

const RightContainer = styled.div`
  width: 52%;
  display: inline-block;
  vertical-align: top;
  margin-top: 40px;
`;

const ProductImage = styled.img`
  width: 55%;
  height: 55%;
  margin-left: 270px;
  display: flex;
`;

const ProductName = styled.div`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const ActionBox = styled.div`
  width: 400px;
  height: 50px;
  background-color: #232323;
  color: white;
  font-weight: bold;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 66px;
`;

const Contents: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const products = [
    {
      id: "1",
      name: "[그릭데이] 그릭요거트 시그니처 450g",
      price: "13,500원",
      image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
    },
    {
      id: "2",
      name: "[그릭데이] 그릭요거트 시그니처 450g",
      price: "13,500원",
      image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
    },
    {
      id: "3",
      name: "[그릭데이] 그릭요거트 시그니처 450g",
      price: "13,500원",
      image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
    },
    {
      id: "4",
      name: "[그릭데이] 그릭요거트 시그니처 450g",
      price: "13,500원",
      image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
    },
    {
      id: "5",
      name: "[풀무원] 토이쿠키 만들기 캐치티니핑",
      price: "9,980원",
      image: "https://i.postimg.cc/D02ry0Rg/2023-11-27-9-44-40.png",
    },
    {
      id: "6",
      name: "[서주] 딸기 생크림빵",
      price: "9,240원",
      image: "https://i.postimg.cc/brynjv5j/2023-11-27-9-50-20.png",
    },
    {
      id: "7",
      name: "[제로밀] 글루텐프리 빵",
      price: "8,455원",
      image: "https://i.postimg.cc/Bv5f1Zmy/2023-11-27-9-47-27.png",
    },
    {
      id: "8",
      name: "[그릭데이] 그릭요거트 시그니처 450g",
      price: "13,500원",
      image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
    },
  ];

  const selectedProduct: Product | undefined = id
    ? products[parseInt(id)]
    : undefined;

  return (
    <>
      <Main />
      <Header />
      <LeftContainer>
        {selectedProduct && (
          <ProductImage
            src={selectedProduct.image}
            alt={selectedProduct.name}
          />
        )}
      </LeftContainer>
      <RightContainer>
        {selectedProduct && (
          <>
            <ProductName>{selectedProduct.name}</ProductName>
            <ProductPrice>{selectedProduct.price}</ProductPrice>
            <ActionBox>장바구니 담기</ActionBox>
          </>
        )}
      </RightContainer>
    </>
  );
};

export default Contents;
