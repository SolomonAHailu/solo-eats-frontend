import React from "react";
import { useFavorite } from "../../hooks/useFavorite";
import Title from "../../components/Title/Title";
import classes from "./FavoritesPage.module.css";
import { Link } from "react-router-dom";
import Price from "../../components/Price/Price";
import NotFound from "../../components/NotFound/NotFound";

export default function FavoritesPage() {
  const { favorite, removeFromFavorite, clearFavorite } = useFavorite();
  return (
    <>
      <Title title="Favorites" margin="1.5rem 0 0 2.5rem" />

      {favorite.items.length === 0 ? (
        <NotFound message="You Have No Favorites" />
      ) : (
        <ul className={classes.list}>
          {favorite.items.map((item) => (
            <li key={item.food.id}>
              <div>
                <img src={`${item.food.imageUrl}`} alt={item.food.name} />
              </div>
              <div>
                <Link to={`/food/${item.food.id}`}>{item.food.name}</Link>
              </div>

              <div>
                <Price price={item.price} />
              </div>
              <div>
                <button
                  className={classes.remove_button}
                  onClick={() => removeFromFavorite(item.food.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
