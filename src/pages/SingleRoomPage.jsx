import React from "react";
import styles from "./SingleRoomPage.module.css";
import {
  AirVent,
  Bath,
  Bed,
  BedSingle,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CigaretteOff,
  CircleChevronLeft,
  CircleChevronRight,
  Dot,
  PersonStanding,
  User,
  Utensils,
  Wifi,
} from "lucide-react";

export default function SingleRoomPage() {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <CircleChevronLeft size={35} />
        <CircleChevronRight size={35} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.leftSideContent}>
          <h1>Superior Suite</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            voluptatem officia id illo alias illum cumque iusto dicta fuga ipsa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ipsa et, laboriosam enim cum perspiciatis rem beatae itaque,
            quisquam illum aspernatur laudantium qui culpa consequuntur nesciunt
            distinctio quasi quas aliquam dolor sit! Cumque saepe repellendus
            velit reprehenderit vel provident dolore doloremque in? Quidem,
            quasi obcaecati. Iure nisi ut ad consectetur.
          </p>
          <div className={styles.checkInOut}>
            <div>
              <Calendar size={35} />
              <p>
                Check in : <br />
                12:00 PM
              </p>
            </div>
            <div>
              <Calendar size={35} />
              <p>
                Check out <br />
                11:00 AM
              </p>
            </div>
          </div>
          <div className={styles.roomAmetities}>
            <h2>Room Amentities</h2>
            <div className={styles.roomDetails}>
              <span>
                <User /> 1-2 Persons
              </span>
              <span>
                <Bath />
                Bathtub
              </span>
              <span>
                <Utensils /> Free Breakfast
              </span>
              <span>
                <CigaretteOff /> smoking
              </span>
            </div>
            <div className={styles.roomDetails}>
              <span>
                <Bed />
                King size bed
              </span>
              <span>
                <Wifi />
                Free wifi
              </span>
              <span>
                <AirVent />
                Air Conditioner
              </span>
              <span>
                <BedSingle />
                Extra bed ($15)
              </span>
            </div>
            <div className={styles.offers}>
              <h2>Available Offers</h2>
              <div>
                <div>
                  <p>
                    <Dot />
                    Welcome snacks
                  </p>
                  <p>
                    <Dot /> Free High Speed wifi
                  </p>
                  <p>
                    <Dot />
                    10% discount for tour service
                  </p>
                </div>
                <div>
                  <p>
                    <Dot />
                    Daily complementary drink
                  </p>
                  <p>
                    <Dot />
                    Free late check out and early check in
                  </p>
                  <p>
                    <Dot />
                    Breakfast between the trip
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.rules}>
              <h2>Room Rules</h2>
              <div>
                <p>
                  <Dot />
                  Not pet allowed
                </p>
                <p>
                  <Dot />
                  Child under 3 year old free charge and share bed with parents
                </p>
                <p>
                  <Dot />
                  If the guest exceeds the capacity, Additionally bed are
                  required
                </p>

                <p>
                  <Dot />
                  Smoking in the room will be Penalized
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div>
            <h2>Reverse :</h2>
            <div className={styles.checkInOutContainer}>
              <p>Check in</p>
              <div className={styles.checkInOutDate}>
                24 December 2023 <Calendar />
              </div>
            </div>
            <div>
              <p>Check out</p>
              <div className={styles.checkInOutDate}>
                28 December 2023 <Calendar />
              </div>
            </div>
            <div className={styles.roomGuest}>
              <div className={styles.room}>
                <p>Room</p>
                <select name="" id="">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                </select>
              </div>
              <div className={styles.guest}>
                <p>Guest</p>
                <select name="" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            <p className={styles.checkAvailability}>
              Check Availability <ChevronRight />
            </p>
          </div>
          <div className={styles.extraService}>
            <h2>Extra Service : </h2>
            <div className={styles.services}>
              <div>
                <input type="checkbox" name="" id="roomCleaning" />
                <label htmlFor="room">Room Cleaning</label>
              </div>
              <div>
                <input type="checkbox" name="" id="Drinks" />
                <label htmlFor="drinks">Drinks Included</label>
              </div>
              <div>
                <input type="checkbox" name="" id="breakfast" />
                <label htmlFor="breakfast">Room Breakfast</label>
              </div>
            </div>
          </div>
          <h2 className={styles.totalCost}>
            Total Cost : <span>$335</span>
          </h2>
          <div className={styles.bookNow}>
            <hr />
            <p>
              Book Now <ChevronRight />
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
