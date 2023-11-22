import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FirstBannerText from "./FirstBannerText";

const SliderContainer = styled.div`
  width: 100%;
  height: 350px;
  background-color: #f2f2f2;
  overflow: hidden;
  margin-top: 20px;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
`;

const BannerSlider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  // 이 부분에서 실제로 내용을 넣어주세요
  const banners = [
    <FirstBannerText />,
    "두 번째 배너",
    "세 번째 배너",
    // 추가적인 배너 내용들
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [banners.length]);

  return (
    <SliderContainer>
      {banners.map((banner, index) => (
        <Slide
          key={index}
          style={{
            transform: `translateX(-${slideIndex * 100}%)`,
          }}
        >
          {banner}
        </Slide>
      ))}
    </SliderContainer>
  );
};

export default BannerSlider;
