"use client";

import Image from "next/image";
import styles from "../../styles/organisms/card.module.css";
 import { Inter } from 'next/font/google'
 import React from 'react';
const inter = Inter({ subsets: ["latin"] });


interface CardProps {
  id: number,
  ownerId: number,
  animalName: string,
  animalSpecies: string,
  animalBreed: string,
  animalSize: string,
  animalImageLink: string,
  price: number,
  isMale: boolean,
  description: string,
  address: string,
  age: number,
  listingDate: string,
}

const Card: React.FC<CardProps> = ({ id, ownerId, animalName, animalSpecies, animalBreed, animalSize, animalImageLink, price, isMale, description, address, age, listingDate }) => {
  return (
    <div className="card">
      <h3>{animalName}</h3>
      <p>{animalBreed}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Card;


  