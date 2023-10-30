import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
export default function Registartion() {

    const [selectedCusine, setSelectedCusine] = useState([]);
    const [isCusineValid, setIsCusineValid] = useState(true);
    const [dob, setDob] = useState('');
    const [isDobValid, setIsDobValid] = useState(true);

    const handleDateChange = (event) => {
      console.log("sdjsd")
      const enteredDob = event.target.value;
      setDob(enteredDob);
      var dateValidate = document.getElementById("validationCustom03");
  
      // Custom validation for Date of Birth
      const currentDate = new Date();
      const dobDate = new Date(enteredDob);
      const age = currentDate.getFullYear() - dobDate.getFullYear();

      if (enteredDob === '' || age < 18) {

        setIsDobValid(false);
        dateValidate.classList.add("is-invalid");
        return false;
      } else {
       
        setIsDobValid(true);
        {dateValidate.classList.replace("is-invalid","is-valid");}
        {dateValidate.classList.add("is-valid")}
        return true;
      }
    };  
  
    const handleChange = (event) => {
      const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
      setSelectedCusine(selectedOptions);
    };
  
    const handleSubmit = (event) => {
      var custineValidate = document.getElementById("validationServer04");
      event.preventDefault();
     if(!handleDateChange())
     {
      return; 
     }
      if( event.target.value == "") 
      {
        setIsDobValid(false);
        return;
      }
      if (selectedCusine.length === 0) {
        setIsCusineValid(false);
        custineValidate.classList.add("is-valid");
        // ${isCusineValid ? 'is-valid' : 'is-invalid'}
        return;
      } else {
        setIsCusineValid(true); 
      }
  
      // Handle form submission here
      console.log('Selected Cusine:', selectedCusine);
    };
  
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
      <h2>Registartion Form </h2>
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">
        Please provide a valid First Name
      </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">
        Please provide a valid Last Name
      </div>
        </div>

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

      <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">Date Of Birth</label>
          <input
            type="date"
            class={`form-control`}
            id="validationCustom03"
            required
            value={dob}
            onChange={handleDateChange}
          />
          <div className="invalid-feedback">
            {"Please provide a valid Date of Birth (age must be 18 or more)."}
          </div>
        </div>

    <div class="col-md-3">
    <label for="validationServer04" class="form-label">Type Of Cusine</label>
    <select class={`form-control`} id="validationServer04" aria-describedby="validationServer04Feedback" multiple required>
      <option selected disabled >Choose...</option>
      <option value="northIndian">North Indian</option>
      <option value="southIndian">South Indian</option>
      <option value="thai">Thai</option>
      <option value="Chinnes">Chinnes</option>
      <option value="Italian">Italian</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please at least one .
    </div>
  </div>

        {/* Other form fields... */}
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="centered-button-container">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
      <div>
      <> Registarted already ? <Link to="/"><button className="btn btn-primary">  Login Now</button></Link></>
      </div>
    </div>
  );
}
