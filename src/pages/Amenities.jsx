import React from "react";
import styles from "./Amenities.module.css";

export default function Amenities() {
  const services = [
    {
      title: "Workout & Yoga Rooms",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Spa Massage & Sauna",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Multiple Cuisines & Beverages",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Multiple Cuisines & Beverages",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <hr />
        <div>
          <div>
            <p className={styles.subheading}>INTRODUCING OUR SERVICES</p>
            <h1 className={styles.heading}>
              Amenities That You <br /> Can Enjoy
            </h1>
          </div>

          <p className={styles.introText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.servicesContainer}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.divider}></div>
              <button className={styles.discoverButton}>Discover More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
