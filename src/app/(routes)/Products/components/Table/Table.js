"use client"
import Producttable from "../Producttable/Producttable"
import { useState } from "react"

const Table =(props)=>{

    let {pro,click} = props
    let [info,setInfo] = useState()
    const receivedInfo=(info)=>{
        console.log(info)
        setInfo(info)
    }


    return <>
        <Producttable pro={pro} click={click} receivedInfo={receivedInfo} />
    </>
}
export default Table 