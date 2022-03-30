import './RegisterPage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function RegisterPage({UsersArray}) {
  const [userValues, setUserValues] = useState({username:'', password:'', validatePass:'',displayName:'', picture:''});

  function validateForm() {
    return validateUserName() && validatePassword() && validatePassword2() && validateDisplayName() && validatePicture();
  }

  function validateUserName() {
    return userValues.username > 0 && !UsersArray.find((e) => e.username == userValues.username);
  }

  function validateDisplayName() {
    return userValues.displayName > 0
  }

  function validatePassword() {
    return userValues.password > 7 
  }

  function validatePassword2() {
    return userValues.password == userValues.validatePass;
  }


  function validatePicture() {
    return true;
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setUserValues({
      ...userValues,
      [name]:value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
    <div id="cardRegister" className="card row">
      <div className="card-body">
        <div className="row" id="picWrapper">
          <img src="im4.png" id="logo" />
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">Username</label>
          <div className="col-10">
            <input name="username" type="text" className={`form-control ${validateUserName() ? "" : ""}`} placeholder="Please enter your username here..." onChange={handleChange} />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">Password</label>
          <div className="col-10">
            <input name="password" type="password" className={`form-control ${validatePassword() ? "" : ""}`} placeholder="Please enter your password here..." onChange={handleChange}/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">Verify password</label>
          <div className="col-10">
            <input name="validatePass" type="password" className={`form-control ${validatePassword2() ? "" : ""}`} placeholder="Please enter your password again..." onChange={handleChange}/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">Display name</label>
          <div className="col-10">
            <input name="displayName" className={`form-control ${validateDisplayName() ? "" : ""}`} placeholder="Please enter your display name..." onChange={handleChange}/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">Upload picture</label>
          <div className="col-10">
            <input name="picture" type="file" id="inputGroupFile02" className={`form-control ${validatePicture() ? "" : ""}`} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-5">
              Already Registered? <Link to='/'>click here!</Link>
            </div>
            <div className="col-7">
              <button type="submit" id="loginButton" className="btn btn-outline-primary" disabled={!validateForm()}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  );
}

export default RegisterPage;
