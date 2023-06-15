
import Icon from '../Icon/Icon'
import styles from './Topbar.module.css'

const Topbar =() =>{
    return <div className={styles.top}>
        <div className={styles.container}>
            <a href="" className={styles.anchor}>
                <h1 className={styles.header}>PRODUCT ADMIN</h1>
            </a>
            <Icon/>
        </div>
    </div>
}

export default Topbar