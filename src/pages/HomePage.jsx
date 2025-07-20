import React from "react";
import styles from "./HomePage.module.css";
import LandingPage from "./LandingPage";
import RoomPage from "./RoomPage";
import Amenities from "./Amenities";
import ClientSays from "./ClientSays";
import Team from "./Team";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <LandingPage />
      <RoomPage />
      <Amenities />
      <ClientSays />
      <Team />
    </div>
  );
}
