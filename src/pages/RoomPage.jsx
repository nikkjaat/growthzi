import React from "react";
import styles from "./RoomPage.module.css";

export default function RoomPage() {
  const rooms = [
    { name: "Superior Suite", price: "$300/Night" },
    { name: "Junior Suite", price: "$270/Night" },
    { name: "Deluxe Room", price: "$200/Night" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.childContainer}>
        <p>our room choices</p>
        <h1>luxury rooms & suites</h1>

        {/* Two images in a row that take full width */}
        <div className={styles.twoImageRow}>
          <img
            src="https://www.decorpot.com/images/blogimage1361284108interior-designs-for-master-bedroom.jpg"
            alt="Room showcase 1"
            className={styles.fullWidthImage}
          />
          <img
            src="https://www.decorpot.com/images/blogimage1361284108interior-designs-for-master-bedroom.jpg"
            alt="Room showcase 2"
            className={styles.fullWidthImage}
          />
        </div>

        {/* Room cards grid below */}
        <div className={styles.roomsGrid}>
          {rooms.map((room, index) => (
            <div key={index} className={styles.roomCard}>
              <img
                src="https://www.decorpot.com/images/blogimage1361284108interior-designs-for-master-bedroom.jpg"
                alt={room.name}
                className={styles.roomImage}
              />
              <div className={styles.roomInfo}>
                <h3>{room.name}</h3>
                <p>{room.price}</p>
                <button className={styles.bookButton}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
