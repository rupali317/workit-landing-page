import * as IntroductionStyles from "../../styles/Introduction.style";
// import { CurvedPathEffect } from "../CurvedPathEffect/CurvedPathEffect";

export const Introduction = () => {
  return (
    <IntroductionStyles.IntroductionSection id="introduction-section">
      <IntroductionStyles.Header>
        <a href="#introduction-section">
          <img
            src="/assets/images/logo-light.svg"
            alt="Workit logo"
            title="Workit logo"
            width="95.76"
            height="24.61"
          />
        </a>
        <button className="secondary-button">Apply for access</button>
      </IntroductionStyles.Header>
      <IntroductionStyles.SpiralDecorationLeft
        src="/assets/images/bg-pattern-1.svg"
        alt=""
        role="presentation"
      />
      <IntroductionStyles.MainHeading>
        Data <u>tailored</u> to your needs.
      </IntroductionStyles.MainHeading>
      <IntroductionStyles.Link
        className="primary-button"
        href="#selling-point-section"
      >
        Learn more
      </IntroductionStyles.Link>
      <IntroductionStyles.HeroImage
        src="/assets/images/image-hero.webp"
        alt=""
        role="presentation"
        width="317.91"
        height="176.91"
      />
      <IntroductionStyles.SpiralDecorationRight
        src="/assets/images/bg-pattern-2.svg"
        alt=""
        role="presentation"
      />
      {/* <CurvedPathEffect /> */}
    </IntroductionStyles.IntroductionSection>
  );
};

/* RRC: Should we have the text in a data.json? */
