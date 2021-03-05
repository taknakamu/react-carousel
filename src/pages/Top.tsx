import React from 'react';
import { Carousel } from '../components/organisms/carousel';
import { CarouselItem } from '../components/organisms/carousel/Item';
import { ContentsWrapper } from '../components/templates/Default';

export function Top() {
  return (
    <>
      <ContentsWrapper>
        <Carousel defaultActiveItemIndex={1}>
            <CarouselItem id="1" />
            <CarouselItem id="2" />
            <CarouselItem id="3" />
            <CarouselItem id="4" />
            <CarouselItem id="5" />
        </Carousel>
      </ContentsWrapper>
    </>
  );
}
