import React from 'react';
import styled from 'styled-components';
import Color from '../templates/Color';

const TestimonialsWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  padding: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`
export const TestimonialsCenter = styled.div `
  width: 200px;
  color: ${Color.PRIMARY};
  font-size: 14px;
  font-weight: bold;

  svg {
    font-size: 84px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const TestimonialsLeft = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`
export const TestimonialsRight = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  div:nth-child(2) {
    margin-top: 15px;

    &.right:before {
      top: 4px;
      transform: rotate(18deg);
    }
  }

  @media (max-width: 768px) {
    .right {
      height: 34px;

      &:before {
        display: none;
      }
    }
  }
`

type Props = {
  children: React.ReactElement[];
}

export const Testimonials: React.FC<Props> = props => {
  return (
    <TestimonialsWrapper>
      {props.children}
    </TestimonialsWrapper>
  );
}
