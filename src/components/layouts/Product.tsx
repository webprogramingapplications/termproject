import React from "react";
import styled from "styled-components";

// 각 상품을 보여주는 컴포넌트
const ProductContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

const ProductImage = styled.img`
  width: 270px;
  height: 380px;
  object-fit: cover;
  border-radius: 2px;
`;

const ProductName = styled.div`
  text-align: left;
`;

const ProductPrice = styled.div`
  font-weight: 700;
  text-align: left;
`;

const Product: React.FC<{ name: string; price: string; image: string }> = ({
  name,
  price,
  image,
}) => {
  return (
    <ProductContainer>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
    </ProductContainer>
  );
};

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 100px;
`;

const SpecialOffer = styled.div`
  font-size: 28px;
  margin-bottom: 5px;
  text-align: center;
  font-weight: bold;
  margin-top: 70px;
`;

const AdditionalOffer = styled.div`
  font-size: 16px;
  color: #4a4a4a;
  text-align: center;
  margin-bottom: 20px;
`;

const products = [
  {
    name: "상품1",
    price: "10000원",
    image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
  },
  {
    name: "상품2",
    price: "11000원",
    image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
  },
  {
    name: "상품3",
    price: "12000원",
    image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
  },
  {
    name: "상품4",
    price: "13000원",
    image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
  },
  // 추가적인 상품 데이터
];

const SpecialOfferComponent: React.FC = () => {
  return (
    <>
      <SpecialOffer>🖤 역대급 블랙 특가 🖤 &gt;</SpecialOffer>
      <AdditionalOffer>장바구니 파격 세일부터 골라담기까지!</AdditionalOffer>
    </>
  );
};

const ProductListComponent: React.FC = () => {
  return (
    <ProductListContainer>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </ProductListContainer>
  );
};

const ProductList: React.FC = () => {
  return (
    <>
      <SpecialOfferComponent />
      <ProductListComponent />
    </>
  );
};

export default ProductList;
