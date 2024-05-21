import data from "./data.json";
import * as SellingPointStyles from "../../styles/SellingPoint.style";

export const SellingPoint = () => {
  const sellingPoints = data.map((item) => {
    return (
      <SellingPointStyles.List key={item.id}>
        <div>{item.id}</div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </SellingPointStyles.List>
    );
  });

  return (
    <SellingPointStyles.SellingPointSection id="selling-point-section">
      <h2 className="visually-hidden">Benefits of workit</h2>
      <SellingPointStyles.OrderedList>
        {sellingPoints}
      </SellingPointStyles.OrderedList>
      <SellingPointStyles.CurvedEffect className="curved-effect"></SellingPointStyles.CurvedEffect>
    </SellingPointStyles.SellingPointSection>
  );
};
