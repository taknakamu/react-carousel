import React, { useState } from 'react';
import styled from 'styled-components';
import Color from '../templates/Color';

type Props = {
  activeIndex?: number
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
`

export const Menu: React.FC<Props> = props => {
  return (
    <Ul>
      {React.Children.map(props.children, (child, i) => {
        return (
          <div className={i === props.activeIndex ? 'active' : 'inactive'}>
            {child}
          </div>
        );
      })}
    </Ul>
  );
}
