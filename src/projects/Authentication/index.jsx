import { useState } from 'react'
import Login from '../../pages/Login'
import './authentication.scss'

export default function Authentication() {
  const [switchToggle, setSwitchToggle] = useState(1);

  // 1 = sign in
  // 0 = sign up

  const switchHandler = (toggle) => {
    switch(toggle) {
      case 0:
        setSwitchToggle(0);
        break;
      case 1:
        setSwitchToggle(1);
        break;
      default:
        setSwitchToggle(1)
        break;
    }
  }


  console.log(switchToggle, 'toggle')
  return(
    <div className="authentication">
      <div className="container">
        <div className="switch-container">
          <span className={switchToggle === 1 ? "login active" : "login"} onClick={() => switchHandler(1)}>Log in</span>
          <span className={switchToggle === 0 ? "signup active" : "signup"} onClick={() => switchHandler(0)}>Sign up</span>
        </div>
        <Login />
        <p>OR</p>
        
      </div>
    </div>
  )
}