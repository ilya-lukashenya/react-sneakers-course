import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "macro-css";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import AppContext from "./context";

import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  const [items, setItems] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);

  const [favorites, setFavorites] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState("");

  const [cartOpened, setCartOpened] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get(
        "https://651dfc1f44e393af2d5a734c.mockapi.io/cart"
      );
      const favoriteResponse = await axios.get(
        "https://653883dba543859d1bb18400.mockapi.io/favorite"
      );
      const itemsResponse = await axios.get(
        "https://651dfc1f44e393af2d5a734c.mockapi.io/items"
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoriteResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (favorites.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://651dfc1f44e393af2d5a734c.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) != Number(obj.id))
      );
    } else {
      axios.post("https://651dfc1f44e393af2d5a734c.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
    /**/
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://653883dba543859d1bb18400.mockapi.io/favorite/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id != obj.id));
      } else {
        const rep = await axios.post(
          "https://653883dba543859d1bb18400.mockapi.io/favorite",
          obj
        );
        setFavorites((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("No");
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://651dfc1f44e393af2d5a734c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id != id));
  };

  const onChangeSearchInput = (event) => {
    setCartItems(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        onAddToFavorite,
        isItemAdded,
      }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )}

        <Header onClickCart={() => setCartOpened(true)} />
        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>

          <Route path="/" exact>
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          </Route>
        </Switch>
      </div>
    </AppContext.Provider>
  );
}

export default App;
