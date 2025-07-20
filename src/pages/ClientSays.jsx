import React from "react";
import styles from "./ClientSays.module.css";
import { Star } from "lucide-react"; // optional: use any star icon or emoji

export default function ClientSays() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <hr className={styles.hr} />
        <p className={styles.subheading}>OUR CUSTOMER REVIEW</p>
        <h1 className={styles.heading}>What Our Client Says</h1>
      </div>

      <div className={styles.card}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#fbbf24" stroke="#fbbf24" />
            ))}
          </div>
          <p className={styles.reviewText}>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam”
          </p>
          <p className={styles.clientName}>Jackson Dean</p>
          <p className={styles.clientRole}>Guest</p>
        </div>
      </div>
    </div>
  );
}
