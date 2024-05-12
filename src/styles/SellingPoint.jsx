import { styled } from "styled-components";

export const OrderedList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: var(--space-base-4);
  list-style-type: decimal;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs-5);

  h2 {
    color: var(--color-primary-1);
    font-size: var(--font-size-s-3);
    line-height: var(--line-height-s-1);
  }

  p {
    color: var(--color-neutral-1);
  }

  &::before {
  }
`;
