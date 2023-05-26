"use client"
import styles from '../../styles/organisms/navBar.module.css'
import { Button } from '../atoms/button.component'
import phone from '../../public/facebook.png'
import location from '../../public/facebook.png'
import logo from '../../../public/swipper.png'
import HamburgerBtn from '../atoms/hamburgerBtn.component'
import { useState } from 'react'
import classNames from 'classnames'
import Image from "next/image";
import Link from 'next/link'


export const NavBar = () => {

    // State
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    // Fn - handle click
    const handleClick = (id: string) => {
        
        // Get element
        const el = document.getElementById(id)

        // If element exists
        if (el) {

            // Scroll to element
            el.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }

    return (
        <div id={styles.container}>

            {/* Logo */}
            <div id={styles.logoWrap}>
                <Image
                    src={logo}
                    alt='Golftrader logo'
                    width={50}
                    height={50}
                />
            </div>

            {/* Links */}
            <ul id={styles.linkContainer}>
                <li className={styles.link} ><Link href="/">Home</Link></li>
                <li className={styles.link} ><Link href="/search">Search</Link></li>
                <li className={styles.link} ><Link href="/swipe">Swipe</Link></li>
                <li className={styles.link} ><Link href="/favourites">Favourites</Link></li>
            </ul>

            {/* Buttons */}
            
            <div id={styles.buttonContainer}>                
                <Button 
                    size='medium' 
                    theme='secondary'
                    icon={{
                        src: logo,
                        alt: 'Swipe'
                    }}
                >Swipper</Button>
           
            </div>

            {/* Hamburger button */}
            <div id={styles.hamburgerBtnWrap}>
                <HamburgerBtn style='style1' isOpen={menuOpen} setIsOpen={setMenuOpen}/>
            </div>

            {/* Mobile menu */}
            {
                <div
                    className={classNames(
                        styles.mobileMenu,
                        menuOpen && styles.mobileMenu__state_open
                    )}
                >
                    <ul id={styles.mobileLinkContainer}>
                    <li className={styles.link} ><Link href="/">Home</Link></li>
                <li className={styles.link} ><Link href="/search">Search</Link></li>
                <li className={styles.link} ><Link href="/swipe">Swipe</Link></li>
                <li className={styles.link} ><Link href="/favourites">Favourites</Link></li>
                    </ul>
                </div>
            }
        </div>
    )
}