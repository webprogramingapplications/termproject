import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FirstBanner from "./FirstBanner";
import SecondBanner from "./SecondBanner";

const SliderContainer = styled.div`
  width: 100%;
  height: 350px;
  background-color: #f2f2f2;
  overflow: hidden;
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
    <FirstBanner bgImage="https://i.postimg.cc/50tXtt7K/2023-11-27-2-04-35.png" />,
    <SecondBanner bgImage="https://i.postimg.cc/d0mvzqxQ/2023-11-24-11-48-26.png" />,
    // 여기에 추가적인 배너를 넣어보세요.
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
            transitionDelay: `${index * 0.5}s`,
          }}
        >
          {banner}
        </Slide>
      ))}
    </SliderContainer>
  );
};

export default BannerSlider;
