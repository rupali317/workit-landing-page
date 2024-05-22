import * as FooterStyles from "../../styles/Footer.style";
import data from "./data.json";

export const Footer = () => {
  const SocialMediaList = data.map((item) => {
    return (
      <FooterStyles.SocialMediaLink
        key={item.id}
        href={item.link}
        target="_blank"
        rel="noreferrer"
      >
        <img src={item.image} alt={item.id} />
      </FooterStyles.SocialMediaLink>
    );
  });

  return (
    <footer>
      <a href="#introduction-section">
        <img
          className="workit-logo"
          src="/assets/images/logo-dark.svg"
          alt="Workit logo"
          aria-label="Workit logo - Footer"
          width="95.76"
          height="24.61"
        />
      </a>
      <FooterStyles.SocialMediaSection>
        {SocialMediaList}
      </FooterStyles.SocialMediaSection>
    </footer>
  );
};
