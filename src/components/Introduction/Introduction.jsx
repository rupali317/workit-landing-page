import * as IntroductionStyles from "../../styles/Introduction.style";

export const Introduction = () => {
  return (
    <IntroductionStyles.IntroductionSection id="introduction-section">
      <IntroductionStyles.Header>
        <a href="#introduction-section">
          <img
            className="workit-logo"
            src="/assets/images/logo-light.svg"
            alt="Workit logo"
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
        Data <em>tailored</em> to your needs.
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
        width="320"
        height="184"
      />
      <IntroductionStyles.SpiralDecorationRight role="presentation" />
      <IntroductionStyles.CurvedEffect className="curved-effect"></IntroductionStyles.CurvedEffect>
    </IntroductionStyles.IntroductionSection>
  );
};
