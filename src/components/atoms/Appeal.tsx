import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import Color from '../templates/Color';

const AppealWrapper = styled.div `
  color: #FFF;

  small {
    font-size: 14px;
    font-weight: normal;
  }

  div {
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  
    em {
      font-size: 36px;
      font-style: normal;
      font-weight: bold;
      margin-right: 10px;
  
      span {
        color: ${Color.DEFAULT};
      }
    }  
  }

  @media (max-width: 420px) {
    div {
      em {
        font-size: 28px;
      }
    }
  }
  @media (max-width: 320px) {
    div {
      em {
        font-size: 1em;
      }
    }
  }
`

type Props = {
  children: (string | React.ReactElement)[]
}

export function Appeal(props: Props) {
  return (
    <AppealWrapper>
      {props.children}
    </AppealWrapper>
  );
}
