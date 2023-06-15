
import Icons2 from '../Icons2/Icons2'
import Logout from '../Logout/Logout'
import styles from './Fulltop2.module.css'

const Fulltop2 =() =>{
    return <div className={styles.top}>
        <div className={styles.container}>
            <a href="" className={styles.anchor}>
                <h1 className={styles.header}>PRODUCT ADMIN</h1>
            </a>
            <Icons2/>
            <Logout/>
        </div>
    </div>
}

export default Fulltop2 