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
    <form class="container-fluid" onSubmit={handleSubmit}>
            <div id="cardLogin" class="card row">
                <div class="card-body">
                    <div class="row" id="picWrapper">
                          <img src="im4.png" id="logo"></img>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-sm-6 col-lg-2">Username</label>
                        <div class="col-10">
                          <input name="username" type="text" class="form-control" placeholder="Please enter your username here..." onChange={handleChange} value={userValues.username} required></input>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-sm-6 col-lg-2">Password</label>
                        <div class="col-10">
                          <input name="password" type="password" class="form-control" placeholder="Please enter your password here..." onChange={handleChange} value={userValues.password} required></input>
                        </div>
                      </div>
                      <div class="container">
                          <div class="row">
                            <div class="col-7">

                                Not Registered? <Link to='/register'>click here</Link> to join our community!
                                
                              </div>
                              <div class="col-5">
                                <button type="submit" id="loginButton" class="btn btn-outline-primary" disabled={!validateForm()}>Login</button>
                              </div>
                          </div>
                      </div>
                </div>
              </div>
        </form>

  );
}

export default LoginPage;

