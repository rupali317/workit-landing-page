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

  h3 {
    color: var(--color-primary-1);
    font-size: var(--font-size-s-3);
    line-height: var(--line-height-s-1);
    margin-top: var(--space-xs-2);
  }

  p {
    color: var(--color-neutral-1);
  }

  div {
    font-family: "Fraunces";
    font-weight: var(--font-weight-semi-bold);
    color: var(--color-primary-1);
    font-size: var(--font-size-s-1);
    line-height: var(--line-height-s-1);
    width: 3rem; /* 48px */
    height: 2.875rem; /* 46px */
    border: var(--border-width-s) solid var(--color-neutral-1);
    border-radius: var(--border-radius-rounded);
    padding: var(--space-xs-1) var(--space-xs-5);
    margin: auto;
  }
`;
