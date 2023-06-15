import Icons from '../Icons/Icons'
import Logout from '../Logout/Logout'
import styles from './Fulltop.module.css'

const Fulltop =() =>{
    return <div className={styles.top}>
        <div className={styles.container}>
            <a href="" className={styles.anchor}>
                <h1 className={styles.header}>PRODUCT ADMIN</h1>
            </a>
            <Icons/>
            <Logout/>
        </div>
    </div>
}

export default Fulltop