"use client"
import { useEffect, useState } from "react"
import styles from "./Notification.module.css"
import axios from "axios"
import NotiList from "../NotiList/NotiList"

const Notification =()=>{

    let  [listData,setListData] = useState([])
    useEffect(()=>{
        axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
        .then(res=>setListData(res.data.dasbhoardPage.notifications))
        .catch(err=>console.log(err))
    })
    console.log(listData)


    return <div className={styles.main}>
        <div className={styles.container}>
            <h2 className={styles.head}>Notification</h2>
            <div className={styles.maindiv}>
                { listData.map((item,idx)=> <NotiList list={item} key={"item"+idx} />)  }
            </div>
        </div>
    </div>
}

export default Notification