import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "../../styles/organisms/location.module.css";
import { Button } from "../atoms/button.component";
import Phone from "../../public/phone.svg";
import reparaties from "../../public/reparatie.svg";
import sterretje from "../../public/sterretje.png";
import locationpic from "../../public/location2.png"
import location from "../../public/location.svg"

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Location() {
  return (
    <div className={styles.wrapper}>

      {/* Title */}
      <p className={styles.leftside_text}>Voor het maken van een <span id={styles.blacktext}>afspraak</span> of <span id={styles.blacktext}>vragen</span> zijn wij telefonisch bereikbaar</p>

      {/* Maps */}
      <div className={styles.image_div}>
        <Image src={locationpic} alt={"locations"} id={styles.img} fill={true}/>
      </div>

      {/* Buttons */}
      <div id={styles.buttonContainer}>
        <Button id={styles.bellen} theme="primary" size={"large"} icon={{ src: Phone, alt: "phone" }}>Bellen</Button>
        <Button id={styles.route} theme="secondary" size={"large"} icon={{ src: location, alt: "location" }}>Route</Button>
      </div>
    </div>
  );
}
