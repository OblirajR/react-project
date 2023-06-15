"use client"
import { useState } from 'react'
import styles from './Login.module.css'
import { useRouter } from 'next/navigation'

const Login =() =>{
    let [dataEntered,setdataEntered] = useState('')
    let [passEntered,setpassEntered] = useState('')
    let {push} = useRouter()

    const clickEvent = () =>{
      if(dataEntered.length>4 && dataEntered==passEntered){
        localStorage.setItem("username",dataEntered)
        localStorage.setItem("password",passEntered)
        alert("Login Succesful")
        push('/Dashboard')
      }
      else{
        alert("Enter valid Username and Password")
      }
        
    }
    const valueEntered =(e,id)=>{
        if(id=="user"){
            let enter = e.target.value
            setdataEntered(enter)
            
        }
        else{
            let enter1 = e.target.value
            setpassEntered(enter1)
        }
    }


    return <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.head}>Welcome to Dashboard, Login</div>
                    <div className={styles.col}>
                        <div className={styles.content}>
                            <div className={styles.form}>
                                <div className={styles.formgroup}>
                                    <label for="username">Username</label><br/>
                                    <input name="username" type="text" className={styles.input} id="username" required onChange={(e)=>valueEntered(e,"user")}/>
                                </div>
                                <div className={styles.formgroup}>
                                    <label for="password">Password</label><br/>
                                    <input name="password" type="password" className={styles.input} id="password" required onChange={(e)=>valueEntered(e,"pass")}/>
                                </div>
                                <div>
                                    <button type="submit" className={styles.btn} onClick={clickEvent}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
}

export default Login 