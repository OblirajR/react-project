"use client"
import Chart from "react-apexcharts"
import { useState,useEffect } from "react"
import axios from "axios"
import styles from "./Storage.module.css"

const Storage=()=>{

    let [storageData,setStoragedata]= useState({})
    useEffect(()=>{
        axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json ')
        .then(res=>setStoragedata(res.data.dasbhoardPage.storage)) 
        .catch(err=>(console.log(err))) 
    },[])
    console.log(Object.values(storageData))
    return <div className={styles.container}>
        <Chart options={{
            labels: Object.keys(storageData),
            title: {
                text: 'Storage Information',
                style: {
                    color: '#fff',
                    
                }
            },
            dataLabels: {
                enabled: false
              },
              legend: {
                
                labels: {
                        colors: "white",
                    
                        // useSeriesColors: true  
                  },
                position: 'top',
                formatter(val,opts) {
                    // const name = opts.w.globals.labels[opts.seriesIndex]
                    const name = opts.w.globals.initialSeries[opts.seriesIndex]
                    console.log(opts)
                    return [val ,"Storage","(",name,"GB)"]
                  },
                 
                  markers: {
                    width: 35,
                    height: 10,
                    strokeWidth: 1,
                    strokeColor: '#fff',
                    strokeOpacity: 0.5,
                    fillColors: undefined,
                    radius: 0,
                    customHTML: undefined,
                    onClick: undefined,
                    offsetX: 0,
                    offsetY: 0,
                    
                  },
                 
              },
              
            colors: ['#a8d582','#4ed6b8','#f7604d']
        }

        } series={Object.values(storageData)} type="pie" width={400} />
    </div>
}
export default Storage