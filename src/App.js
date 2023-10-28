import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import 'macro-css';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';

import Favorites from './pages/Favorites';
import Home from './pages/Home';


function App() {

  const[items, setItems] = React.useState([]);

  const[cartItems, setCartItems] = React.useState([]);

  const[favorites, setFavorites] = React.useState([]);

  const[searchValue, setSearchValue] = React.useState('');

  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://651dfc1f44e393af2d5a734c.mockapi.io/items').then((res) => {
      setItems(res.data);
    });

    axios.get('https://651dfc1f44e393af2d5a734c.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });

    axios.get('https://653883dba543859d1bb18400.mockapi.io/favorite').then((res) => {
      setFavorites(res.data);
    });
    
    /*fetch('https://651dfc1f44e393af2d5a734c.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      })*/


  }, []);

  const onAddToCart = (obj) => {
    if(favorites.find(item => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://651dfc1f44e393af2d5a734c.mockapi.io/cart/${obj.id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) != Number(obj.id)));
    }
    else {
      axios.post('https://651dfc1f44e393af2d5a734c.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, obj]);
    }
    /**/
  };

  const onAddToFavorite = async (obj) => {
    try {
      if(favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://653883dba543859d1bb18400.mockapi.io/favorite/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id != obj.id));
      }
      else {
        const rep = await axios.post('https://653883dba543859d1bb18400.mockapi.io/favorite', obj);
        setFavorites((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('No');
    }
    
  };


  const onRemoveItem = (id) => {
    axios.delete(`https://651dfc1f44e393af2d5a734c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id != id));
  };

  const onChangeSearchInput = (event) => {
    setCartItems(event.target.value);
  }

  return (
    <div className="wrapper clear">
      
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove ={ onRemoveItem} />}

      


      
      
      <Header onClickCart={() => setCartOpened(true)} />
      

      <Route path="/" exact>
      <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
          />
      </Route>

      <Route path="/favorites">
        <Favorites 
          items={favorites}
          onAddToFavorite = {onAddToFavorite}/>
      </Route>
      
    </div>
  );
}

export default App;
