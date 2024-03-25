import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import classes from "./header.module.css";
import { useAuth } from "../../hooks/useAuth";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useFavorite } from "../../hooks/useFavorite";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const { favorite } = useFavorite();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          SoloEats
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                {user.isAdmin ? (
                  <Link to="/dashboard" className={classes.user}>
                    <FaRegCircleUser size={25} />
                  </Link>
                ) : (
                  <Link to="/profile" className={classes.user}>
                    <FaRegCircleUser size={25} />
                  </Link>
                )}
                <div className={classes.menu}>
                  <Link to="/profile" className={classes.each}>
                    Profile
                  </Link>
                  <Link to="/orders" className={classes.each}>
                    Orders
                  </Link>
                  <a onClick={logout} className={classes.each}>
                    Logout
                  </a>
                </div>
              </li>
            ) : (
              <Link to="/login">Login</Link>
            )}

            <li className={classes.parent}>
              <Link to="/favorites">
                <FaRegHeart size={25} />
                {favorite.totalCount > 0 && (
                  <span className={classes.favorite_count}>
                    {favorite.totalCount}
                  </span>
                )}
              </Link>
              <Link to="/cart">
                <FiShoppingCart size={25} />
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
