function Status({ items }) {
  const packed = items.filter((item) => item.packed).length;
  const totalItem = items.length;
  return (
    <>
      <footer>
        <h2>Packing Status</h2>
        <p>
          {totalItem === packed
            ? "You are ready to  ✈"
            : `${totalItem - packed} item remaining to be packed`}
        </p>
      </footer>
    </>
  );
}

export default Status;
