"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/templates/cardcollection.module.css";
import logo from "../../../public/swipper.png";
import { Inter, Montserrat } from "next/font/google";
 import Card from "../organisms/card.organism";
import React, { useEffect, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

// components/cardcollection.tsx

interface Card {
  id: number;
  ownerId: number;
  animalName: string;
  animalSpecies: string;
  animalBreed: string;
  animalSize: string;
  animalImageLink: string;
  price: number;
  isMale: boolean;
  description: string;
  address: string;
  age: number;
  listingDate: string;
}

const AnimalList: React.FC = () => {
  const [animals, setAnimals] = useState<Card[]>([]);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await fetch(
        "https://swipperresource.azurewebsites.net/api/Listing"
      );
      const data = await response.json();
      setAnimals(data);
    } catch (error) {
      console.error("Error fetching animals:", error);
    }
  };

  return (
    <div className={styles.cardCollection}>
      {animals.map((animal, index) => (
        <Card
          key={index}
          animalName={animal.animalName}
          description={animal.description}
          price={animal.price}
          id={animal.id}
          ownerId={animal.ownerId}
          animalSpecies={animal.animalSpecies}
          animalBreed={animal.animalBreed}
          animalSize={animal.animalSize}
          animalImageLink={animal.animalImageLink}
          isMale={animal.isMale}
          address={animal.address}
          age={animal.age}
          listingDate={animal.listingDate}
        />
      ))}
    </div>
  );
};

export default AnimalList;
