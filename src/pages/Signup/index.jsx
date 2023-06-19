import { useRef, useState } from 'react';
import './signup.scss';

export default function Signup() {
  const [addUser, setAddUser] = useState([]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const acceptedInput = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;

  const handleUsername = (username) => {
    if(!username) {
      console.warn('Username is empty')
    } else {
        if(!username.match(acceptedInput)){
          console.warn('Please provide 6-12 a-z0-9 for username')
        } else{
          setUsername(username)
        }
    }
  }

  const handlePassword = (initialPassword, confirmPassword) => {
    if(!initialPassword && confirmPassword){
      console.warn('password1 is empty')
    } else if(initialPassword && !confirmPassword){
      console.warn('password2 is empty')
    } else if(!initialPassword && !confirmPassword){
      console.warn('All password are empty')
    } else {
        if(initialPassword === confirmPassword) {
          if(initialPassword.match(acceptedInput)){
            setPassword(initialPassword)
            
          } else {
            console.warn('Please provide 6-12 a-z0-9 for password')
          }
        } else {
          console.warn('Password are not the same')
        }
    }
  }

  const handleSignup = () => {
    handleUsername(usernameRef.current.value)
    handlePassword(passwordRef.current.value, confirmPasswordRef.current.value)
    // console.log(confirmPasswordRef.current.value)

  }
  
  console.log('user: ', username)
  console.log('password:', password)
  
  return(
    <div className="signup">
      <div className="form">
        <p>Fill the necessary data: </p>
        <div className="input-item user-item" >
          <input type="text" ref={usernameRef} className="input" placeholder='Username'/>
        </div>
        <div className="input-item user-item" >
          <input type="text" ref={passwordRef} className="input" placeholder='Password'/>
        </div>
        <div className="input-item user-item" >
          <input type="text" ref={confirmPasswordRef} className="input" placeholder='Re-enter password'/>
        </div>
      </div>
      <button className='signup-btn' onClick={() => handleSignup()}>Sign up</button>
    </div>
  )
}