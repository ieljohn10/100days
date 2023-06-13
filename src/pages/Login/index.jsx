import { useState } from 'react';
import './login.scss';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { , SiFacebook, SiGmail } from "react-icons/fc";
import { IcFcGoogleonName } from "react-icons/si";
export default function Login() {
  const [showPassword, setShowPassword] = useState(true);

  const showPasswordHandler = () => {
    setShowPassword(prev => !prev)
    console.log(showPassword, 'click')

  }

  return(
    <div className="login">
      <div className="form">
        <div className="input-item user-item" >
          <input type="text" className="input" placeholder='Username'/>
        </div>
        <div className="input-item password-item">
          <input type={showPassword ? 'text' : 'password'} className="input" placeholder='Password'/>
          {/* < {showPassword ? BsFillEyeSlashFill : BsFillEyeFill} className='show-password-icon' onClick={() => showPasswordHandler()}/> */}
          <span 
            className='show-password-icon'
            onClick={() => showPasswordHandler()}
            >
              {
                showPassword ? 
                <BsFillEyeSlashFill /> : 
                <BsFillEyeFill />
              }
          </span>          
        </div>
      </div>
      <button className='login-btn'>Log in</button>
    </div>
  )
}