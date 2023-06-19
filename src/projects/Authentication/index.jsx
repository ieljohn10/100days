import { useState } from 'react'
import Login from '../../pages/Login'
import classNames from 'classnames';
import './authentication.scss'
import Signup from '../../pages/Signup';

export default function Authentication() {
  const [switchToggle, setSwitchToggle] = useState(0);

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


  // console.log(switchToggle, 'toggle')
  return(
    <div className="authentication">
      <div className="container">
        <div className="switch-container">
          <span onClick={() => switchHandler(0)}>Log in</span>
          <span onClick={() => switchHandler(1)}>Sign up</span>
          {/* <div className={classNames('toggle', {['active'] : switchToggle === 1, ['inactive'] : switchToggle === 0})} /> */}
          <div className={classNames('toggle', {['active'] : switchToggle === 1})} />
        </div>
        <div className="content">
          { switchToggle === 0 ? <Login /> : <Signup /> }
        </div>
      </div>
    </div>
  )
}