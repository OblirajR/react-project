"use client"
import styles from "./Icons1.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Icons1 = () =>{
    let {push} =useRouter()
    let user = localStorage.getItem("username")
    let pass = localStorage.getItem("password")
    let [color,setColor] = useState('')
    const changingPageDash=()=>{
        if(user==pass){
            push('./Dashboard')
            setColor('dash')
        }
    }
    const changingPageProduct=()=>{
        if(user==pass){
            push('./Products') 
            setColor('product')
        }
    }
    const changingPageAccounts=()=>{
        if(user==pass){
            push('./Accounts')
            setColor('accounts')
        }
    }
    
    
    return <div className={styles.collapse}>
        <ul className={styles.navbar}>
            <div  >
            <li className={styles.navitem}  onClick={changingPageDash} >
                <a href="#" className={styles.navlink}>
                   <div ><FontAwesomeIcon className={styles.fa} icon={faGaugeHigh} size="xl" style={{color: "#f7f7f8",}} /></div> 
                    <span className={styles.span}>Dashboard</span>
                </a>
            </li>
            </div>

            <div className={styles.active }>
            <li className={styles.navitem} onClick={changingPageProduct}>
                <a href="#" className={styles.navlink} >
                    <div><FontAwesomeIcon className={styles.fa} icon={faCartShopping} size="xl" style={{color: "#ffffff",}} /></div>
                    <span className={styles.span}>Products</span>
                </a>
            </li>
            </div>

            <div >
            <li className={styles.navitem} onClick={changingPageAccounts}>
                <a href="#" className={styles.navlink}>
                <div><FontAwesomeIcon className={styles.fa} icon={faUser} size="xl" style={{color: "#f5f5f5",}} /></div>  
                    <span className={styles.span}>Accounts</span>
                </a>
            </li>
            </div>

        </ul>
    </div>
}

export default Icons1