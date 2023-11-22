import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  font-size: 24px;
  color: black;
  text-align: left;
`;

const BoldText = styled.span`
  font-weight: bold;
  text-align: left;
`;

const FirstBannerText: React.FC = () => {
  return (
    <TextContainer>
      <span>식탁의 품격을 높여줄 </span>
      <br />
      <BoldText>프리미엄 식품 블랙 특가</BoldText>
    </TextContainer>
  );
};

export default FirstBannerText;
