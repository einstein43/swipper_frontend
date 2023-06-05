"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/organisms/footer.organism";
import AnimalList from "../components/templates/cardcollection.template";
import Card, { CardProps } from "@/components/organisms/card.organism";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [listings, setListings] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch("https://swipperresource.azurewebsites.net/api/listing")
        .then((res) => res.json())
        .then((data) => setListings(data));
  }, []);

  const getThreeRandom = (): any[] => {
    const listingsCount = listings.length;

    const arr = [];
    while (arr.length < 3) {
      const r = Math.floor(Math.random() * listingsCount);
      if (arr.indexOf(r) === -1) arr.push(r);
    }

    const selectedListings: any[] = [];
    for (const index of arr) {
      selectedListings.push(listings[index]);
    }

    return selectedListings;
  };

  const [randomListings, setRandomListings] = useState<any[]>([]);

  useEffect(() => {
    if (listings.length > 0) {
      const selectedListings = getThreeRandom();
      setRandomListings(selectedListings);
    }
  }, [listings]);

  return (

      <main className={styles.main}>
        <div className={styles.headmast}></div>
        <div className={styles.headmast_text}></div>
        <div className={styles.top_picks}>
          <div className={styles.listing_wrapper}>
            <div className={styles.listing}>
              {randomListings.length > 0 && <Card key={randomListings[0]?.id} {...randomListings[0]} />}
            </div>
          </div>
          <div className={styles.listing_wrapper}>
            <div className={styles.listing}>
              {randomListings.length > 1 && <Card key={randomListings[1]?.id} {...randomListings[1]} />}
            </div>
          </div>
          <div className={styles.listing_wrapper}>
            <div className={styles.listing}>
              {randomListings.length > 2 && <Card key={randomListings[2]?.id} {...randomListings[2]} />}
            </div>
          </div>
        </div>
      </main>

  );
}

