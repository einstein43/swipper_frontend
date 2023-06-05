"use client";

import Image from "next/image";
import styles from "../../styles/organisms/card.module.css";
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

// const Card: React.FC<CardProps> = ({ id, ownerId, animalName, animalSpecies, animalBreed, animalSize, animalImageLink, price, isMale, description, address, age, listingDate }) => {
//   const [isClick, setClick] = React.useState(false);
//   const [zIndex, setZIndex] = React.useState(0);

//   React.useEffect(() => {
//     setZIndex((prevZIndex) => prevZIndex + 1);
//   }, []);

//   // const handleClick = () => {
//   //   setClick(!isClick);

//   //   setZIndex(0); // Set the lowest value for z-index
//   // };
//   const handleClick = () => {
//     setClick(true); // Set isClick to true immediately
//     setTimeout(() => {
//       setZIndex(0)
//       setClick(false); // Set the lowest value for z-index after the delay
//     }, 800); // Delay in milliseconds
//   };

//   return (
//     <div className={styles.card} style={{ zIndex }}>

//       <Image src={animalImageLink} alt={animalName} className={styles.card_image} width={250} height={250} />
//       <div className={styles.card_bottom}>
//         <div className={styles.card_info}>
//           <h3 className={styles.card_title}>{animalName}</h3>
//           <p className={styles.card_description}>{animalBreed}</p>
//         </div>
//         <div className={styles.card_like}>
//           <Heart isClick={isClick} onClick={handleClick} />
//         </div>
//       </div>
//     </div>
//   );
// };

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
  const [zIndex, setZIndex] = React.useState(0);

  const originalIndexes = React.useRef<number[]>([]);
  const totalCards: number = 32;
  React.useEffect(() => {
    if (originalIndexes.current.length === 0) {
      // Store the original reversed indexes when the component mounts
      originalIndexes.current = Array.from({ length: totalCards }).map(
        (_, index) => totalCards - index
      );
    }

    if (zIndex === 0 && !originalIndexes.current.includes(0)) {
      // Reset the z-indexes to the original reversed order when all items have zIndex 0
      setZIndex(originalIndexes.current.shift() || 0);
    }
  }, [zIndex]);

  const handleClick = () => {
    setClick(true); // Set isClick to true immediately
    setTimeout(() => {
      setZIndex(0); // Set the lowest value for z-index after the delay
      setClick(false); // Reset isClick to false after the z-index change
    }, 1000); // Delay in milliseconds
  };

  return (
    <div
      className={isClick ? styles.card_image_fade : styles.card}
      style={{ zIndex }}
    >
      <Image src={animalImageLink} alt={animalName} width={240} height={250} />
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
