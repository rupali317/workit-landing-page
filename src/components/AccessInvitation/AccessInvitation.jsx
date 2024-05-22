import * as AccessInvitationStyles from "../../styles/AccessInvitation.style";
import React from "react";

export const AccessInvitation = () => {
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
    </AccessInvitationStyles.AccessInvitationSection>
  );
};
