import { styled } from "styled-components";

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
`;

export const FounderImage = styled.img`
  position: relative;
  transform: translateY(52px);
  z-index: -1;
`;

export const AccessInvitationSection = styled.section`
  padding: var(--space-m-7) var(--space-xs-6) var(--space-m-3) var(--space-xs-5);
  /* background-color: var(--color-neutral-2); */ /* RRC: Check why white color is replacing the image */
`;
