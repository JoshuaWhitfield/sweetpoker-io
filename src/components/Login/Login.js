import { Form, FormGroup, Label, Button } from 'reactstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import HorizontalSpacing from '../Styling/HorizontalSpacing.js';
import XYSpacing from '../Styling/XYSpacing.js';

import { setUniKey, setLoggedIn, setUsername } from '../../actions/accountActions.js';
import { updateState } from '../../actions/stateActions.js';
import { setBalance } from '../../actions/balanceActions';
import { store } from '../../store';

import axios from 'axios';
import md5 from 'md5';


const Login = (props) => {
  const [formData, setFormData] = useState({
    'email': '',
    'password': '',
  });
  const [showPassword, setShowPassword] = useState(false); // State to control password visibility
  const [errors, setErrors] = useState({
    passwordLength: false,
    validEmail: false,
    validLogin: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    /* clear error messages when user types */
    setErrors({
      passwordLength: false,
      validEmail: false,
      validLogin: false,
    });
  }

  const togglePasswordVisibility = () => {
    /* toggle the state for password visibility */
    setShowPassword(!showPassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    /* check for password length */
    if (formData.password.length < 6 || formData.password.length > 15) {
      setErrors({ ...errors, passwordLength: true });
      return;
    }
    
    /* if no format errors, continue with login */
    const endpoint = `https://sweetpoker.io/sweet-poker-api/src/api/login.php?email=${formData.email}`
    const requestData = {'email': formData.email.toLowerCase()};
    axios.get(endpoint, requestData)
    .then(res => {
      /* handle the response logic here */
      const data = JSON.parse(res.data);
      if (data.md5 !== md5(formData.password)) {
        setErrors({ ...errors, validLogin: true });
        return;
      }
      store.dispatch(setUniKey(data.uniKey));
      store.dispatch(setUsername(data.username));
      store.dispatch(setBalance(data.balance));
      store.dispatch(setLoggedIn(true));
      navigate('/');
      store.dispatch(updateState());
    })
    .catch(error => {
      // Handle any errors here
      setErrors({ ...errors, validEmail: true });
      return;
    });

  }

  return (
    <div>
      <Form className='basic-card mx-auto' style={{height: '300px'}}>
        <FormGroup>
          <XYSpacing height='20px' />
          <Label className='flex jcc'><h3>Log In</h3></Label>
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
          {errors.validEmail && <div className='flex jcc' style={{height: '5px', marginTop: '-5px'}}><p className="error-message">account not found...</p></div>}
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
            className='util-button flex jcc aic'
            onClick={togglePasswordVisibility}
            style={{
                transform: 'translateX(-108px)',
                margin: '-33px 0px 0px 455px',
            }}
            >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
            {errors.passwordLength && <div className='flex jcc hfc' style={{height: '2px', marginTop: '1px'}}><p className="error-message">password must be 6 to 15 characters!</p></div>}
            {errors.validLogin && <div className='flex jcc hfc' style={{height: '2px', marginTop: '1px'}}><p className="error-message">password incorrect!</p></div>}
        </FormGroup>

        <Button className='button mx-auto flex jcc' type='submit' onClick={handleSubmit} style={{ height: '43px', width: '86px', border: 'none' }}>
          <p>login</p>
        </Button>
        <div className='flex dir-row jcc mt-3'>
          <Link className='styled-link' to={'/recover-account'}><p className='light-text link-text'>forgot password</p></Link>
            <HorizontalSpacing width='35px' />
          <Link className='styled-link' to={'/signup'}><p className='light-text link-text'>create account</p></Link>
        </div>
        <br />
      </Form>
    </div>
  );
}

export default Login;