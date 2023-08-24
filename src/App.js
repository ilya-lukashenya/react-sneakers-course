import logo from './logo.svg';
import './App.css';
import 'macro-css';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo512.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/pngwing.com.png" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/noavatar.png" />

          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кросcовки </h1>


        <div className="d-flex">

        <div className="card">
          <img width={133} height={113} src="/img/sneakers/1.jpg"
          alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blzer</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена: </span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={20} height={20} src="/img/icons8-plus-button-50.png" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={113} src="/img/sneakers/2.jpg"
          alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blzer</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена: </span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={20} height={20} src="/img/icons8-plus-button-50.png" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={113} src="/img/sneakers/3.png"
          alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blzer</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена: </span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={20} height={20} src="/img/icons8-plus-button-50.png" alt="plus" />
            </button>
          </div>
        </div>
        
        
        <div className="card">
          <img width={133} height={113} src="/img/sneakers/4.png"
          alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blzer</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена: </span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={20} height={20} src="/img/icons8-plus-button-50.png" alt="plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={113} src="/img/sneakers/5.png"
          alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blzer</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена: </span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={20} height={20} src="/img/icons8-plus-button-50.png" alt="plus" />
            </button>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
