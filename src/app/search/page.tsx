"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Inter, Montserrat } from "next/font/google";
import { Footer } from "@/components/organisms/footer.organism";
import { useEffect, useState } from "react";
import Card, { CardProps } from "@/components/organisms/card.organism";
import Card_2 from "@/components/organisms/card_2.organism";

const inter = Inter({ subsets: ["latin"] });

export default function Search() {
  const [listings, setListings] = useState<CardProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredListings, setFilteredListings] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch("https://swipperresource.azurewebsites.net/api/listing")
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setFilteredListings(data);
      });
  }, []);

  useEffect(() => {
    const results = listings.filter((listing) =>
      listing.animalBreed.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredListings(results);
  }, [searchTerm, listings]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <main className={styles.main}>
        <input
          type="text"
          placeholder="Search listings"
          value={searchTerm}
          onChange={handleSearch}
        />

        {filteredListings.map((listing) => (
          <div className={styles.listing_wrapper}>
            <div className={styles.listing}>
              <Card_2 key={listing.id} {...listing} />
            </div>
          </div>
        ))}

      </main>
    </>
  );
}

