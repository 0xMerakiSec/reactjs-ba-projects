/* eslint-disable react/prop-types */
function Pizza({ pizzaObj }) {
  // console.log();

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={pizzaObj.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : `$${pizzaObj.price}`}</span>
      </div>
    </li>
  );
}

export default Pizza;
