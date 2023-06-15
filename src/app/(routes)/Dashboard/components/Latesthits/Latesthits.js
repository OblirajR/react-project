"use client"
import React from 'react'
import { useEffect, useState } from 'react'
// import styles from './Latesthits.module.css'
import axios from 'axios'
import Chart from 'react-apexcharts'
import styles from './Latesthits.module.css'
import ApexCharts from 'apexcharts'

const Latesthits = () =>{
    
    let [LatesthitsData,setlatesthitsData] = useState([])
    const [options,setOptions] =useState()
    const  [series,setSeries] =useState()
    useEffect(()=>{
        axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json ')
        .then(res=>{
            // console.log(res.data.dasbhoardPage.latestHits)
            setlatesthitsData(res.data.dasbhoardPage.latestHits)
            
            
            
            
        })
        .catch(err=>(console.log(err)))
    })
    // console.log(LatesthitsData.months)
    return <div className={styles.container}>
        {/* {LatesthitsData.map(item=>console.log(item))} */}
        {/* {console.log("data",featuredData)}
        {console.log("data",monthData)} */}
        <Chart options={
            {
                chart: {
                    id: 'apexchart-example'
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: "#fff"
                        },
                        minWidth: 0,
                        maxWidth: 150,
                    },
                    title: {
                        text: "Hits",
                        style: {
                            color: "#fff",
                            fontWeight: 300
                        }
                    },
                    min: 10,
                    max: 90,
                    
                },
                title: {
                    text: "Latest Hits",
                    style: {
                        color: "#fff"
                    }
                },
                grid: {
                    borderColor: '#515252',
                    show: true, 
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 10
                    }, 
                  },
                legend: {
                    position: "top",
                    labels: {
                        colors: "#fff"
                    },
                    markers: {
                        size: 0,
                        colors: undefined,
                        width: 30,
                        height: 10,
                        radius: 0,
                    },
                },
                xaxis: {
                    categories: LatesthitsData.months,
                    labels: {
                        style: {
                            colors: "#fff"
                        }
                    },
                    axisBorder: {
                        show: true,
                        color: "#515252"
                    }
                }
            }
        } series={
            [{
                name: 'featured',
                data: LatesthitsData.featured
            },
            {
                name: "latest",
                data: LatesthitsData.latest
            },
            {
                name: "popular",
                data: LatesthitsData.popular
            }
            ]} type="line" width={500} height={250} />
    </div>
}

export default Latesthits 


