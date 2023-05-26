import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "../../styles/organisms/services.module.css";
import { Button } from "../atoms/button.component";
import Phone from "../../public/phone.svg";
import reparaties from "../../public/reparatie.svg";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Service() {
  return (
    <div className={styles.wrapper}>

      <div id={styles.header}>
        {/* Title */}
        <div id={styles.leftside_text}>
          <p>
            Met <span id={styles.blacktext}>25 jaar</span> ervaring bieden wij de volgende <span id={styles.blacktext}>diensten</span> voor luxewagens,
            lichte bedrijfswagens en vrachtwagens.
          </p>
        </div>

        {/* Button */}
        <div id={styles.button}>
          <Button
            theme="primary"
            size="large"
            icon={{ src: Phone, alt: "bellen" }}
          >
            Bellen
          </Button>
        </div>
      </div>

      {/* Blocks */}
      <div id={styles.blocksGrid}>
        <div id={styles.vak1} className={styles.service}>
          <img id={styles.plaatje} src="reparatie.svg" alt="reparaties" />
          <h1 className={styles.kopje}>Reparaties</h1>
          <p className={styles.kopje_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam.
          </p>
        </div>
        <div id={styles.vak2} className={styles.service}>
          <img id={styles.plaatje}  src="banden.svg" alt="reparaties" />
          <h1 className={styles.kopje}>Banden</h1>
          <p className={styles.kopje_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam.
          </p>
        </div>
        <div id={styles.vak3} className={styles.service}>
          <img id={styles.plaatje}  src="beurt.svg" alt="reparaties" />
          <h1 className={styles.kopje}>Kleine- en Grote Beurt</h1>
          <p className={styles.kopje_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam.
          </p>
        </div>
        <div id={styles.vak4} className={styles.service}>
          <img id={styles.plaatje}  src="apk.svg" alt="reparaties" />
          <h1 className={styles.kopje}>APK Facilitering</h1>
          <p className={styles.kopje_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam.
          </p>
        </div>
        <div id={styles.vak5} className={styles.service}>
          <img id={styles.plaatje}  src="airco.svg" alt="reparaties" />
          <h1 className={styles.kopje}>Airco Service</h1>
          <p className={styles.kopje_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam.
          </p>
        </div>
        <div id={styles.vak6} className={styles.service}>
          <img id={styles.plaatje}  src="uitlees.svg" alt="reparaties" />
          <h1 className={styles.kopje}>Uitlees Service</h1>
          <p className={styles.kopje_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam.
          </p>
        </div>
      </div>
    </div>
  );
}
