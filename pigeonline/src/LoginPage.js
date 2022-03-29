import { Link } from 'react-router-dom';
import './LoginPage.css';


function LoginPage() {
  return (
    <div class="container-fluid">
            <div id="cardLogin" class="card row">
                <div class="card-body">
                    <div class="row" id="picWrapper">
                          <img src="im4.png" id="logo"></img>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-sm-6 col-lg-2">Username</label>
                        <div class="col-10">
                          <input type="text" class="form-control" placeholder="Please enter your username here..."></input>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-sm-6 col-lg-2">Password</label>
                        <div class="col-10">
                          <input type="password" class="form-control" placeholder="Please enter your password here..."></input>
                        </div>
                      </div>
                      <div class="container">
                          <div class="row">
                            <div class="col-7">

                                Not Registered? <Link to='/register'>click here</Link> to join our community!
                                
                              </div>
                              <div class="col-5">
                                <button type="button" id="loginButton" class="btn btn-outline-primary">Login</button>
                              </div>
                          </div>
                      </div>
                </div>
              </div>
        </div>

  );
}

export default LoginPage;
