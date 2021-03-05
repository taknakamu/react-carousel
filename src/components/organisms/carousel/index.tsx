import { faCalculator, faChevronCircleLeft, faChevronCircleRight, faEdit, faEnvelopeOpenText, faIdCard, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import { IconItem } from '../../atoms/IconItem';
import { Menu } from '../../molecules/Menu';
import Color from '../../templates/Color';

export const Header = styled.header`
  height: 156px;
  border-bottom: 1px solid #e0e0e0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media (max-width: 420px) {
    height: 130px;
  }
`

const CarouselWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  box-sizing: border-box;

  .arrow {
    color: ${Color.PRIMARY};
    margin: 0 42px;
    cursor: pointer;
    z-index: 1;
  }

  .carousel-body {
    width: 100%;
    max-width: 1000px;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    min-width: 320px;

    > div {
      min-width: 100%;
      transition: 0.4s ease-out;
    }
  }

  @media (max-width: 768px) {
    .carousel-body {
      margin: 0 30px;
    }
    
    .arrow {
      font-size: 34px;
      margin: 0 24px;
      position: absolute;

      &-left {
        left: 0;
      }

      &-right {
        right: 0;
      }
    }
  }
`

type Props = {
  children: (string | React.ReactElement)[]
  defaultActiveItemIndex?: number
}

export function Carousel(props: Props) {
  const [index, setIndex] = useState(props.defaultActiveItemIndex || 1);
  const doSlide = (index: number, count: number) => {
    if (index < 0) {
      index = count-1;
    } else if (index >= count) {
      index = 0;
    }
    setIndex(index);
  }
  return (
    <>
      <Header>
        <Menu activeIndex={index}>
          <li onClick={() => setIndex(0)}>
            <IconItem icon={faLaptopCode} href="#1">経理</IconItem>
          </li>
          <li onClick={() => setIndex(1)}>
            <IconItem icon={faEdit} href="#2">請求書作成</IconItem>
          </li>
          <li onClick={() => setIndex(2)}>
            <IconItem icon={faEnvelopeOpenText} href="#3">経費精算</IconItem>
          </li>
          <li onClick={() => setIndex(3)}>
            <IconItem icon={faCalculator} href="#4">給与計算</IconItem>
          </li>
          <li onClick={() => setIndex(4)}>
            <IconItem icon={faIdCard} href="#5">マイナンバー収集</IconItem>
          </li>
        </Menu>
      </Header>
      <CarouselWrapper>
        <FontAwesomeIcon onClick={() => doSlide(index-1, props.children.length)} icon={faChevronCircleLeft} size="3x" className="arrow arrow-left"/>
        <div className="carousel-body">
        {React.Children.map(props.children, (child, i) => {
          return (
            <div key={i} style={{transform: `translateX(calc(-100% * ${index}))`}}>
              {child}
            </div>
          );
        })}
        </div>
        <FontAwesomeIcon onClick={() => doSlide(index+1, props.children.length)} icon={faChevronCircleRight} size="3x" className="arrow arrow-right"/>
      </CarouselWrapper>
    </>
  );
}
