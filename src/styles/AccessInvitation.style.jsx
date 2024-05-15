import { styled } from "styled-components";
import { TABLET_WIDTH } from "../constants/Breakpoints";

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
    margin-bottom: var(--space-m-5);
    position: relative;

    button {
      margin-top: var(--space-none);
      margin-left: initial;
    }

    h2 {
      font-size: var(--font-size-m-1);
      line-height: var(--line-height-m-2);
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
`;

export const FounderImage = styled.img`
  position: absolute;
  transform: translate(-50%, -82%);
  left: 50%;
  z-index: -1;

  @media (min-width: ${TABLET_WIDTH}) {
    transform: translate(0rem, -50%);
    left: initial;
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
`;
