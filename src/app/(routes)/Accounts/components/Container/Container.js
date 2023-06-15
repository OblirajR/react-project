"use client"
import { useEffect, useState,useRef } from 'react'
import styles from './Container.module.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { ST } from 'next/dist/shared/lib/utils'

const Container=()=>{

    let [accountsData,setaccountsData]= useState({})
    let [valueSelect,setvalueSelect]=useState({
        email : '',
        name : '',
        password: '',
        phone: '',
        profilePic: '',
    })
    let [inputData,setinputData] =useState({
        email : '',
        name : '',
        password: '',
        phone: '',
        profilePic: '',
    })

    useEffect(()=>{
        axios.get(" https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json") 
        .then(res=>setaccountsData(res.data.accountsPage))
        .catch(err=>(console.log(err)))
    })

    const changingData=(e,field)=>{
        if(field=="name"){
            setinputData({
                    ...inputData,
                    name: e.target.value,
                    
                })
                console.log(e.target.value)
        }
        else if(field=="email"){
            setinputData({
                    ...inputData,
                    email: e.target.value
                })
        }
        else if(field=="pass"){
            setinputData({
                    ...inputData,
                    password: e.target.value
                })
        }
        else if(field=="phone"){
            setinputData({
                    ...inputData,
                    phone: e.target.value
                })
        }
        
    }
    const updatingInfo=(e)=>{
        console.log(e)
        e.defaultPrevented= true
        localStorage.setItem(valueSelect,JSON.stringify(inputData))
        confirm("Information Updated Successfully")
    }

    const selectChange=(e)=>{
        let val = e.target.value
        console.log(e.target.value)
        setvalueSelect(val)
        // console.log(localStorage.getItem(val))
        if(localStorage.getItem(val)==null){
            val == "Admin" && setinputData(accountsData.Admin)
        }
        else{
            setinputData(JSON.parse(localStorage.getItem(val))) 
            console.log(JSON.parse(localStorage.getItem(val)))
        }
        if(localStorage.getItem(val)==null){
            val == "Editor" && setinputData(accountsData.Editor)
        }
        else{
            setinputData(JSON.parse(localStorage.getItem(val))) 
            console.log(JSON.parse(localStorage.getItem(val)))
        }
        if(localStorage.getItem(val)==null){
            val == "Merchant" && setinputData(accountsData.Merchant)
        }
        else{  
            setinputData(JSON.parse(localStorage.getItem(val))) 
            console.log(JSON.parse(localStorage.getItem(val)))
        }
        if(localStorage.getItem(val)==null){
            val == "Customer" && setinputData(accountsData.Customer)
        }
        else{
            setinputData(JSON.parse(localStorage.getItem(val))) 
            console.log(JSON.parse(localStorage.getItem(val)))  
        }     
        val == "Select account" && setinputData({
            email : '',
            name : '',
            password: '',
            phone: '',
            profilePic: '',
        })
    }
    const hiddenFileInput = useRef(null);

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
    
    return <div className={styles.container}>
        <div className={styles.listofaccounts}>
            <h2 className={styles.head}>List Of Accounts</h2>
            <p className={styles.para}>Accounts</p>
            <select className={styles.select} onChange={(e)=>selectChange(e)}>
                <option>Select account</option>
                <option>Admin</option>
                <option>Editor</option>
                <option>Merchant</option>
                <option>Customer</option>
            </select>
        </div>
        <div className={styles.accdiv}>
            <div className={styles.main}>
                <div className={styles.imgdiv}>
                    <h2 className={styles.head}>Change Avatar</h2>
                    <div className={styles.imgcontainer}>
                        <img src={inputData.profilePic=="" ? "https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png" : inputData.profilePic} alt="img"/>
                        <a href="" className={styles.avatar}><FontAwesomeIcon className={styles.fas} icon={faTrashCan} size='xl' style={{color: "#fcfcfc",}} /></a>
                    </div>
                    <input className={styles.file} type='file' 
                                ref={hiddenFileInput}
                                onChange={handleChange}
                                accept="image/*"
                                style={{ display: 'none' }}/>

                    <button  onClick={handleClick} className={styles.btn}>Upload new photo</button>
                    
                </div>
            </div>

            <div className={styles.settings}>
                <h2 className={styles.head}> Account Settings</h2>
                <div className={styles.form}>
                    <div className={styles.formgroup}>
                        <label for="name">Account Name</label>
                        <input id="name" name='name' type="text" className={styles.formcontrol} value={inputData.name} onChange={(e)=>changingData(e,"name")} />
                    </div>
                    <div className={styles.formgroup}>
                        <label for="email">Account Email</label>
                        <input id="email"  name="email" type="email" className={styles.formcontrol} value={inputData.email} onChange={(e)=>changingData(e,"email")} />
                    </div>
                    <div className={styles.formgroup}>
                        <label for="password">Password</label>
                        <input id="password" type="password" name="password" className={styles.formcontrol} value={inputData.password} onChange={(e)=>changingData(e,"pass")} />
                    </div>
                    <div className={styles.formgroup}>
                        <label for="password2">Re-enter Password</label>
                        <input id="password2" type="password" name="password2" className={styles.formcontrol} value={inputData.password} onChange={(e)=>changingData(e,"repass")} />
                    </div>
                    <div className={styles.formgroup}>
                        <label for="phone">Phone</label>
                        <input id="phone" type="tel" name="phone" className={styles.formcontrol} value={inputData.phone} onChange={(e)=>changingData(e,"phone")} />
                    </div>
                    <div className={styles.formgroup}>
                        <label ></label>
                       <button className={styles.btn} onClick={(e)=>updatingInfo(e)} >Update your profile</button>
                    </div>
                    <div className={styles.col}>
                        <button className={styles.btn}>delete your account</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
}

export default Container