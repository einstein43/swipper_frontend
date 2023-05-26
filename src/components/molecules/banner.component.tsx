import Image from 'next/image'
import styles from '../../styles/molecules/banner.module.css'
import car from '../../public/banner.jpg'

export const Banner = () => {

    return (
        <div id={styles.banner}>

            {/* Image */}
            <div id={styles.imgWrap}>
                <Image
                    src={car}
                    alt='Afbeelding van garage Raemaekers'
                    fill={true}
                    id={styles.img}
                />
            </div>

            {/* Gradient */}
            <div id={styles.gradient}/>

            {/* Content */}
            <div id={styles.content}>
                <h2 id={styles.subtitle}>Merkonafhankelijke auto en vrachtwagen garage</h2>
                <h1 id={styles.title}>Garage Raemaekers</h1>
            </div>
        </div>
    )
}