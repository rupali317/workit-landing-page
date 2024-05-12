import * as IntroductionStyles from "../../styles/Introduction.style";

export const Introduction = () => {
  return (
    <section id="introduction-section">
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
    </section>
  );
};

/* RRC: Should we have the text in a data.json? */
