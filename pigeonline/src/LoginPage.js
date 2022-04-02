import { Link } from 'react-router-dom';
import './LoginPage.css';
import { useState } from 'react';



function LoginPage({UsersArray}) {

  const [userValues, setUserValues] = useState({username:'', password:''});

  function validateForm() {
    return userValues.username.length > 0 && userValues.password.length > 7;
  }
  
  function handleSubmit(event) {
    if(UsersArray.find((e) => e.username == userValues.username && e.password == userValues.password)) {
      alert('succsess')
    }
    else {
      alert('failed')
    }
    event.preventDefault();
  }
  
  function handleChange(e) {
    const {name, value} = e.target;
    setUserValues({
      ...userValues,
      [name]:value
    })
  }

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
            <div id="cardLogin" className="card row">
                <div className="card-body">
                    <div className="row" id="picWrapper">
                          <img src="im4.png" id="logo"></img>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-6 col-lg-2">Username</label>
                        <div className="col-10">
                          <input name="username" type="text" className="form-control" placeholder="Please enter your username here..." onChange={handleChange} value={userValues.username} required></input>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className="col-sm-6 col-lg-2">Password</label>
                        <div className="col-10">
                          <input name="password" type="password" className="form-control" placeholder="Please enter your password here..." onChange={handleChange} value={userValues.password} required></input>
                        </div>
                      </div>
                      <div className="container">
                          <div className="row">
                            <div className="col-7">

                                Not Registered? <Link to='/register'>click here</Link> to join our community!
                                
                              </div>
                              <div className="col-5">
                              <Link to='/chat'>
                                <button type="submit" id="loginButton" className="btn btn-outline-primary" disabled={!validateForm()}>
                                  Login
                                </button>
                              </Link>
                              </div>
                          </div>
                      </div>
                </div>
              </div>
        </form>

  );
}

export default LoginPage;

