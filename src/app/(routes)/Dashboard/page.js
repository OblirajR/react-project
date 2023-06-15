"use client"
import Footer from "@/app/components/Footer/Footer"
import Fulltop from "@/app/components/Fulltop/Fulltop"
import styles from './page.module.css'
import Latesthits from "./components/Latesthits/Latesthits"
import Performance from "./components/Performance/Performance"
import { useEffect, useState } from "react"
import axios from "axios"
import Storage from "./components/Storage/Storage"
import Notification from "./components/Notification/Notification"
import Orderslist from "./components/Orderslist/Orderslist"

const Dashboard=()=>{

    let [performData,setPerformData] = useState({})

    useEffect(()=>{
        axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json ')
        .then(res=>setPerformData(res.data.dasbhoardPage.performance)) 
        .catch(err=>(console.log(err))) 
    },[])
    

    return <div >
        <Fulltop/>
        <div className={styles.container}>
            <div className={styles.paradiv}>
                <p className={styles.headpara}>Welcome back, <b>Admin</b></p>
            </div>
            <div className={styles.division1}>
                <Latesthits/>
                {console.log(performData)}
                {/* {performData.length>0 &&  performData.map((item,idx) => <Performance detail={item} key={"data"+idx}/>)} */}
                <Performance/>
            </div>
            <div className={styles.division2}>
                <Storage/>
                <Notification/>
            </div>
            <div>
                <Orderslist/>
            </div>
        </div>
        <Footer/>
    </div>
}
export default Dashboard 