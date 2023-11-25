import React from "react";
import styled from "styled-components";

interface ThirdBannerProps {
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

const BoldText = styled.span`
  font-weight: bold;
  text-align: left;
`;

const ThirdBanner: React.FC<ThirdBannerProps> = ({ bgImage }) => {
  return (
    <TextContainer bgImage={bgImage}>
      <span>식탁의 품격을 높여줄 </span>
      <br />
      <BoldText>프리미엄 식품 블랙 특가</BoldText>
    </TextContainer>
  );
};

export default ThirdBanner;
