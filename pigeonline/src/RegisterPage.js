import './RegisterPage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function RegisterPage({UsersArray}) {
  const [userValues, setUserValues] = useState({username:'', password:'', validatePass:'',displayName:'', picture:''});
  
  function validateForm() {
    /*
    validateUserName();
    validatePassword();
    validatePassword2();
    validateDisplayName();
    validatePicture();
    */
    return validateUserName() && validatePassword() && validatePassword2() && validateDisplayName() && validatePicture();
  }

  function validateUserName() {
    let x = document.getElementById("usernameError")
    if(userValues.username) {
      if(!UsersArray.find((e) => e.username == userValues.username)) {
          x.innerHTML = "";
      }
    } else {
        x.innerHTML = "Username must contain at least one character."
    }
    
    return userValues.username > 0 && !UsersArray.find((e) => e.username == userValues.username);
  }

  function validateDisplayName() {
    let x = document.getElementById("displayNameError")
    if(userValues.displayName) {
        x.innerHTML = "";
    }
    else {
        x.innerHTML = "The Display name must contain at least one character."
    }
    return userValues.displayName > 0
  }

  function validatePassword() {
    let x = document.getElementById("passwordError")
    if (userValues.password > 7) {
      x.innerHTML = "";
    }
    else {
      x.innerHTML = "Password must contain at least 8 characters."
    }
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


/*
  function handleInvalid(str,elementName) {
    var func;
    switch(elementName) {
      case 'username':
        func = validateUserName;
        break;
      case 'password':
        func = validatePassword;
        break;
      case 'password2':
        func = validatePassword2;
        break;
      case 'displayName':
        func = validateDisplayName;
        break;
      case 'picture':
        func = validatePicture;
        break;
    }
    if (!func()) {
      return (
        <div>
          {str}
        </div>
      );
    }
    else {
      return(<></>);
    }
  }
*/


  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
    <div id="cardRegister" className="card row">
      <div className="card-body">
        <div className="row" id="picWrapper">
          <img src="im4.png" id="logo" />
        </div>
        <div className="mb-3 row">
          <label for="username" className="col-sm-6 col-lg-2">Username</label>
          <div className="col-10">
            <input id="username" name="username" type="text" className="form-control" placeholder="Please enter your username here..." onChange={handleChange} />
            <div id="usernameError" className="error-divs">
            Username must contain at least one character.
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
