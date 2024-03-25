import React, { useEffect, useState } from "react";
import classes from "./FoodPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { getById } from "../../services/foodService";
import StarRating from "../../components/StarRating/StarRating";
import Tags from "../../components/Tags/Tags";
import Price from "../../components/Price/Price";
import { useCart } from "../../hooks/useCart";
import NotFound from "../../components/NotFound/NotFound";
import { useFavorite } from "../../hooks/useFavorite";
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";

export default function FoodPage() {
  const [food, setFood] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToFavorite, removeFromFavorite } = useFavorite();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(food);
    navigate("/cart");
  };

  const handleClickHeart = (id) => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    localStorage.setItem(`isFavorite_${food.id}`, newFavoriteStatus.toString());

    if (!isFavorite) {
      handleAddToFavorite();
    } else {
      removeFromFavorite(id);
    }
  };

  const handleAddToFavorite = () => {
    addToFavorite(food);
  };

  useEffect(() => {
    getById(id).then((food) => {
      setFood(food);
      const favoriteStatus = localStorage.getItem(`isFavorite_${food.id}`);
      setIsFavorite(favoriteStatus === "true");
    });
  }, [id]);

  return (
    <>
      {!food ? (
        <NotFound message="Food not found" linkText="Bakc To Homepage" />
      ) : (
        <div className={classes.container}>
          <img
            className={classes.image}
            src={`${food.imageUrl}`}
            alt={food.name}
          />
          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}>{food.name}</span>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? "" : classes.not
                }`}
                onClick={() => handleClickHeart(food.id)}
              >
                {isFavorite ? <GoHeartFill /> : <GoHeart />}
              </span>
            </div>
            <div className={classes.rating}>
              <StarRating stars={food.stars} size={25} />
            </div>

            <div className={classes.origins}>
              {food.origins?.map((origin) => (
                <span key={origin}>{origin}</span>
              ))}
            </div>

            <div className={classes.tags}>
              {food.tags && (
                <Tags
                  tags={food.tags.map((tag) => ({ name: tag }))}
                  forFoodPage={true}
                />
              )}
            </div>
            <div className={classes.cook_time}>
              <span>
                Time to cook about <strong>{food.cookTime}</strong> minutes
              </span>
            </div>

            <div className={classes.price}>
              <Price price={food.price} />
            </div>
            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      )}
    </>
  );
}
