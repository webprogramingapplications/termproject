import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FirstBanner from "./FirstBanner";
import SecondBanner from "./SecondBanner";
import ThirdBanner from "./ThirdBanner";

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

  const banners = [
    <FirstBanner bgImage="" />,
    <SecondBanner bgImage="https://i.postimg.cc/d0mvzqxQ/2023-11-24-11-48-26.png" />,
    //<ThirdBanner bgImage="https://i.postimg.cc/d0mvzqxQ/2023-11-24-11-48-26.png" />,
    // 추가적인 배너 내용들
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

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
            transitionDelay: `${index * 0.5}s`, // 각 배너마다 0.5초씩 시간차 설정
          }}
        >
          {banner}
        </Slide>
      ))}
    </SliderContainer>
  );
};

export default BannerSlider;
