import data from "./data.json";
import * as AccessInvitationStyles from "../../styles/AccessInvitation.style";
import React from "react";

export const AccessInvitation = () => {
  const SocialMediaList = data.map((item) => {
    return (
      <AccessInvitationStyles.SocialMediaLink
        key={item.id}
        href={item.link}
        target="_blank"
        rel="noreferrer"
      >
        <img src={item.image} alt={item.id} />
      </AccessInvitationStyles.SocialMediaLink>
    );
  });

  return (
    <AccessInvitationStyles.AccessInvitationSection>
      <AccessInvitationStyles.FounderImage
        src="/assets/images/image-founder.webp"
        alt="Workit's founder"
        width="281"
        height="281"
      />
      <AccessInvitationStyles.InvitationCard>
        <h2>Be the first to test</h2>
        <p>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <button className="primary-button">Apply for access</button>
        <AccessInvitationStyles.SpiralDecoration
          src="/assets/images/bg-pattern-3.svg"
          alt=""
          role="presentation"
        />
      </AccessInvitationStyles.InvitationCard>
      <a href="#introduction-section">
        <img
          className="workit-logo"
          src="/assets/images/logo-dark.svg"
          alt="Workit logo"
          width="95.76"
          height="24.61"
        />
      </a>
      <AccessInvitationStyles.SocialMediaSection>
        {SocialMediaList}
      </AccessInvitationStyles.SocialMediaSection>
    </AccessInvitationStyles.AccessInvitationSection>
  );
};
