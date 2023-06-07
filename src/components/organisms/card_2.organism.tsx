"use client";

import Image from "next/image";
import styles from "../../styles/organisms/card_2.module.css";
import { Inter } from "next/font/google";
import React from "react";
import { Button } from "../atoms/button.component";
import logo from "../../../public/swipper.png";
import Heart from "react-animated-heart";

const inter = Inter({ subsets: ["latin"] });

export interface CardProps {
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


const Card: React.FC<CardProps> = ({
  id,
  ownerId,
  animalName,
  animalSpecies,
  animalBreed,
  animalSize,
  animalImageLink,
  price,
  isMale,
  description,
  address,
  age,
  listingDate,
}) => {
  const [isClick, setClick] = React.useState(false);

  const handleClick = async () => {
    setClick(!isClick); // Set isClick to the opposite of its current value

    const likeData = {
      userId: 1,
      animalId: id,
    };
    if (isClick) {
      const response = await fetch('https://swipperresource.azurewebsites.net/api/likeAnimal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(likeData),
      });
    } else {
      const response = await fetch('https://swipperresource.azurewebsites.net/api/DislikeAnimal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(likeData),
      });
    }
  };



  return (
    <div
      className={styles.card}

    >
      <Image id={styles.image_1} src={animalImageLink} alt={animalName} width={240} height={250} />
      <div className={styles.card_bottom}>
        <div className={styles.card_info}>
          <h3 className={styles.card_title}>{animalName}</h3>
          <p className={styles.card_description}>{animalBreed}</p>
        </div>
        <div className={styles.card_like}>
          <Heart isClick={isClick} onClick={handleClick} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
