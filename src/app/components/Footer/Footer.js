import styles from './Footer.module.css'

const Footer =() =>{
    return <footer className={styles.footer}>
        <div className={styles.copy}>
            <p className={styles.para}>Copyright © <b>2018</b> All rights reserved. Design: <a href='#' className={styles.footerlink}>Template Mo</a></p>
        </div>
    </footer>
}

export default Footer