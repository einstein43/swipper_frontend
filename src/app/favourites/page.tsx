"use client"
import styles from "./page.module.css";
import { Inter, Montserrat } from "next/font/google";
import Card, { CardProps } from "@/components/organisms/card.organism";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Favourites() {
  const [listing, setListings] = useState<CardProps[]>([]);
  const [userId, setUserId] = useState(""); // State to hold the user ID input
  const [error, setError] = useState(null); // State to hold the error message

  // Page logic
  useEffect(() => {
    if (userId !== "") {
      fetch(
        `https://swipperresource.azurewebsites.net/api/GetListingsForUser?id=${userId}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error fetching data");
          }
          return res.json();
        })
        .then((data) => {
          setListings(data);
          setError(null); // Clear any previous errors
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [userId]);

  // Page design
  return (
    <>
      <main className={styles.main}>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
        />
        {error && <p>Error: {error}</p>}
        <div className={styles.gridContainer}>
          {listing.map((listing, index) => (
            <div
              id={`styles.toppick_${index + 1}`}
              className={styles.cardWrapper}
              key={listing?.id}
            >
              <Card {...listing} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
  
}
