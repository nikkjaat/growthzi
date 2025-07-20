import React from "react";
import styles from "./Footer.module.css";
import { Twitter, Facebook, Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.column}>
          <div className={styles.logo}>
            <div className={styles.icon}></div>
            <div className={styles.brandText}>
              <h2>IMPERIAL</h2>
              <p>GRAND HOTEL</p>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.linkHeading}>USEFUL LINKS</h4>
          <ul className={styles.links}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICE</li>
            <li>ROOM</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.linkHeading}>SUBSCRIBE</h4>
          <p className={styles.subscribeText}>
            Don't miss to subscribe our news, kindly fill the form below
          </p>
          <div className={styles.subscribeForm}>
            <input type="text" placeholder="Your Email Here" />
            <button>
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.divider}>
        <hr className={styles.divider} />
        <div className={styles.socials}>
          <Twitter size={16} />
          <Facebook size={16} />
          <Instagram size={16} />
        </div>
        <hr className={styles.divider} />
      </div>

      <div className={styles.bottomSection}>
        <p>© 2025 Imperial Grand Hotel. All Rights Reserved.</p>

        <div className={styles.policy}>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
      </div>
    </footer>
  );
}
