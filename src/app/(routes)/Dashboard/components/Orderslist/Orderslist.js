import { useEffect, useState } from 'react'
import styles from './Orderslist.module.css'
import axios from 'axios'
import OrderData from '../OrderData/OrderData'

const Orderslist = ()=>{

    let [dataList,setdataList] = useState([])

    useEffect(()=>{
        axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json ")
        .then(res=>(setdataList(res.data.dasbhoardPage.orders)))
        .catch(err=>(console.log(err)))
    })
    console.log(dataList)
    return <div>
        <div className={styles.container}>
            <h2 className={styles.head}>Orders List</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ORDER NO.</th>
                        <th>STATUS</th>
                        <th>OPERATORS</th>
                        <th>LOCATION</th>
                        <th>DISTANCE</th>
                        <th>START DATE</th>
                        <th>EST DELIVERY DUE</th>
                    </tr>   
                </thead>
                <tbody>
                    {dataList.map((item,id)=> <OrderData list={item} key={"i"+id} /> )}
                </tbody>
            </table>
        </div>
    </div>
}

export default Orderslist