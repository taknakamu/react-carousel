import React, { useState } from 'react';
import styled from 'styled-components';
import Color from '../templates/Color';

type Props = {
  defaultActiveItemIndex?: number
  children: React.ReactElement[];
}

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  align-items: flex-end;

  .inactive a {
    color: #d3d3d3;
    padding-bottom: 18px;
  }

  .active a {
    color: ${Color.PRIMARY};
    border-bottom: 5px solid ${Color.PRIMARY};
    padding-bottom: 13px;

    label {
      color: #333;
    }
  }

  @media (max-width: 768px) {
    .active a {
      height: 67px;
    }
  }
`

export const Menu: React.FC<Props> = props => {
  const [index, setIndex] = useState(props.defaultActiveItemIndex || 0);
  return (
    <Ul>
      {React.Children.map(props.children, (child, i) => {
        return (
          <li onClick={() => setIndex(i)} className={i === index ? 'active' : 'inactive'}>
            {child}
          </li>
        );
      })}
    </Ul>
  );
}
