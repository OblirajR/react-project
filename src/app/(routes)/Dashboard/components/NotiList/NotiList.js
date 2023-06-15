import { ST } from 'next/dist/shared/lib/utils'
import styles from './NotiList.module.css'


const NotiList = (props)=>{
    let {list} = props
    
    return <div className={styles.container}>
        <div className={styles.imgdiv}>
            <img className={styles.round} src={list.pic} alt={list.time}/>
        </div>
        <div className={styles.content}>
            <p className={styles.para}>{list.message}</p>
            <span className={styles.span}>{list.time} ago.</span>
        </div>
    </div>
}

export default NotiList