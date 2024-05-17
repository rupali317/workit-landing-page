import { createGlobalStyle } from "styled-components";
import { TABLET_WIDTH, DESKTOP_WIDTH } from "../constants/Breakpoints";

export const BaseStyles = createGlobalStyle`
    :root {
        /* Colors */
        --color-primary-1: hsl(273, 85%, 13%); /* #24053E */
        --color-primary-2: hsl(276, 100%, 99%); /* #FCF8FF */
        --color-secondary-1: hsl(150, 100%, 63%); /* #44FFA1 */
        --color-neutral-1: hsl(271, 12%, 34%); /* 584D62 */
        --color-neutral-2: hsl(0, 0%, 100%); /* #FFFFFF */

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
        --letter-negative-spacing-1: -0.01rem; /* -0.16px */
        --letter-negative-spacing-2: -0.01125rem; /* -0.18px */

        /* Font weights */
        --font-weight-regular: 400;
        --font-weight-semi-bold: 600;
        --font-weight-bold: 700;

        /* Spacing */
        --space-none: 0rem;
        --space-xs-1: 0.3125rem; /* 5px */
        --space-xs-2: 0.5rem; /* 8px */
        --space-xs-3: 0.6875rem; /* 11px */
        --space-xs-4: 0.75rem; /* 12px */
        --space-xs-5: 1rem; /* 16px */
        --space-xs-6: 1.01875rem; /* 16.3px */
        --space-xs-7: 1.0625rem;/* 17px */
        --space-xs-8: 1.125rem;/* 18px */
        --space-xs-9: 0.8125rem; /* 13px */
        --space-s-1: 1.4375rem; /* 23px */
        --space-s-2: 1.46875rem; /* 23.5px */
        --space-s-3: 1.5rem; /* 24px */
        --space-s-4: 1.625rem; /* 26px */
        --space-s-5: 1.75rem; /* 28px */
        --space-s-6: 1.9375rem; /* 31px */
        --space-s-7: 1.96875rem; /* 31.5px */
        --space-base-1: 2rem; /* 32px */
        --space-base-2: 2.3125rem; /* 37px */
        --space-base-3: 2.4375rem; /* 39px */
        --space-base-4: 2.5rem; /* 40px */
        --space-base-5: 3rem; /* 48px */
        --space-base-6: 3.4375rem; /* 55px */
        --space-base-7: 3.5rem; /* 56px */
        --space-base-8: 2.03125rem; /* 32.5px */
        --space-m-1: 3.625rem; /* 58px */
        --space-m-2: 4rem; /* 64px */
        --space-m-3: 4.481875rem; /* 71.71px */
        --space-m-4: 4.625rem; /* 74px */
        --space-m-5: 5rem; /* 80px */
        --space-m-6: 6.266875rem; /* 100.27px */
        --space-m-7: 6.268125rem; /* 100.29px */
        --space-l-1: 6.483125rem; /* 103.73px */
        --space-l-2: 6.875rem; /* 110px */
        --space-l-3: 7.61125rem; /* 121.78px */
        --space-l-4: 9.705625rem; /* 155.29px */
        --space-l-5: 9.794375rem; /* 156.71px */
        --space-l-6: 10.0625rem; /* 161px */
        --space-l-7: 10.3125rem; /* 165px */
        --space-xl-1: 10.334375rem; /* 165.35px */
        --space-xl-2: 10.6875rem; /* 171px */
        --space-xl-3: 12.7025rem; /* 203.24px */
        --space-xl-4: 12.735rem; /* 203.76px */
        --space-xl-5: 15.704375rem; /* 251.27px */
        --space-xl-6: 15.9375rem; /* 255px */
        --space-xl-7: 20.375rem; /* 326px */
        --space-xl-8: 20.518125rem; /* 328.29px */
        --space-xl-9: 17.6875rem;/* 283px */

        /* Border width */
        --border-width-s: 0.0625rem; /* 1px */
        --border-width-m: 0.125rem; /* 2px */
        --border-width-l: 0.1875rem; /* 3px */

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

export const ResetStyles = createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        margin-block-end: 0;
        margin-block-start: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-block-end: 0;
        padding-block-start: 0;
        padding-inline-start: 0;
        padding-inline-end: 0;
    }

    /* Prevent font size inflation */
    html {
        -moz-text-size-adjust: none;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    /* Remove default margin in favour of better control in authored CSS */
    body,
    h1,
    h2,
    p {
        margin-block-end: 0;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /* Set shorter line heights on headings and interactive elements */
    h1,
    h2,
    button {
        line-height: 1.1;
    }

    /* Balance text wrapping on headings */
    h1,
    h2 {
        text-wrap: balance;
    }

    /* Avoid text overflows */
    h1,
    h2,
    p {
        overflow-wrap: break-word;
    }

    /* Remove built-in form typography styles */
    button {
        font: inherit;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img {
        max-width: 100%;
        display: block;
    }
`;

export const DefaultStyles = createGlobalStyle`
    body {
        font-family: "Manrope";
        font-size: var(--font-size-xs-1);
        font-weight: var(--font-weight-regular);
        line-height: var(--line-height-xs-1);
        text-align: center;
        /* padding: var(--space-base-1) var(--space-xs-6) var(--space-m-2) var(--space-xs-5); */
        min-width: 23.4375rem; /* 375px */
        margin: auto;
    }

    h1,
    h2 {
        font-family: "Fraunces";
        font-weight: var(--font-weight-semi-bold);
    }

    a, 
    button {
        font-family: "Manrope";
        font-size: var(--font-size-xs-1);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-xs-2);
        letter-spacing: var(--letter-negative-spacing-1);
    }

    .primary-button {
        color: var(--color-primary-1);
        background-color: var(--color-secondary-1);
        border: var(--border-width-m) solid var(--color-secondary-1);
        padding: var(--space-xs-3) var(--space-s-2) var(--space-xs-4);


        &:hover {
            color: var(--color-secondary-1);
            background-color: transparent;
            cursor: pointer;
        }
    }

    .secondary-button {
        color: var(--color-neutral-2);
        background-color: transparent;
        border: none;
        border-bottom: var(--border-width-l) solid var(--color-secondary-1);
        padding: var(--space-none);

        &:hover {
            color: var(--color-secondary-1);
            cursor: pointer;
        }
    }

    img {
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: ${TABLET_WIDTH}) {
        body {
            text-align: left;
            min-width: 48rem; // 768px
        }
    }

    @media (min-width: ${DESKTOP_WIDTH}) {
        body {
            text-align: center;
            min-width: 80rem; // 1280px
            font-size: var(--font-size-xs-2);
            line-height: var(--line-height-xs-2);
        }

        a,
        button {
            font-size: var(--font-size-xs-2);
            letter-spacing: var(--letter-negative-spacing-2);
        }
    }
`;
