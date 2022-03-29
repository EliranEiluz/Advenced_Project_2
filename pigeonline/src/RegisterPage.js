import './RegisterPage.css';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="container-fluid">
    <div id="cardRegister" className="card row">
      <div className="card-body">
        <div className="row" id="picWrapper">
          <img src="im4.png" id="logo" />
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">Username</label>
          <div className="col-10">
            <input type="text" className="form-control" placeholder="Please enter your username here..." />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">Password</label>
          <div className="col-10">
            <input type="password" className="form-control" placeholder="Please enter your password here..." />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">Verify password</label>
          <div className="col-10">
            <input type="password" className="form-control" placeholder="Please enter your password again..." />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">display name</label>
          <div className="col-10">
            <input className="form-control" placeholder="Please enter your display name..." />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">upload picture</label>
          <div className="col-10">
            <input type="file" id="inputGroupFile02" className="form-control" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-5">
              Already Registered? <Link to='/'>click here</Link>
            </div>
            <div className="col-7">
              <button type="button" id="loginButton" className="btn btn-outline-primary">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default RegisterPage;
