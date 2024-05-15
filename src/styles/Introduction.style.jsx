import { styled } from "styled-components";
import { TABLET_WIDTH } from "../constants/Breakpoints";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const IntroductionSection = styled.section`
  background-color: var(--color-primary-1);
  padding: var(--space-base-1) var(--space-xs-6) var(--space-l-5)
    var(--space-xs-5);
  text-align: center;

  @media (min-width: ${TABLET_WIDTH}) {
    padding: var(--space-base-1) var(--space-base-4) var(--space-xl-3)
      var(--space-base-3);
  }
`;

export const SpiralDecorationLeft = styled.img`
  display: none;

  @media (min-width: ${TABLET_WIDTH}) {
    display: block;
    position: absolute;
    transform: translate(-79%, 10px);
  }
`;

export const SpiralDecorationRight = styled.img`
  display: none;

  @media (min-width: ${TABLET_WIDTH}) {
    display: block;
    position: absolute;
    right: 0;
    transform: translate(52%, -50%);
  }
`;

export const MainHeading = styled.h1`
  color: var(--color-neutral-2);
  font-size: var(--font-size-m-2);
  line-height: var(--line-height-m-1);
  margin-top: var(--space-m-2);
  text-wrap: initial;
  max-width: 21.4375rem; /* 343px */
  margin-left: auto;
  margin-right: auto;

  u {
    text-decoration: none;
    border-bottom: var(--border-width-l) solid var(--color-secondary-1);
  }

  @media (min-width: ${TABLET_WIDTH}) {
    font-size: var(--font-size-l-2);
    line-height: var(--line-height-l-1);
    margin-top: var(--space-base-7);
    max-width: 35.8125rem; //573px
  }
`;

export const Link = styled.a`
  text-decoration: none;
  min-width: 8.3125rem; /* 133px */
  margin-top: var(--space-base-4);
  display: inline-block;

  @media (min-width: ${TABLET_WIDTH}) {
    margin-top: var(--space-base-3);
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  transform: translate(-50%, 36%);
  left: 50%;

  @media (min-width: ${TABLET_WIDTH}) {
    transform: translate(-50%, 17%);
    width: 32.125rem; // 514px
    height: 18.5rem; // 296px
  }
`;
