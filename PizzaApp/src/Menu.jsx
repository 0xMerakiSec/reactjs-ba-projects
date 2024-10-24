import Pizza from "./Pizza";
import { pizzaData } from "../public/data";
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>

        {numPizzas > 0 ? (
          <>
            <p>
              Savor Authentic Italian Cuisine: Choose from 6 creative dishes,
              all crafted in our stone oven. Experience the perfect blend of
              organic ingredients and irresistible flavors. Enjoy every
              delicious bite!
            </p>
            <ul className="pizzas">
              {pizzas.map((pizza) => (
                <Pizza
                  // name={pizza.name}
                  // ingredient={pizza.ingredients}
                  // photo={pizza.photoName}
                  pizzaObj={pizza}
                  key={pizza.name}
                />
              ))}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu, Please come back later</p>
        )}

        {/* <Pizza
          name="Pizza Spinaci"
          ingredient="Tomato, mozarella, spinach, and ricotta cheese"
          photo="pizzas/spinaci.jpg"
          price={10.00}
        />
        <Pizza
          name="Pizza Funghi"
          ingredient="Tomato, mozarella, spinach, and ricotta cheese"
          photo="pizzas/funghi.jpg"
          price={7.99}
        /> */}
      </main>
    </>
  );
}

export default Menu;
