import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const IconButton = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-top: 12px;
    font-weight: bold;
  }
`

const IconLinkButton = styled(IconButton.withComponent('a'))`
  text-decoration-line: none;
  width: 140px;

  @media (max-width: 768px) {
    height: 72px;
    width: 90px;

    .icon {
      font-size: 1.5em;
    }
  }

  @media (max-width: 420px) {
    width: 60px;

    label {
      font-size: 15px;
    }
  }
`

type Props = {
  children: string | (string | React.ReactElement)[]
  icon: IconDefinition
  href?: string
}

export function IconItem(props: Props) {
  const Child = (props: Props) => {
    return (
      <>
        <FontAwesomeIcon icon={props.icon} size="2x" className="icon" />
        <label>{props.children}</label>
      </>
    );
  };
  return (
    <>
      {props.href
       ? <IconLinkButton href={props.href}>{Child(props)}</IconLinkButton>
       : <IconButton>{Child(props)}</IconButton>
      }
    </>
  );
}
