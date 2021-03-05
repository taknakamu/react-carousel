import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import Color from '../templates/Color';

const TitleWrapper = styled.div `
  color: ${Color.PRIMARY};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-bottom: 16px;

  .icon {
    font-size: 22px;
  }

  em {
    font-size: 22px;
    font-style: normal;
    font-weight: bold;

    span {
      color: ${Color.DEFAULT}
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }  
`

type Props = {
  icon: IconDefinition,
  children: (string | React.ReactElement)[] | React.ReactElement
}

export const Title: React.FC<Props> = props => {
  return (
    <TitleWrapper>
      <FontAwesomeIcon icon={props.icon} className="icon"/>
      {props.children}
    </TitleWrapper>
  );
}
