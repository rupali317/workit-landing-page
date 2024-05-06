import data from "./data.json";

export const SellingPoint = () => {
  const sellingPoints = data.map((item) => {
    return (
      <li key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </li>
    );
  });

  return (
    <section id="selling-point-section">
      <ol>{sellingPoints}</ol>
    </section>
  );
};

/* RRC: Should we have the text in a data.json? */
