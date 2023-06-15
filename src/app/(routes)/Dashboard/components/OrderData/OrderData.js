
import styles from "./OrderData.module.css"

const OrderData = (props)=>{
    let {list}= props
   
    return <tr>
        <th><b>#{list.orderNo}</b></th>
        <td><div className={styles.circle}></div>{list.status}</td>
        <td><b>{list.operators}</b></td>
        <td><b>{list.location}</b></td>
        <td><b>{list.distance} km</b></td>
        <td>{list.startDate}</td>
        <td>{list.deliveryDate}</td>
    </tr>
}
export default OrderData