import React, { useEffect, useState } from "react";

const Carts = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((data) => (ans += data.amount * data.ticketPrice));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((data) => data.id !== id);
    setCart(arr);
    handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((data) => (
        <div className="cart_box" key={data.id}>
          {<img src={data.image} width={100} alt={data.title} />}
          {<p>{data.title}</p>}

          <div className="abc">
            <button className="button" onClick={() => handleChange(data, -1)}>
              -
            </button>
            <button className="button">{data.amount}</button>
            <button className="button" onClick={() => handleChange(data, +1)}>
              +
            </button>
          </div>
          <div>
            <span>{data.ticketPrice}</span>
            <button className="button" onClick={() => handleRemove(data.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div>
        <span>Total price of your Cart</span>
        <span>Rs = {price} /-</span>
      </div>
    </article>
  );
};

export default Carts;
