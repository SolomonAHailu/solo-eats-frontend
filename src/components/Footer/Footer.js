import React from "react";
import classes from "./Footer.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.footer_col}>
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className={classes.footer_col}>
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div className={classes.footer_col}>
            <h4>online shop</h4>
            <ul>
              <li>
                <a href="#">watch</a>
              </li>
              <li>
                <a href="#">bag</a>
              </li>
              <li>
                <a href="#">shoes</a>
              </li>
              <li>
                <a href="#">dress</a>
              </li>
            </ul>
          </div>
          <div className={classes.footer_col}>
            <h4>follow us</h4>
            <div className={classes.social_links}>
              <a href="#">
                <FaFacebookF size={20} />
              </a>
              <a href="#">
                <FaXTwitter size={20} />
              </a>
              <a href="#">
                <FaInstagram size={20} />
              </a>
              <a href="#">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className={classes.hr} />
      <p className={classes.copyright}>
        &copy; 2017 - {new Date().getFullYear()} SoloEats. All rights reserved.
      </p>
    </div>
  );
}
