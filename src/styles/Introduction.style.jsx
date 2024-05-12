import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const MainHeading = styled.h1`
  color: var(--color-neutral-2);
  font-size: var(--font-size-m-2);
  line-height: var(--line-height-m-1);
  margin-top: var(--space-m-2);
  text-wrap: initial;

  u {
    text-decoration: none;
    border-bottom: var(--border-width-l) solid var(--color-secondary-1);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  min-width: 8.3125rem; /* 133px */
  margin-top: var(--space-base-4);
  display: inline-block;
`;

export const HeroImage = styled.img`
  position: absolute;
  transform: translate(1.25rem, 4.2rem); /* 20px, 67.2px */
`;
