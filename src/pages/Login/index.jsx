import { useRef, useState } from 'react';
import './login.scss';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const acceptedInput = /^[a-z0-9_-]{6,12}$/;

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const checkUsername = (userInput) => {
    if(!userInput.match(acceptedInput)) {
      console.log('Please provide 6-12 a-z0-9 for username')
    } else {
      setUsername(userInput)
    }
  }

  const checkPassword = (passInput) => {
    if(!passInput.match(acceptedInput)) {
      console.log('Please provide 6-12 a-z0-9 for password')
    } else {
      setPassword(passInput)
    }
  }

  const showPasswordHandler = () => {
    setShowPassword(prev => !prev)
    console.log(showPassword, 'click')
  }

  const handleLogin = () => {
    checkUsername(usernameRef.current.value);
    checkPassword(passwordRef.current.value);

    if(!userName && !password) {
      if(!userName) {
        console.log('wrong username')
      } else if(!password) {
        console.log('wrong password')
      } else {
        console.log('everything if fucked')
      }
    } else {
      console.log('Congrats')
    }
  }

  return(
    <div className="login">
      <div className="form">
        <p>Please login your account</p>
        <div className="input-item user-item" >
          <input type="text" ref={usernameRef} className="input" placeholder='Username'/>
        </div>
        <div className="input-item password-item">
          <input type={showPassword ? 'text' : 'password'} ref={passwordRef} className="input" placeholder='Password'/>
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
      <button className='login-btn' onClick={() => handleLogin()}>Log in</button>
    </div>
  )
}