import { createGlobalStyle } from "styled-components";

export const BaseStyles = createGlobalStyle`
    :root {
        /* Colors */
        --color-primary-1: hsl(273, 85%, 13%);
        --color-primary-2: hsl(276, 100%, 99%);
        --color-secondary-1: hsl(150, 100%, 63%);
        --color-neutral-1: hsl(271, 12%, 34%);
        --color-neutral-2: hsl(0, 0%, 100%);

        /* Typography - font size, line-height, font-weight */
        --font-size-xs-1: 1rem; /* 16px */
        --font-size-xs-2: 1.125rem; /* 18px */
        --font-size-s-1: 1.25rem; /* 20px */
        --font-size-s-2: 1.5rem; /* 24px */
        --font-size-s-3: 1.75rem; /* 28px */
        --font-size-base: 2rem; /* 32px */
        --font-size-m-1: 3rem; /* 48px */
        --font-size-m-2: 3.125rem; /* 50px */
        --font-size-l-1: 3.5rem; /* 56px */
        --font-size-l-2: 3.75rem; /* 60px */
        --font-size-xl-1: 5rem; /* 80px */
        
        /* Line heights */

        --font-weight-regular: 400;
        --font-weight-semi-bold: 600;
        --font-weight-bold: 700;

        /* Spacing */

        /* Border - Border radius, border width */
        --border-width-s: 0.0625rem; /* 1px */
    }
`;

export const ResetStyles = createGlobalStyle``;

export const DefaultStyles = createGlobalStyle``;
