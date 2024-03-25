import React from "react";
import classes from "./Thumbnails.module.css";
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import Price from "../Price/Price";
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { FcAlarmClock } from "react-icons/fc";

export default function Thumbnails({ foods }) {
  const isFavorite = (foodId) => {
    const favoriteStatus = localStorage.getItem(`isFavorite_${foodId}`);
    return favoriteStatus === "true";
  };

  return (
    <ul className={classes.list}>
      {foods.map((food) => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img
              className={classes.image}
              src={`${food.imageUrl}`}
              alt={food.name}
            />
            <div className={classes.content}>
              <div className={classes.name}>{food.name}</div>
              <span className={classes.favorite}>
                {isFavorite(food.id) ? <GoHeartFill /> : <GoHeart />}
              </span>

              <div className={classes.stars}>
                <StarRating stars={food.stars} />
              </div>
              <div className={classes.product_item_footer}>
                <div className={classes.origins}>
                  {food.origins.map((origin) => (
                    <span key={origin}>{origin}</span>
                  ))}
                </div>
                <div className={classes.cook_time}>
                  <span>
                    <FcAlarmClock size={20} />
                  </span>

                  {food.cookTime}
                </div>
              </div>
              <div className={classes.price}>
                <Price price={food.price} />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
