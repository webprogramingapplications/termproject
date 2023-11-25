import React from "react";
import styled from "styled-components";

interface SecondBannerProps {
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

const SecondBanner: React.FC<SecondBannerProps> = ({ bgImage }) => {
  return (
    <TextContainer bgImage={bgImage}>
      <span>두 번째 배너 내용</span>
      <br />
      <BoldText>두 번째 배너 텍스트</BoldText>
    </TextContainer>
  );
};

export default SecondBanner;
