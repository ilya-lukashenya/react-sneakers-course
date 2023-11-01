import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../hooks/useCart";

function Drawer({ onClose, items = [], onRemove }) {
  const { totalPrice } = useCart();

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mt-20 mb-20 ml-15 justify-between d-flex cu-p">
          Корзина{" "}
          <img onClick={onClose} width={30} height={30} src="/img/cross.png" />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div key={obj.id} className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mp-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>

              <img
                onClick={() => onRemove(obj.id)}
                className="removeBtn"
                width={20}
                height={20}
                src="/img/cross.png"
                alt="Remove"
              />
            </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>{totalPrice} руб.</b>
            </li>

            <il className="d-flex">
              <span>Налог: 5%</span>
              <div></div>
              <b>{(totalPrice / 100) * 5} руб.</b>
            </il>
          </ul>
          <button className="greenButton align-center">
            Оформить заказ
            <img width={20} height={20} src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
