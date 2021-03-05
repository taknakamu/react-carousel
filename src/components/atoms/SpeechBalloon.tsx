import React from 'react';
import styled from 'styled-components';
import Color from '../templates/Color';

const SpeechBalloonWrapper = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Color.PRIMARY};
  width: 182px;
  height: 60px;
  display: flex;
  border-radius: 20px;
  padding: 0 20px;
  font-size: 14px;
  color: #FFF;
  font-weight: bold;

  &.left:before {
    content: "";
    position: absolute;
    top: 18px;
    right: -28px;
    border: 15px solid transparent;
    border-left: 24px solid ${Color.PRIMARY};
    transform: rotate(12deg);
  }

  &.right:before {
    content: "";
    position: absolute;
    top: 18px;
    left: -28px;
    border: 15px solid transparent;
    border-right: 24px solid ${Color.PRIMARY};
    transform: rotate(-15deg);
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 0 18px;
    width: 100px;
  }
`

type Props = {
  dataPlacement: "left" | "right"
  children: string
}

export const SpeechBalloon: React.FC<Props> = props => {
  return (
    <SpeechBalloonWrapper className={props.dataPlacement}>
      {props.children}
    </SpeechBalloonWrapper>
  );
}
