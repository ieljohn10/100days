import { useState } from "react"
import logo from '../../../assets/hyper/logo.svg'
import Layout from "../hyper/layout"
import style from './style.module.scss'

const Header: React.FC<any> = () => {
  const [data, setData] = useState(false)
  console.log(data, setData, 'hahaha')
  return (
    <>
      <div className={style.container}>
        <div className={style.head1}>
          <img className={style.logo} src={logo} alt="" />
          <Layout />
        </div>
        <div className={style.head2}>
          <a className={style.loginButton}>Login</a>
          <a className={style.regButton}>Register</a>
        </div>
      </div>
    </>
  )
}

export default Header