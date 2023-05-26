import Image from "next/image";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/organisms/footer.organism";
import AnimalList from "../components/templates/cardcollection.template";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <AnimalList></AnimalList>
        </main>
    </>
  );
}
