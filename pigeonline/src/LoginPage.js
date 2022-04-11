import { Link,useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { useState } from 'react';



function LoginPage({UsersArray, nowOnline}) {

  const [userValues, setUserValues] = useState({username:'', password:''});
  var navigate = useNavigate();
  function validateForm() {
    return userValues.username.length > 0 && userValues.password.length > 7;
  }
  
  function handleSubmit(event) {
    if(UsersArray.find((e) => e.username === userValues.username && e.password === userValues.password)) {
      nowOnline.onlineUser = UsersArray.find((e) => e.username === userValues.username);
      navigate('/chat');
    }
    else {
      document.getElementById('wrongInput').style.display = "block";
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
                    <div className="row">
                      <div className="col-12">
                        <img src="LoginLogo.jpg" id="logo" alt="logo"></img>
                        <p id="slogan">Communicate like the old days.Nowadays.</p>
                        <br></br>
                      </div>
                    </div>
                    <div className="alert alert-danger alert-dismissable fade show" role="alert" id="wrongInput">
                      Wrong username or password. Please try again, or <Link to='/register'>click here</Link> if you are not registered.
                      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" id="close-alert-btn"></button>
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
                            <div className="col-6">

                                Not Registered? <Link to='/register'>click here</Link> to join our community!
                                
                              </div>
                              <div className="col-6">
                                <button type="submit" id="loginButton" className="btn btn-outline-primary" disabled={!validateForm()}>
                                  Login
                                </button>
                              </div>
                          </div>
                          <br></br>
                          <p id="moreInfo">PigeOnline is the fastest and safest way to communicate.(sample)</p>
                      </div>
                </div>
              </div>
        </form>

  );
}

export default LoginPage;

