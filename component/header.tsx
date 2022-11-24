import styles from '../styles/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export function Header () {
    return(
        <div className={styles.headerall}>
            <div className={styles.header}>
                <p className={styles.logo}>
                    <a href="/trip">Trip</a>
                </p>
                <div className={styles.buttons}>
                    <div> 
                        <Link href="/">
                        <Image  
                        src="/images/shopping-cart.png" 
                        alt="ショッピングカート" 
                        width={25} 
                        height={25}
                        />
                        </Link>
                    </div>
                    <button className={styles.button}>ログイン</button>
                </div>
            </div>
        </div>
    );
}
