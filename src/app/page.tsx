"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import Card_2 from "@/components/organisms/card_2.organism";
import { useRouter } from "next/router";
import { NextApiResponse } from 'next';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const router = useRouter();
  const [listings, setListings] = useState([]);
  const [userId, setUserId] = useState("");

  // useEffect(() => {
  //   const storeduserId = window.localStorage.getItem("userId");
  //   setUserId(storeduserId ? JSON.parse(storeduserId) : null);
  // }, []);

  useEffect(() => {
    
      
    
      fetch("https://swipperresource.azurewebsites.net/api/listing")
        .then((res) => res.json())
        .then((data) => setListings(data));
    }
  , []);

  // const redirectToLogin = () => {
  //   if (typeof window === 'undefined') {
  //     // Server-side redirect
  //     const { res } = router as any;
  //     res.writeHead(302, { Location: '/login' });
  //     res.end();
  //   } else {
  //     // Client-side redirect
  //     router.push('/login');
  //   }
  // };

  // useEffect(() => {
  //   if (!userId && typeof window === "undefined") {
  //     redirectToLogin();
  //   }
  // }, [userId]);

  // // Perform server-side redirect if userId is not found
  // useEffect(() => {
  //   if (!userId && typeof window === "undefined") {
  //     redirectToLogin();
  //   }
  // }, [userId]);

  const getThreeRandom = () => {
    const listingsCount = listings.length;
    const arr = [];
    while (arr.length < 3) {
      const r = Math.floor(Math.random() * listingsCount);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr.map((index) => listings[index]);
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
        <div className={styles.headmast_text_window}>
          <h1 className={styles.headmast_text}>
            Find your new best friend {userId}
          </h1>
        </div>
        <div className={styles.top_picks}>
          <div id={styles.toppick_1}>
            <div className={styles.listing_wrapper}>
              <div className={styles.listing}>
                {randomListings.length > 0 && (
                  <Card_2 key={randomListings[0]?.id} {...randomListings[0]} />
                )}
              </div>
            </div>
          </div>
          <div id={styles.toppick_2}>
            <div className={styles.listing_wrapper}>
              <div className={styles.listing}>
                {randomListings.length > 1 && (
                  <Card_2 key={randomListings[1]?.id} {...randomListings[1]} />
                )}
              </div>
            </div>
          </div>
          <div id={styles.toppick_3}>
            <div className={styles.listing_wrapper}>
              <div className={styles.listing}>
                {randomListings.length > 2 && (
                  <Card_2 key={randomListings[2]?.id} {...randomListings[2]} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

