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

  img {
    width: 1.25rem; // 20px
    height: 1.25rem; // 20px
  }
`;
