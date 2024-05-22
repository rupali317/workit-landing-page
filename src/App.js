import { AccessInvitation } from "./components/AccessInvitation";
import { Footer } from "./components/Footer/Footer";
import { Introduction } from "./components/Introduction";
import { SellingPoint } from "./components/SellingPoint";
import * as GlobalStyles from "./styles/Global.style";

function App() {
  return (
    <>
      <GlobalStyles.BaseStyles />
      <GlobalStyles.ResetStyles />
      <GlobalStyles.DefaultStyles />
      <Introduction />
      <SellingPoint />
      <AccessInvitation />
      <Footer />
    </>
  );
}

export default App;
