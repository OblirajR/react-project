"use client"
import axios from "axios"
import { useEffect,useState } from "react"
import Chart from 'react-apexcharts'
import styles from './Performance.module.css'

const Performance=()=>{
    let [performanceData,setperformanceData] = useState({})

    useEffect(()=>{
        axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json ')
        .then(res=>{
            setperformanceData(res.data.dasbhoardPage.performance)
        }) 
        .catch(err=>(console.log(err))) 
    },[])

    return <div className={styles.container}>
        <Chart options={
            {
                chart: {
                    id: 'apexchart-example'
                },
                plotOptions: {
                    bar: {
                      borderRadius: 0,
                      barHeight: '15%',
                      horizontal: true,
                      // colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4'],
                      dataLabels: {
                        position: 'top'
                      },
                    }
                  },
                  dataLabels: {
                    enabled: false
                  },
                colors:  Object.keys(performanceData),
                  yaxis: {
                    labels: {
                    style: {
                        colors: ['#fff']  
                      },
                    },
                    title: {
                        text: "Hits",
                        align: "center",
                        style: {
                            color :'#fff',
                            fontWeight: 300,
                        }
                    }
                  },
                  title: {
                    text: "Performance",
                    style: {
                        color: "#fff"
                    }
                  },
                  legend: {
                    show: true,
                    position: 'top'
                  },
                  grid: {
                    borderColor: '#515252'
                  },
                  fill: {
                    colors: ['#F44336', '#E91E63', '#9C27B0']
                  },
                xaxis: {
                    categories: Object.keys(performanceData),
                    labels: {
                        style: {
                            colors: ['#fff']  
                          },
                    },
                    axisBorder: {
                      show: true,
                      color: "#515252"
                  },
                    min :20,
                    max: 60,
                    tickAmount: 10
                }
            }
        } series={
            [{
                name: '# of Hits',
                data: Object.values(performanceData),
                
            }]} type="bar" width={500} height={250} />
    </div>
}

export default Performance 