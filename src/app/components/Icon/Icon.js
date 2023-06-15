"use client"
import styles from "./Icon.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"


const Icon = () =>{
    
    return <div className={styles.collapse}>
        <ul className={styles.navbar}>
            <div>
            <li className={styles.navitem}  >
                <a href="#" className={styles.navlink}>
                   <div ><FontAwesomeIcon className={styles.fa} icon={faGaugeHigh} size="xl" style={{color: "#f7f7f8",}} /></div> 
                    <span className={styles.span}>Dashboard</span>
                </a>
            </li>
            </div>

            <div>
            <li className={styles.navitem} >
                <a href="#" className={styles.navlink} >
                    <div><FontAwesomeIcon className={styles.fa} icon={faCartShopping} size="xl" style={{color: "#ffffff",}} /></div>
                    <span className={styles.span}>Products</span>
                </a>
            </li>
            </div>

            <div >
            <li className={styles.navitem} >
                <a href="#" className={styles.navlink}>
                <div><FontAwesomeIcon className={styles.fa} icon={faUser} size="xl" style={{color: "#f5f5f5",}} /></div>  
                    <span className={styles.span}>Accounts</span>
                </a>
            </li>
            </div>

        </ul>
    </div>
}

export default Icon
