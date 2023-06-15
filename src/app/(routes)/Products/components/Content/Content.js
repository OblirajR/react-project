"use client"
import { useEffect, useState } from 'react'
import Producttable from '../Producttable/Producttable'
import styles from './Content.module.css'
import axios from 'axios'
import Category from '../Category/Category'
import { useRouter } from 'next/navigation'
import Table from '../Table/Table'
import ReactModal from 'react-modal'

const Content = ()=>{
    let {push} = useRouter()

    let [productsData,setproductsData] = useState([])
    let [categoriesdata,setcategories]= useState([])
    let [click,setClick]= useState(false)
    const [isOpen, setIsOpen] = useState(false)
    let [adding,setadding]=useState([])
    

    useEffect(()=>{
        axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json ")
        .then(res=>{
            setproductsData(res.data.productsPage.products)
            setcategories(res.data.productsPage.categories)
        })
        .catch(err=>console.log(err))
    })

    const Addnewproduct=()=>{
        push('./Add-products')
    }
    const clickOperation=()=>{
        setClick(true)
    }
    const addCategory=(e)=>{
        let sed =e.target.value
        setadding(sed) 
    }
    console.log(adding)
    return <div className={styles.container}>
            <div className={styles.products}>

                    <div className={styles.scroll}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>PRODUCT NAME</th>
                                    <th>UNIT SOLD</th>
                                    <th>IN STOCK</th>
                                    <th>EXPIRY DATE</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {productsData.map((item,i)=> <Table click={click} pro={item} key={"it"+i} /> )}
                                {JSON.parse(localStorage.getItem("product")) && <Producttable click={click} pro={JSON.parse(localStorage.getItem("product"))} /> }
                            </tbody>
                        </table>
                    </div>
                <a href='#' className={styles.btn} onClick={Addnewproduct}>Add new product</a>
                <button className={styles.btn} onClick={clickOperation}>Delete selected products</button>
            </div>
            <div className={styles.categories}>
                <h2 className={styles.head}>Product categories</h2>
                <div className={styles.tablediv}>
                    <table className={styles.table}>
                        <tbody>
                            {categoriesdata.map((item,i)=><Category cat={item} key={"it"+i} />)}
                            {adding.length>0 && <Category cat={adding}/>}
                        </tbody>

                    </table>
                </div>
                <button className={styles.btn} style={{marginTop: '30px'}} onClick={() => setIsOpen(true)}>add new category</button>
                 <ReactModal isOpen={isOpen} onRequestClose={()=>setIsOpen(false)} className={styles.modal}>
                            <div className={styles.cont}>
                                <h2 className={styles.head}>Enter the Category</h2>
                                <input type="text" id='name' className={styles.formcontrol3} onChange={(e)=>addCategory(e)} required/>
                            </div>
                            <button className={styles.btn2}  onClick={() => setIsOpen(false)}>Add Category </button>
                            <button className={styles.btn2} onClick={() => setIsOpen(false)}>Close </button>
                    </ReactModal>
                    
                
            </div>
    </div>
}

export default Content