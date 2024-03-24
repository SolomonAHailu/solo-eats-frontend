import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import classes from "./header.module.css";
import { useAuth } from "../../hooks/useAuth";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  const { user, logout } = useAuth();

  const { cart } = useCart();

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

            <li>
              <Link to="/cart">
                <FaCartShopping size={25} />
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <hr className={classes.hr} /> */}
    </header>
  );
}
