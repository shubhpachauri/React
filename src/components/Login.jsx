// Login.js
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Registartion from './Registartion';
import '../App.css';

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob:'',
    cuisine: [],
  });

  useEffect(() => {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, []); // Add an empty dependency array to run this effect only once

  return (
    <div class="container">
      <h2>Login Form </h2>
      <form className="row g-3 needs-validation" noValidate>
      <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">Username</label>
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
          <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        </div>
      </div>

       <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">Password</label>
        <div class="input-group has-validation">
          <input type="password" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
          <div class="invalid-feedback">
            Please enter valid password
          </div>
        </div>
      </div>

            <div className="centered-button-container">
            <button className="btn btn-primary" type="submit"> Login
            </button> 
            </div>
            <br/>
           <> Not Registarted yet ? <Link to="/Registartion"><button className="btn btn-primary">  Registartion Now</button></Link></>
      </form>
      
    </div>
      );
} 

export default Login;
