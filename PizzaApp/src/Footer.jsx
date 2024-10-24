function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //   if (hour >= openHour && hour <= closeHour) alert("We're currenty open");
  //   else alert("Closed!");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p className="order">
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 untill {closeHour}:00. Come visit us or
        order online.
      </p>

      <button className="btn">Order</button>
    </div>
  );
}

export default Footer;
