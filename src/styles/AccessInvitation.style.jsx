import { styled } from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "../constants/Breakpoints";

export const SocialMediaSection = styled.section`
  display: flex;
  gap: var(--space-s-5);
  align-items: center;
  justify-content: center;
  margin-top: var(--space-m-1);
`;

export const SocialMediaLink = styled.a`
  &:hover {
    filter: brightness(0) saturate(100%) invert(3%) sepia(90%) saturate(4030%)
      hue-rotate(261deg) brightness(102%) contrast(102%);
  }
`;

export const InvitationCard = styled.section`
  color: var(--color-neutral-2);
  background-color: var(--color-primary-1);
  padding: var(--space-base-1) var(--space-s-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs-5);
  margin-bottom: var(--space-m-4);

  button {
    margin-top: var(--space-xs-2);
    margin-left: auto;
    margin-right: auto;
    min-width: 10.75rem; /* 172px */
  }

  h2 {
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
  }

  @media (min-width: ${TABLET_WIDTH}) {
    gap: var(--space-s-3);
    max-width: 32.125rem; // 514px
    margin-left: auto;
    margin-right: auto;
    transform: translateX(2.9375rem); // 47px
    margin-bottom: var(--space-m-5);
    position: relative;
    padding: var(--space-base-5) var(--space-base-7) var(--space-base-7)
      var(--space-base-7);

    button {
      margin-top: var(--space-none);
      margin-left: initial;
    }

    h2 {
      font-size: var(--font-size-m-1);
      line-height: var(--line-height-m-2);
      transform: translateX(0.03125rem);
    }
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    max-width: 45.625rem; // 730px
    text-align: left;
    padding: var(--space-m-2);
    gap: var(--space-base-1);
    margin-bottom: var(--space-l-3);
    transform: translateX(6.5rem); // 104px

    h2 {
      font-size: var(--font-size-l-1);
      line-height: var(--line-height-l-2);
      transform: translateX(0.0625rem);
    }
  }
`;

export const SpiralDecoration = styled.img`
  display: none;

  @media (min-width: ${TABLET_WIDTH}) {
    position: absolute;
    bottom: 0;
    transform: translate(100%, 50%);
    display: block;
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    transform: translate(170%, 31%);
  }
`;

export const FounderImage = styled.img`
  position: absolute;
  transform: translate(-50%, -82%);
  left: 50%;
  z-index: -1;

  @media (min-width: ${TABLET_WIDTH}) {
    transform: translate(-135%, -50%);
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    width: 29.8125rem; // 477px
    height: 29.8125rem; // 477px
    transform: translate(-135%, -36%);
  }
`;

export const AccessInvitationSection = styled.section`
  position: relative;
  padding: var(--space-xl-8) var(--space-xs-6) var(--space-m-2)
    var(--space-xs-5);
  /* background-color: var(--color-neutral-2); */ /* RRC: Check why white color is replacing the image */

  @media (min-width: ${TABLET_WIDTH}) {
    padding: var(--space-xl-5) var(--space-base-4) var(--space-m-5)
      var(--space-base-3);
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    padding: var(--space-xl-9) var(--space-l-7) var(--space-l-2)
      var(--space-xl-1);
  }
`;
