import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductContainer = styled(Link)`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
  color: inherit;
`;

const ProductImage = styled.img`
  width: 270px;
  height: 380px;
  object-fit: cover;
  border-radius: 2px;
`;

const ProductName = styled.div`
  text-align: left;
  margin-top: 7px;
`;

const ProductPrice = styled.div`
  font-weight: 700;
  text-align: left;
  margin-top: 3px;
`;

const Product: React.FC<{
  name: string;
  price: string;
  image: string;
  to: string;
}> = ({ name, price, image, to }) => {
  return (
    <ProductContainer to={to}>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
    </ProductContainer>
  );
};

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 20px;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 60px;
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
    name: "[그릭데이] 그릭요거트 시그니처 450g",
    price: "13,500원",
    image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
  },
  {
    name: "[그릭데이] 그릭요거트 시그니처 450g",
    price: "13,500원",
    image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
  },
  {
    name: "[그릭데이] 그릭요거트 시그니처 450g",
    price: "13,500원",
    image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
  },
  {
    name: "[그릭데이] 그릭요거트 시그니처 450g",
    price: "13,500원",
    image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
  },
  {
    name: "[그릭데이] 그릭요거트 시그니처 450g",
    price: "13,500원",
    image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
  },
  {
    name: "[그릭데이] 그릭요거트 시그니처 450g",
    price: "13,500원",
    image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
  },
  {
    name: "[그릭데이] 그릭요거트 시그니처 450g",
    price: "13,500원",
    image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
  },
  {
    name: "[그릭데이] 그릭요거트 시그니처 450g",
    price: "13,500원",
    image: "https://i.postimg.cc/MTmkk1Xj/2023-11-22-12-57-09.png",
  },
  // 추가적인 상품 데이터
];

const SpecialOfferComponent: React.FC = () => {
  return (
    <>
      <SpecialOffer>🖤 역대급 블랙 특가 🖤 </SpecialOffer>
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
          to={`/contents/${index}`}
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
