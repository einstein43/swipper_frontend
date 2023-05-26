import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "../../styles/organisms/reviews.module.css";
import { Button } from "../atoms/button.component";
import Phone from "../../public/phone.svg";
import reparaties from "../../public/reparatie.svg";
import sterretje from "../../public/sterretje.png"
import olie from '../../public/olie.jpg'

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Reviews() {
  return (
    <div className={styles.wrapper}>

      {/* Stars */}
      <div id={styles.sterretjes}>
        <Image id={styles.image} src={sterretje} alt={"stars mate"} fill={true}></Image>
      </div>

      {/* Text */}
      <div className={styles.leftside_text}>
        Een <span id={styles.blacktext}>Betrouwbare</span> en <span id={styles.blacktext}> gewaardeerde </span>reputatie met duizenden klussen onder de riem.
      </div>

      {/* Button */}
      <Button id={styles.buttontje}
        theme="primary"
        size="large"
      >
        Bekijk alle Google Reviews
      </Button>

      {/* Image */}
      <div className={styles.fotodiv}>
        <Image
          src={olie}
          alt="Garage Raemaekers"
          fill={true}
          id={styles.fotootje}
        />
      </div>
      
    </div>
  );
}
