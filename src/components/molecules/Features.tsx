import React from 'react';
import styled from 'styled-components';
import Color from '../templates/Color';

const FeaturesWrapper = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${Color.PRIMARY};
  padding: 32px;

  label {
    color: ${Color.DEFAULT};
    font-size: 12px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 24px 0;
  }
`

type Props = {
  children: React.ReactElement[];
}

export const Features: React.FC<Props> = props => {
  return (
    <FeaturesWrapper>
      {props.children}
    </FeaturesWrapper>
  );
}
