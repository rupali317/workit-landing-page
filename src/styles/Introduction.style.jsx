import { styled } from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "../constants/Breakpoints";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const IntroductionSection = styled.section`
  background-color: var(--color-primary-1);
  padding: var(--space-base-1) var(--space-xs-6) var(--space-l-5)
    var(--space-xs-5);
  text-align: center;
  position: relative;

  @media (min-width: ${TABLET_WIDTH}) {
    padding: var(--space-base-1) var(--space-base-4) var(--space-xl-3)
      var(--space-base-3);
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    padding: var(--space-base-7) var(--space-l-7) var(--space-xl-7)
      var(--space-xl-1);
  }
`;

export const SpiralDecorationLeft = styled.img`
  display: none;

  @media (min-width: ${TABLET_WIDTH}) {
    display: block;
    position: absolute;
    transform: translate(-79%, 0.625rem);
    width: 21.3125rem; // 341px
    height: 19.8125rem; // 317px
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    transform: translate(-89%, 2rem);
  }
`;

export const SpiralDecorationRight = styled.div`
  display: none;

  @media (min-width: ${TABLET_WIDTH}) {
    display: block;
    position: absolute;
    right: 0;
    background-image: url("/assets/images/bg-pattern-2.svg");
    background-size: cover;
    background-position: 6rem 0;
    bottom: 8rem; // 128px
    background-repeat: no-repeat;
    width: 10.875rem; // 174px
    height: 11.3125rem; // 181px
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    background-position: 3rem 0;
    bottom: 14.9375rem; // 239px
  }
`;

export const MainHeading = styled.h1`
  color: var(--color-neutral-2);
  font-size: var(--font-size-m-2);
  line-height: calc(var(--line-height-m-1) + var(--space-xs-5));
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
    line-height: calc(var(--line-height-l-1) + var(--space-xs-5));
    margin-top: var(--space-base-7);
    max-width: 35.8125rem; //573px
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    font-size: var(--font-size-xl-1);
    line-height: calc(var(--line-height-xl-1) + var(--space-xs-5));
    margin-top: var(--space-base-6);
    max-width: 39.6875rem; //635px
  }
`;

export const Link = styled.a`
  text-decoration: none;
  min-width: 8.3125rem; // 133px
  margin-top: var(--space-base-4);
  display: inline-block;

  @media (min-width: ${TABLET_WIDTH}) {
    margin-top: var(--space-base-3);
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    margin-top: var(--space-base-2);
    padding: var(--space-xs-9) var(--space-s-7) var(--space-xs-5)
      var(--space-base-8);
    min-width: 10.0625rem; // 161px
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  transform: translate(-50%, 34%);
  left: 50%;
  z-index: 2;
  width: 20rem; // 320px
  height: 11.5rem; // 184px

  @media (min-width: ${TABLET_WIDTH}) {
    transform: translate(-50%, 17%);
    width: 32.125rem; // 514px
    height: 18.5rem; // 296px
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    transform: translate(-50%, 23%);
    width: 47.9375rem; // 767px
    height: 27.5625rem; // 441px
  }
`;

export const CurvedEffect = styled.div`
  background-color: var(--color-primary-2);
`;
