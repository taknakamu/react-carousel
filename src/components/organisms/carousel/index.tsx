import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Color from '../../templates/Color';

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
  }

  .carousel-body {
    width: 100%;
    max-width: 1000px;
    height: 100%;
    transition: all 300ms ease-in-out;
    animation-name: fadeIn;
    animation-duration: 3s;
  }

  @keyframes fadeIn {
    0% {
        opacity:0;
        width:200px;
    }
    100% {
        opacity:1;
        width:400px;
    }
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }

  @media (max-width: 768px) {
    .arrow {
      font-size: 34px;
      margin: 0 24px;
    }
  }
  @media (max-width: 420px) {
    .arrow {
      position: absolute;
      margin: 0;

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
    console.log(index);
    setIndex(index);
  }
  return (
    <CarouselWrapper>
      <FontAwesomeIcon onClick={() => doSlide(index-1, props.children.length)} icon={faChevronCircleLeft} size="3x" className="arrow arrow-left"/>
      <div className="carousel-body">
      {React.Children.map(props.children, (child, i) => {
        return (
          <div key={i} className={i === index ? 'show' : 'hide'}>
            {child}
          </div>
        );
      })}
      </div>
      <FontAwesomeIcon onClick={() => doSlide(index+1, props.children.length)} icon={faChevronCircleRight} size="3x" className="arrow arrow-right"/>
    </CarouselWrapper>
  );
}
