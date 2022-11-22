import styles from '../styles/header.module.css';

export function Header () {
    return(
        <div className={styles.headerall}>
            <div className={styles.header}>
                <p className={styles.logo}>
                    <a href="/trip">Trip</a>
                </p>
                <div className={styles.buttons}>
                    <button className={styles.button}>カート</button>
                    <button className={styles.button}>ログイン</button>
                </div>
            </div>
        </div>
    );
}
