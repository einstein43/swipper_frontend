import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "../../styles/organisms/pictures.module.css";
import { Button } from "../atoms/button.component";
import Phone from "../../public/phone.svg";
import reparaties from "../../public/reparatie.svg";
import sterretje from "../../public/sterretje.png";
import locationpic from "../../public/location2.png";
import location from "../../public/location.svg";
import stage from "../../public/stage.png";
import rdw from "../../public/rdw.jpg";
import eurol from "../../public/eurol.jpg";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Pictures() {
  return(
<div className={styles.wrapper}>
<Image id={styles.rdw} src={rdw} alt={"rdw"}></Image>
<Image id={styles.eurol} src={eurol} alt={"eurol"}></Image>
<Image id={styles.stage} src={stage} alt={"stage"}></Image>
</div>
  ) ;
}
