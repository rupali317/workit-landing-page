import { createGlobalStyle } from "styled-components";

export const BaseStyles = createGlobalStyle`
    :root {
        /* Colors */
        --color-primary-1: hsl(273, 85%, 13%);
        --color-primary-2: hsl(276, 100%, 99%);
        --color-secondary-1: hsl(150, 100%, 63%);
        --color-neutral-1: hsl(271, 12%, 34%);
        --color-neutral-2: hsl(0, 0%, 100%);

        /* Font sizes */
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
        --line-height-xs-1: 1.75rem; /* 28px */
        --line-height-xs-2: 2rem; /* 32px */
        --line-height-s-1: 2.25rem; /* 36px */
        --line-height-s-2: 2.5rem; /* 40px */
        --line-height-base: 3rem; /* 48px */
        --line-height-m-1: 3.125rem; /* 50px */
        --line-height-m-2: 3.5rem; /* 56px */
        --line-height-l-1: 3.75rem; /* 60px */
        --line-height-l-2: 4rem; /* 64px */
        --line-height-xl-1: 5rem; /* 80px */

        /* Letter spacings */
        --letter-negative-spacing-1: -0.01rem;/* -0.16px */
        --letter-negative-spacing-2: -0.01125rem;/* -0.18px */

        /* Font weights */
        --font-weight-regular: 400;
        --font-weight-semi-bold: 600;
        --font-weight-bold: 700;

        /* Spacing */
        /* 5px, 11px, 12px, 16px, 16.3px, 23px, 23.5px, 24px, 28px, 31px, 32px, 40px, 58px, 64px, 71.71px, 74px, 100.29px, 156.71px */

        /* Border width */
        --border-width-s: 0.0625rem; /* 1px */
        --border-width-m: 0.1875rem; /* 3px */

        /* Border radius */
        --border-radius-none: 0rem;
        --border-radius-rounded: 1.90625rem;/* 30.5px */
    }

    @font-face {
        font-family: "Manrope";
        src: url("/assets/fonts/manrope/static/Manrope-Regular.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Manrope";
        src: url("/assets/fonts/manrope/static/Manrope-Bold.ttf") format("truetype");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Fraunces";
        src: url("/assets/fonts/fraunces/static/Fraunces_144pt-SemiBold.ttf") format("truetype");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
`;

export const ResetStyles = createGlobalStyle``;

export const DefaultStyles = createGlobalStyle``;
