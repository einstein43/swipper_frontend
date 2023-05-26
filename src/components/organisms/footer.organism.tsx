"use client";

import Image from "next/image";
import styles from '../../styles/organisms/footer.module.css'
import logo from '../../../public/swipper.png'

export const Footer = () => {
  // Fn - handle click
  const handleClick = (id: string) => {
    // Get element
    const el = document.getElementById(id);

    // If element exists
    if (el) {
      // Scroll to element
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Current year
  const year = new Date().getFullYear();

  return (
    <>
      <div id={styles.footer}>
        {/* Logo */}
        <div id={styles.logoWrap}>
          <Image
            src={logo}
            alt="Swipper logo"
            fill={true}
            id={styles.logo}
          />
        </div>

        {/* Details */}
        <div className={styles.section}>
          <p className={styles.title}>Swipper</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="https://goo.gl/maps/pgG1u7PspoTZ7Nc19" target="_blank">
                 
              </a>
            </li>
           
          </ul>
        </div>

        {/* Sections */}
        <div className={styles.section}>
          <p className={styles.title}>Sections</p>
          <ul className={styles.ul}>
            <li className={styles.li} onClick={() => handleClick("section-1")}>
              Home
            </li>
            <li className={styles.li} onClick={() => handleClick("section-1")}>
              Dashboard
            </li>
            <li className={styles.li} onClick={() => handleClick("section-1")}>
              Swipe
            </li>
            <li className={styles.li} onClick={() => handleClick("section-1")}>
              Profile
            </li>
          </ul>
        </div>
      </div>

      {/* Disclosure bar */}
      <div id={styles.disclosureContainer}>
        <p>Copyright @ {year} swipper</p>
      </div>
    </>
  );
};
