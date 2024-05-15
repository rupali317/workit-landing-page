import { styled } from "styled-components";
import { TABLET_WIDTH } from "../constants/Breakpoints";

export const OrderedList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: var(--space-base-4);
  list-style-type: decimal;

  @media (min-width: ${TABLET_WIDTH}) {
    max-width: 35.8125rem; //573px
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SellingPointSection = styled.section`
  background-color: var(--color-primary-2);
  padding: var(--space-l-4) var(--space-xs-6) var(--space-m-3) var(--space-xs-5);

  @media (min-width: ${TABLET_WIDTH}) {
    padding: var(--space-xl-4) var(--space-base-4) var(--space-l-1)
      var(--space-base-3);
  }
`;

export const List = styled.li`
  display: grid;
  grid-template-areas:
    "number"
    "title"
    "description";
  gap: var(--space-xs-5);

  h3 {
    color: var(--color-primary-1);
    font-size: var(--font-size-s-3);
    line-height: var(--line-height-s-1);
    margin-top: var(--space-xs-2);
    grid-area: title;
  }

  p {
    color: var(--color-neutral-1);
    grid-area: description;
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
    grid-area: number;
  }

  @media (min-width: ${TABLET_WIDTH}) {
    gap: var(--space-base-5);
    grid-template-areas:
      "number title"
      "number description";
    grid-column-gap: var(--space-base-1);
    grid-row-gap: var(--space-xs-5);

    div {
      text-align: center;
    }
  }
`;
