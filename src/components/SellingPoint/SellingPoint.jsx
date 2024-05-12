import data from "./data.json";
import * as SellingPointStyles from "../../styles/SellingPoint";
import { CurvedPathEffect } from "../CurvedPathEffect/CurvedPathEffect";

export const SellingPoint = () => {
  const sellingPoints = data.map((item) => {
    return (
      <SellingPointStyles.List key={item.id}>
        <div aria-label={`Number ${item.id}`}>{item.id}</div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </SellingPointStyles.List>
    );
  });

  return (
    <section id="selling-point-section">
      <SellingPointStyles.OrderedList>
        {sellingPoints}
      </SellingPointStyles.OrderedList>
      <CurvedPathEffect />
    </section>
  );
};
