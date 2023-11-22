import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f7f7f7;
  color: #fff;
  padding: 20px;
`;

const FooterText = styled.p`
  text-align: center;
  color: black;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>footer </FooterText>
    </FooterContainer>
  );
};

export default Footer;
