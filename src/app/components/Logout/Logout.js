"use client"
import { useRouter } from "next/navigation"
import styles from "./Logout.module.css"

const Logout =()=>{
    let {push} = useRouter()

    const logout=()=>{
        push('./')
        localStorage.clear()
    }

    return <ul onClick={logout}>
       
            <a className={styles.anchor} href="#">Admin,<b>Logout</b></a>
       
    </ul>
}

export default Logout