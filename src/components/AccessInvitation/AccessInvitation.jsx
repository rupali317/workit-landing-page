import data from "./data.json";
import * as AccessInvitationStyles from "../../styles/AccessInvitation.style";
import React from "react";

export const AccessInvitation = () => {
  const SocialMediaList = data.map((item) => {
    return (
      <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
        <img src={item.image} alt={item.id} title={item.id} />
      </a>
    );
  });

  const DESKTOP_WIDTH_INTEGER = 80;
  const BREAKPOINT =
    DESKTOP_WIDTH_INTEGER *
    parseFloat(
      window.getComputedStyle(document.querySelector("html")).fontSize
    );
  const [windowInnerWidth, setWindowInnerWidth] = React.useState(
    window.innerWidth
  );
  const [breakpoint, setBreakpoint] = React.useState(BREAKPOINT);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      // console.log("resized");
      // console.log(window.innerWidth);
      // console.log(ROOT_FONT_SIZE);
      setWindowInnerWidth(window.innerWidth);
      setBreakpoint(BREAKPOINT);
    });
  }, [windowInnerWidth, BREAKPOINT]);

  // React.useEffect(() => {
  //   const targetElement = document.querySelector("html");
  //   const observer = new MutationObserver(() => {
  //     if (DESKTOP_WIDTH_INTEGER * parseFloat(window.getComputedStyle(targetElement).fontSize) !== ROOT_FONT_SIZE) {
  //       setWindowDesktopWidth(ROOT_FONT_SIZE);
  //     }
  //   });
  //   observer.observe(targetElement, {attributes:true, attributeFilter:["style"]});
  // }, [ROOT_FONT_SIZE]);

  return (
    <section>
      <img
        src="/assets/images/image-founder.webp"
        alt="Workit's founder"
        title="Workit's founder"
        width={
          windowInnerWidth > breakpoint 
            ? "477"
            : "281"
        }
        height={
          windowInnerWidth > breakpoint 
            ? "477"
            : "281"
        }
      />
      <section>
        <h2>Be the first to test</h2>
        <p>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <button>Apply for access</button>
      </section>
      <a href="#introduction-section">
        <img
          src="/assets/images/logo-dark.svg"
          alt="Workit logo"
          title="Workit logo"
          width="95.76"
          height="24.61"
        />
      </a>
      <AccessInvitationStyles.SocialMediaSection>
        {SocialMediaList}
      </AccessInvitationStyles.SocialMediaSection>
    </section>
  );
};
