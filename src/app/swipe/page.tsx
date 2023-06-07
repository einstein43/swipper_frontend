"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Card, { CardProps } from "@/components/organisms/card.organism";
import { Inter } from "next/font/google";
import { Footer } from "@/components/organisms/footer.organism";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function Swipe() {
  const [listings, setListings] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch("https://swipperresource.azurewebsites.net/api/listing")
      .then((res) => res.json())
      .then((data) => setListings(data));
  });

  return (
    <>
      <main className={styles.main}>
        {listings.map((listing) => (
          <Card key={listing.id} {...listing} />
        ))}
      </main>
    </>
  );
}


