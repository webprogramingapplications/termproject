import React from "react";
import styled from "styled-components";

interface FirstBannerProps {
  bgImage: string;
}

const TextContainer = styled.div<{ bgImage: string }>`
  font-size: 24px;
  color: black;
  text-align: left;
  background-image: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 350px;
`;

const Text = styled.span`
  margin-left: 30%;
  margin-top: 80px;
  display: block;
`;

const BoldText = styled.span`
  font-weight: bold;
  text-align: left;
  margin-left: 30%;
  margin-top: 20%;
`;

const Text2 = styled.p`
  font-size: 18px;
  margin-left: 30%;
  margin-top: 30px;
  font-weight: 600;
`;

const Text3 = styled.p`
  font-size: 18px;
  margin-left: 30%;
  margin-top: 70px;
  font-weight: 600;
`;

const FirstBanner: React.FC<FirstBannerProps> = ({ bgImage }) => {
  return (
    <TextContainer bgImage={bgImage}>
      <Text>식탁의 품격을 높여줄 </Text>
      <BoldText>프리미엄 식품 블랙 특가</BoldText>
      <Text2>한우부터 발사믹까지, 최대 33% 할인</Text2>
      <Text3>11.20-11.30</Text3>
    </TextContainer>
  );
};

export default FirstBanner;
