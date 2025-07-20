import React from "react";
import styles from "./Team.module.css";
import { Camera, Facebook, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Laurent Wayne",
    role: "Hotel Manager",
    image: "", // Replace with real image URL if needed
  },
  {
    name: "Josh Mullins",
    role: "Kitchen Manager",
    image: "",
  },
  {
    name: "Andrea Hugh",
    role: "Receptionist",
    image: "",
  },
  {
    name: "James Norman",
    role: "Room Service",
    image: "",
  },
];

export default function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.headingArea}>
        <div className={styles.hr}></div>
        <p className={styles.subheading}>MEET OUR TEAM</p>
        <h1 className={styles.heading}>Expert Team Persons</h1>
      </div>

      <div className={styles.cardWrapper}>
        {teamMembers.map((member, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.imageBox}>
              {i === 0 && (
                <div className={styles.socialIcons}>
                  <span>
                    <Twitter />
                  </span>
                  <span>
                    <Facebook />
                  </span>
                  <span>
                    <Camera />
                  </span>
                </div>
              )}
            </div>
            <div className={styles.info}>
              <p className={styles.name}>{member.name}</p>
              <p className={styles.role}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
