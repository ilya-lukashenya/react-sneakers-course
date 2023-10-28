import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../hooks/useCart';

function Header(props) {
  //const { totalPrice } = useCart();
  
    return(
        <header className="d-flex justify-between align-center p-40">
          <Link to = "/">
        <div className="d-flex align-center">
          
          <img width={40} height={40} src="/img/logo512.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
            
          </div>
          
          
        </div>
        </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={18} height={18} src="/img/pngwing.com.png" />
            <span>1205 руб.</span>
          </li>

          <li className="mr-20 cu-p">
            <Link to="/favorites">
              <img width={18} height={18} src="/img/heart-unlike.png" />
            </Link>
          </li>

          
          <li>
            <img width={18} height={18} src="/img/noavatar.png" />

          </li>
        </ul>
      </header>
    );
}

export default Header;