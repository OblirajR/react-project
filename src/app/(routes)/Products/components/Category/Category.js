"use client"
import styles from './Category.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Category = (props)=>{
    const [show,setShow] = useState()
    let {cat} = props
    return <tr className={show ?styles.display : ''}>
        <td>{cat}</td>
        <td>
            <a href='#' className={styles.anc} onClick={() => setShow(true)}>
                <FontAwesomeIcon className={styles.fas} icon={faTrashCan} size='lg' style={{color: "#fcfcfc",}} />
            </a>
        </td>
    </tr>
}

export default Category