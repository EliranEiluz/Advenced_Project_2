import { Link } from 'react-router-dom';
import './LoginPage.css';
import { useState } from 'react';



function LoginPage({UsersArray}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 7;
  }
  
  function handleSubmit(event) {
    if(UsersArray.find((e) => e.username == username && e.password == password)) {
      alert('succsess')
    }
    else {
      alert('failed')
    }
    event.preventDefault();
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
                          <input type="text" class="form-control" placeholder="Please enter your username here..." onChange={(e) => setUsername(e.target.value)} value={username}></input>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-sm-6 col-lg-2">Password</label>
                        <div class="col-10">
                          <input type="password" class="form-control" placeholder="Please enter your password here..." onChange={(e) => setPassword(e.target.value)} value={password}></input>
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
