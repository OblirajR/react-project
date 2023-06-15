"use client"
import styles from './Producttable.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Producttable =(props)=>{
    let {pro ,receivedInfo,click} = props
    const [show,setShow] = useState()
    const [check1,setcheck]= useState(false)
    let [clicking,setclicking]=useState(false)
    const onCheck=(e)=>{
        const checked = e.target.checked
        console.log(checked) 
        setcheck(checked)
    }
    // receivedInfo(show)
    

    
    return <tr className={`${show ?styles.display : ''} ${click && check1 ? styles.display : ''}`}> 
            <th>
                <input type="checkbox" className={styles.check} onChange={(e)=>onCheck(e)} />
            </th>
            <td>{pro.name}</td>
            <td>{pro.unitSold}</td>
            <td>{pro.stock}</td>
            <td>{pro.expireDate}</td>
            <td>
                <a href="#" className={styles.anc} onClick={() => setShow(true)}><FontAwesomeIcon className={styles.fas} icon={faTrashCan} size='lg' style={{color: "#fcfcfc",}} /></a>
            </td>
    </tr>
}


export default Producttable