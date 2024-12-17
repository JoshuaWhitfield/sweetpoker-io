import { Form, FormGroup, Label, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import React, { useState } from 'react';

import { setUsername, setLoggedIn } from '../../actions/accountActions.js';
import { updateState } from '../../actions/stateActions.js';
import { setBalance } from '../../actions/balanceActions';
import { checkUser, addUser } from '../../utils/api.js';
import { store } from '../../store';

import XYSpacing from '../Styling/XYSpacing.js';

import md5 from 'md5';
import axios from 'axios';


const Signup = (props) => {
  const [formData, setFormData] = useState({
    'email': '',
    'username': '',
    'password': '',
  });
  const [showPassword, setShowPassword] = useState(false); // State to control password visibility
  const [errors, setErrors] = useState({
    passwordLength: false,
    validUsername: false,
    validEmail: false,
    existingEmail: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error messages when user types
    setErrors({
      passwordLength: false,
      validEmail: false,
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the state for password visibility
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input format error handling:
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
        setErrors({ ...errors, validEmail: true });
        return;
    }

    if (formData.username.length > 15 || formData.username.length < 3) {
        setErrors({ ...errors, validUsername: true });
        return;
    }

    if (formData.password.length < 6 || formData.password.length > 15) {
        setErrors({ ...errors, passwordLength: true });
        return;
    }

    // Prepare data for signup
    const signupData = {
        email: formData.email.toLowerCase(),
        username: formData.username,
        password: formData.password,  // Send the plain password securely over HTTPS, backend will hash
    };

    axios.post('http://localhost:3000/sign-up', signupData)
    .then(response => {
      // Assume the server returns the user data without password
      console.log('Signup successful:', response.data);
      const { username, balance } = response.data.user;
      store.dispatch(setUsername(username));
      store.dispatch(setBalance(balance));
      store.dispatch(setLoggedIn(true));
      navigate('/');
      store.dispatch(updateState());
    })
    .catch(error => {
      console.log('Signup failed:', error);
      if (error.response && error.response.status === 400) {
        setErrors({ ...errors, existingEmail: true });
      }
    });
}


  return (
    <div>
      <Form className='basic-card mx-auto'>
        <FormGroup>
          <XYSpacing height='20px' />
          <Label style={{ display: 'flex', justifyContent: 'center' }}><h3>Sign Up</h3></Label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='email'
            value={formData.email}
            onChange={handleChange}
            className='custom-input flex jcc mx-auto'
            style={{
              width: '70%',
            }}
          ></input>
          {errors.validEmail && <div className='flex jcc' style={{height: '5px', marginTop: '-5px'}}><p className="error-message">invalid email!</p></div>}
          {errors.existingEmail && <div className='flex jcc' style={{height: '5px', marginTop: '-5px'}}><p className="error-message">account already exists!</p></div>}
        </FormGroup>
        <FormGroup>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='username'
            value={formData.username}
            onChange={handleChange}
            className='custom-input flex jcc mx-auto'
            style={{
              width: '70%',
            }}
          ></input>
          {errors.validUsername && <div className='flex jcc' style={{height: '5px', marginTop: '-5px'}}><p className="error-message">username must be 3 to 15 characters!</p></div>}
        </FormGroup>
        <FormGroup>
          <input
            type={showPassword ? 'text' : 'password'} // Toggle between text and password type
            name='password'
            id='password'
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
            className='custom-input flex jcc mx-auto'
            style={{
              width: '70%',
            }}
          ></input>
          {/* Password visibility toggle button */}
          <Button
          className='password-toggle util-button flex jcc aic'
          onClick={togglePasswordVisibility}
          style={{
              transform: 'translateX(-108px)',
              margin: '-33px 0px 0px 455px',
          }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
          {errors.passwordLength && <div className='flex jcc hfc' style={{height: '2px', marginTop: '1px'}}><p className="error-message">password must be 6 to 15 characters!</p></div>}
        </FormGroup>

        <Button className='button mx-auto flex jcc' type='submit' onClick={handleSubmit} style={{ height: '43px', width: '86px', border: 'none' }}>
          <p>signup</p>
        </Button>
        <div className='flex dir-row jcc mt-3'>
          <Link className='styled-link' to={'/login'}><p className='light-text link-text'>log in</p></Link>
        </div>
        <br />
      </Form>
    </div>
  );
}

export default Signup;