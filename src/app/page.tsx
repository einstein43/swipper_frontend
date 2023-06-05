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

  function GetThreeRandom = async (): Promise<any[]> => {
    const listingsCount = listings.length - 1;

    const arr = [];
    while (arr.length < 3) {
      const r = Math.floor(Math.random() * listingsCount) + 1;
      if (arr.indexOf(r) === - 1) arr.push(r);
    }

    const selectedListings: any[] = [];
    for (const number of arr) {
      const response = await fetch("https://swipperresource.azurewebsites.net/api/listing/" + number)
      const data = await response.json();

      selectedListings.push(data);
    }

    return selectedListings;
  }

  return (
    <>
      <main className={styles.main}>
        {await GetThreeRandom().map((listing) => (
          <Card key={listing.id} {...listing} />
        ))}
      </main>
    </>
  );
}

