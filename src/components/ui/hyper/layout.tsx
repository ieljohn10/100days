import { Link } from "react-router-dom"
import ArrowUp from '../../../assets/hyper/icon-arrow-up.svg'
import ArrowDown from '../../../assets/hyper/icon-arrow-down.svg'
import style from './style.module.scss'

const Layout:React.FC<any> = () => {
  return (
    <>
      <div className={style.headerContainer}>
        <Link to='features'>Features</Link>
        <Link to='company'>Company</Link>
        <Link to='careers'>Careers</Link>
        <Link to='about'>About</Link>
      </div>
    </>
  )
}
export default Layout