import './RegisterPage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function RegisterPage({UsersArray}) {
  const [userValues, setUserValues] = useState({username:'', password:'', validatePass:'',displayName:'', picture:''});
  
  function validateForm() {
    validateUserName()
    validatePassword()
    validatePassword2()
    validateDisplayName()
    validatePicture()
    return validateUserName() && validatePassword() && validatePassword2() && validateDisplayName() && validatePicture()
  }

  function validateUserName() {
    if(userValues.username.length > 0) {
        document.getElementById("usernameError").style.display = "none";
        document.getElementById("usedMessage").style.display = "none";
      if(UsersArray.find((e) => e.username === userValues.username)) {
        document.getElementById("usedMessage").style.display = "block"; 
      }
    }
    else {
      if(document.readyState == "complete") {
        document.getElementById("usedMessage").style.display = "none"; 
        document.getElementById("usernameError").style.display = "block";
      }
    }
    return userValues.username.length > 0 && !UsersArray.find((e) => e.username === userValues.username);
  }

  function validateDisplayName() {
    if(userValues.displayName.length > 0) {
      document.getElementById("displayNameError").style.display = "none";
    } else {
      if(document.readyState == "complete") {
        document.getElementById("displayNameError").style.display = "block";
      }
    }
    return userValues.displayName.length > 0;
  }

  function validatePassword() {
    if (userValues.password.length > 7) {
      document.getElementById("passwordError").style.display = "none";
    } else {
      if(document.readyState == "complete") {
        document.getElementById("passwordError").style.display = "block";
      }
    }
    return userValues.password.length > 7 
  }

  function validatePassword2() {
    if (userValues.password === userValues.validatePass && userValues.password.length > 0) {
      document.getElementById("validatePassError").style.display = "none";
    }
    else {
      if(document.readyState == "complete") {
        document.getElementById("validatePassError").style.display = "block";
      }
    }
    return userValues.password === userValues.validatePass;
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
          <img src="im4.png" id="logo" alt="logo"/>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">Username</label>
          <div className="col-10">
            <input name="username" type="text" className="form-control" placeholder="Please enter your username here..." onChange={handleChange} />
            <div id="usernameError" className="error-divs">
              Username must contain at least one character.
            </div>
            <div id="usedMessage" className="error-divs">
              Sorry, this username is already taken.
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">Password</label>
          <div className="col-10">
            <input name="password" type="password" className="form-control" placeholder="Please enter your password here..." onChange={handleChange}/>
            <div id="passwordError" className="error-divs">
              Password must contain at least 8 characters.
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">Verify password</label>
          <div className="col-10">
            <input name="validatePass" type="password" className="form-control" placeholder="Please enter your password again..." onChange={handleChange}/>
            <div id="validatePassError" className="error-divs">
              This field must be equal to the password above.
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">Display name</label>
          <div className="col-10">
            <input name="displayName" className="form-control" placeholder="Please enter your display name..." onChange={handleChange}/>
            <div id="displayNameError" className="error-divs">
              The display name must contain at least one character.
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-6 col-lg-2">Upload picture</label>
          <div className="col-10">
            <input name="picture" type="file" id="inputGroupFile02" className="form-control" onChange={handleChange}/>
            <div id="pictureError" className="error-divs">
            </div>
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
