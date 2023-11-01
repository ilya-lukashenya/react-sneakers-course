import styles from "./Card.module.scss";
import React from "react";
import ContentLoader from "react-content-loader";

import AppContext from "../../context";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  added = false,
  loadding = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);

  const [isAdded, setIsAdded] = React.useState(added);

  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
  };

  const onClickIsFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loadding ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <img
            onClick={onClickIsFavorite}
            width={25}
            height={25}
            src={isFavorite ? "/img/heart.png" : "/img/heart-unlike.png"}
            alt="Unlike"
          />

          <img width={133} height={113} src={imageUrl} alt="Sneakers" />

          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена: </span>
              <b>{price}</b>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              width={20}
              height={20}
              src={isItemAdded(id) ? "/img/plus_green.png" : "/img/plus.png"}
              alt="plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
