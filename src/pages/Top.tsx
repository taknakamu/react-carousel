import React from 'react';
import { Carousel } from '../components/organisms/carousel';
import { CarouselItem } from '../components/organisms/carousel/Item';
import { Menu } from '../components/molecules/Menu';
import { IconItem } from '../components/atoms/IconItem';
import { ContentsWrapper, Header, Body } from '../components/templates/Default';
import { faCalculator, faEdit, faEnvelopeOpenText, faIdCard, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export function Top() {
  return (
    <>
      <Header>
        <Menu defaultActiveItemIndex={1}>
            <IconItem icon={faLaptopCode} href="#1">経理</IconItem>
            <IconItem icon={faEdit} href="#2">請求書作成</IconItem>
            <IconItem icon={faEnvelopeOpenText} href="#3">経費精算</IconItem>
            <IconItem icon={faCalculator} href="#4">給与計算</IconItem>
            <IconItem icon={faIdCard} href="#5">マイナンバー収集</IconItem>
        </Menu>
      </Header>
      <Body>
        <ContentsWrapper>
          <Carousel defaultActiveItemIndex={1}>
              <CarouselItem id="1" />
              <CarouselItem id="2" />
              <CarouselItem id="3" />
              <CarouselItem id="4" />
              <CarouselItem id="5" />
          </Carousel>
        </ContentsWrapper>
      </Body>
    </>
  );
}
