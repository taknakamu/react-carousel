import React from 'react';
import styled from 'styled-components';
import Color from './Color';

export const Header = styled.header`
  height: 156px;
  border-bottom: 1px solid #e0e0e0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media (max-width: 420px) {
    height: 130px;
  }
`;

export const ContentsWrapper = styled.div`
  text-align: center;
`;

export const Container = styled.div`
  background-color: #f6f6f6;
  padding: 36px 48px 0;

  @media (max-width: 768px) {
    padding: 20px 24px 0;
  }
  @media (max-width: 420px) {
    padding: 20px 6px 0;
  }
`
;

export const Footer = styled.div`
  height: 120px;
  background-color: ${Color.PRIMARY};
  padding: 30px;
  box-sizing: border-box;

  @media (max-width: 420px) {
    height: 84px;
    padding: 12px;
  }
`;

export const Body = styled.div`
  min-height: calc(100vh - 156px);
`;
