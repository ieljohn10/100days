import './signup.scss';

export default function Signup() {
  return(
    <div className="signup">
      <div className="form">
        <p>Fill the necessary data: </p>
        <div className="input-item user-item" >
          <input type="text" className="input" placeholder='Username'/>
        </div>
        <div className="input-item user-item" >
          <input type="text" className="input" placeholder='Password'/>
        </div>
        <div className="input-item user-item" >
          <input type="text" className="input" placeholder='Re-enter password'/>
        </div>
      </div>
      <button className='signup-btn'>Sign up</button>
    </div>
  )
}
