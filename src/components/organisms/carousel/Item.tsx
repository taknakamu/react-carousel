import { faCloud, faEdit, faEnvelope, faFileInvoice, faUserTie } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { Appeal } from '../../atoms/Appeal';
import { IconItem } from '../../atoms/IconItem';
import { SpeechBalloon } from '../../atoms/SpeechBalloon';
import { Title } from '../../atoms/Title';
import { Features } from '../../molecules/Features';
import { Testimonials, TestimonialsCenter, TestimonialsLeft, TestimonialsRight } from '../../molecules/Testimonials';
import Color from '../../templates/Color';

type Props = {
  id: string
}

export const Container = styled.div`
  background-color: #f6f6f6;
  padding: 36px 48px 0;

  @media (max-width: 1024px) {
    padding: 36px 24px 0;
  }
  @media (max-width: 768px) {
    padding: 20px 24px 0;
  }
  @media (max-width: 420px) {
    padding: 20px 6px 0;
  }
`

export const Footer = styled.div`
  text-align: center;
  height: 120px;
  background-color: ${Color.PRIMARY};
  padding: 30px;
  box-sizing: border-box;

  @media (max-width: 420px) {
    height: 84px;
    padding: 12px;
  }
`;

export function CarouselItem(props: Props) {
  switch (props.id) {
    case "1":
      return (
        <>
          <Container>
            <Title icon={faCloud}>
              <em>クラウド<span>経理</span></em>
            </Title>
            <Testimonials>
              <TestimonialsLeft>
                <SpeechBalloon dataPlacement="left">...</SpeechBalloon>
              </TestimonialsLeft>
              <TestimonialsCenter>
                <IconItem icon={faUserTie}>経理担当者</IconItem>
              </TestimonialsCenter>
              <TestimonialsRight>
                <SpeechBalloon dataPlacement="right">...</SpeechBalloon>
                <SpeechBalloon dataPlacement="right">...</SpeechBalloon>
              </TestimonialsRight>
            </Testimonials>
            <Features>
              <IconItem icon={faFileInvoice}>毎月の請求書は、<br />定期発行で自動生成</IconItem>
              <IconItem icon={faEdit}>自動入力で請求書の<br />作成が簡単に</IconItem>
              <IconItem icon={faEnvelope}>メール送付で請求書の<br />送付コストを削減</IconItem>
            </Features>
          </Container>
          <Footer>
            <Appeal>
              <small>表計算ソフト作成や郵送からの切り替えで</small>
              <div>
                <em>78%のコスト削減</em>
                に成功！
              </div>
            </Appeal>
          </Footer>
        </>
      );
    case "2":
      return (
        <>
          <Container>
            <Title icon={faCloud}>
              <em>クラウド<span>請求書</span></em>が請求書業務を効率化します！
            </Title>
            <Testimonials>
              <TestimonialsLeft>
                <SpeechBalloon dataPlacement="left">毎月の定常作業が手間</SpeechBalloon>
              </TestimonialsLeft>
              <TestimonialsCenter>
                <IconItem icon={faUserTie}>経理担当者</IconItem>
              </TestimonialsCenter>
              <TestimonialsRight>
                <SpeechBalloon dataPlacement="right">請求書の送付コストがかかる</SpeechBalloon>
                <SpeechBalloon dataPlacement="right">請求書作成に時間がかかる</SpeechBalloon>
              </TestimonialsRight>
            </Testimonials>
            <Features>
              <IconItem icon={faFileInvoice}>毎月の請求書は、<br />定期発行で自動生成</IconItem>
              <IconItem icon={faEdit}>自動入力で請求書の<br />作成が簡単に</IconItem>
              <IconItem icon={faEnvelope}>メール送付で請求書の<br />送付コストを削減</IconItem>
            </Features>
          </Container>
          <Footer>
            <Appeal>
              <small>表計算ソフト作成や郵送からの切り替えで</small>
              <div>
                <em>78%のコスト削減</em>
                に成功！
              </div>
            </Appeal>
          </Footer>
        </>
      );
    case "3":
      return (
        <>
          <Container>
            <Title icon={faCloud}>
              <em>クラウド<span>経費精算</span></em>
            </Title>
            <Testimonials>
              <TestimonialsLeft>
                <SpeechBalloon dataPlacement="left">毎月の定常作業が手間</SpeechBalloon>
              </TestimonialsLeft>
              <TestimonialsCenter>
                <IconItem icon={faUserTie}>経理担当者</IconItem>
              </TestimonialsCenter>
              <TestimonialsRight>
                <SpeechBalloon dataPlacement="right">請求書の送付コストがかかる</SpeechBalloon>
                <SpeechBalloon dataPlacement="right">請求書作成に時間がかかる</SpeechBalloon>
              </TestimonialsRight>
            </Testimonials>
            <Features>
              <IconItem icon={faFileInvoice}>毎月の請求書は、<br />定期発行で自動生成</IconItem>
              <IconItem icon={faEdit}>自動入力で請求書の<br />作成が簡単に</IconItem>
              <IconItem icon={faEnvelope}>メール送付で請求書の<br />送付コストを削減</IconItem>
            </Features>
          </Container>
          <Footer>
            <Appeal>
              <small>表計算ソフト作成や郵送からの切り替えで</small>
              <div>
                <em>78%のコスト削減</em>
                に成功！
              </div>
            </Appeal>
          </Footer>
        </>
      );
    case "4":
      return (
        <>
          <Container>
            <Title icon={faCloud}>
              <em>クラウド<span>給与計算</span></em>
            </Title>
            <Testimonials>
              <TestimonialsLeft>
                <SpeechBalloon dataPlacement="left">毎月の定常作業が手間</SpeechBalloon>
              </TestimonialsLeft>
              <TestimonialsCenter>
                <IconItem icon={faUserTie}>経理担当者</IconItem>
              </TestimonialsCenter>
              <TestimonialsRight>
                <SpeechBalloon dataPlacement="right">請求書の送付コストがかかる</SpeechBalloon>
                <SpeechBalloon dataPlacement="right">請求書作成に時間がかかる</SpeechBalloon>
              </TestimonialsRight>
            </Testimonials>
            <Features>
              <IconItem icon={faFileInvoice}>毎月の請求書は、<br />定期発行で自動生成</IconItem>
              <IconItem icon={faEdit}>自動入力で請求書の<br />作成が簡単に</IconItem>
              <IconItem icon={faEnvelope}>メール送付で請求書の<br />送付コストを削減</IconItem>
            </Features>
          </Container>
          <Footer>
            <Appeal>
              <small>表計算ソフト作成や郵送からの切り替えで</small>
              <div>
                <em>78%のコスト削減</em>
                に成功！
              </div>
            </Appeal>
          </Footer>
        </>
      );
    case "5":
      return (
        <>
          <Container>
            <Title icon={faCloud}>
              <em>クラウド<span>マイナンバー収集</span></em>
            </Title>
            <Testimonials>
              <TestimonialsLeft>
                <SpeechBalloon dataPlacement="left">毎月の定常作業が手間</SpeechBalloon>
              </TestimonialsLeft>
              <TestimonialsCenter>
                <IconItem icon={faUserTie}>経理担当者</IconItem>
              </TestimonialsCenter>
              <TestimonialsRight>
                <SpeechBalloon dataPlacement="right">請求書の送付コストがかかる</SpeechBalloon>
                <SpeechBalloon dataPlacement="right">請求書作成に時間がかかる</SpeechBalloon>
              </TestimonialsRight>
            </Testimonials>
            <Features>
              <IconItem icon={faFileInvoice}>毎月の請求書は、<br />定期発行で自動生成</IconItem>
              <IconItem icon={faEdit}>自動入力で請求書の<br />作成が簡単に</IconItem>
              <IconItem icon={faEnvelope}>メール送付で請求書の<br />送付コストを削減</IconItem>
            </Features>
          </Container>
          <Footer>
            <Appeal>
              <small>表計算ソフト作成や郵送からの切り替えで</small>
              <div>
                <em>78%のコスト削減</em>
                に成功！
              </div>
            </Appeal>
          </Footer>
        </>
      );
    default:
      return (
        <>default</>
      )
  }
}
