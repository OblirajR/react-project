"use client"
import Footer from "@/app/components/Footer/Footer"
import Fulltop1 from "@/app/components/Fulltop1/Fulltop1"
import styles from './page.module.css'
import { useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"

const Addproduct =()=>{

    const hiddenFileInput = useRef(null);
    let {push} = useRouter()
    let [proData,setproData] = useState({
        name: '',
        description: '',
        unitSold: '',
        expireDate: '',
        stock: 0
    })

    const handleChange = event => {

        if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0];
        console.log(i)
        const body = new FormData();
        body.append("image", i);
        }
    };
    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const addProduct=()=>{
        push('./Products')
        localStorage.setItem("product",JSON.stringify(proData)) 

    }
    const ChangingProduct=(e,field)=>{
        if(field=="name"){
            setproData({
                ...proData,
                name: e.target.value
            })
        }
        else if(field=="des"){
            setproData({
                ...proData,
                description: e.target.value
            })
        }
        else if(field=="unitssold"){
            setproData({
                ...proData,
                unitSold: e.target.value
            })
        }
        else if(field=="expiry"){
            setproData({
                ...proData,
                expireDate: e.target.value
            })
        }
        else if(field=="stock"){
            setproData({
                ...proData,
                stock: e.target.value
            })
        }
    }



    return <div>
        <Fulltop1/>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.row}>
                        <h2 className={styles.head}>Add Product</h2>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.col1}>
                            <form>
                                <div className={styles.formgroup}>
                                    <label for="name">Product Name</label>
                                    <input type="text" id='name' className={styles.formcontrol} required onChange={(e)=>ChangingProduct(e,"name")} />
                                </div>
                                <div className={styles.formgroup}>
                                    <label for="description">Description</label>
                                    <textarea rows="3" id="description" className={styles.formcontrol2} onChange={(e)=>ChangingProduct(e,"des")} required ></textarea>
                                </div>
                                <div className={styles.formgroup}>
                                    <label for="category">Units sold</label><br/>
                                    <input type="text" id='category' className={styles.formcontrol} onChange={(e)=>ChangingProduct(e,"unitssold")} required/>
                                    {/* <select className={styles.select} id="category">
                                        <option selected>Selected category</option>
                                        <option value="1">New Arrival</option>
                                        <option value="2">Most Popular</option>
                                        <option value="3">Trending</option>
                                    </select> */}
                                </div>
                                <div className={styles.row1}>
                                    <div className={styles.formgroup1}>
                                        <label for="expire_date">Expire Date</label>
                                        <input id="expire_date" type="date" className={styles.formcontrol1} onChange={(e)=>ChangingProduct(e,"expiry")} data-large-mode="true" />
                                    </div>
                                    <div className={styles.formgroup1}>
                                        <label for="stock">Units in Stock</label>
                                        <input id="stock" type="text" className={styles.formcontrol1} onChange={(e)=>ChangingProduct(e,"stock")} required/>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className={styles.col2}>
                            <div className={styles.icondiv}>
                                <FontAwesomeIcon className={styles.fas} icon={faCloudArrowUp} size="2xl" style={{color: "#f9fafa",}} />
                            </div>
                            <div className={styles.custom}>
                            <input className={styles.file} type='file' 
                                ref={hiddenFileInput}
                                onChange={handleChange}
                                accept="image/*"
                                style={{ display: 'none' }}/>

                            <button  onClick={handleClick} className={styles.btn}>Upload new photo</button>
                            </div>
                        </div>
                        <div className={styles.col3}>
                            <button className={styles.btn} onClick={addProduct}>Add product now</button>

                        </div>
                    </div>

                </div>
            </div>

        <Footer/>
    </div>
}

export default Addproduct