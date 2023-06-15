
import Icons1 from '../Icons1/Icons1'
import Logout from '../Logout/Logout'
import styles from './Fulltop1.module.css'

const Fulltop1 =() =>{
    return <div className={styles.top}>
        <div className={styles.container}>
            <a href="" className={styles.anchor}>
                <h1 className={styles.header}>PRODUCT ADMIN</h1>
            </a>
            <Icons1/>
            <Logout/>
        </div>
    </div>
}

export default Fulltop1