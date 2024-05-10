import { AccessInvitation } from "./components/AccessInvitation";
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
    </>
  );
}

export default App;
