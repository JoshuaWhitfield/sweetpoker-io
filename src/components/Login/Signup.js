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

    /* input format error handling: */

    /* check valid email */
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
      setErrors({ ...errors, validEmail: true });
      return;
    }

    /* check username length */
    if (formData.username.length > 15 || formData.username.length < 3) {
      setErrors({ ...errors, validUsername: true });
      return;
    }

    /* add a username check for spaces */

    /* check password length */
    if (formData.password.length < 6 || formData.password.length > 15) {
      setErrors({ ...errors, passwordLength: true });
      return;
    }
    
    /* signup process using php rest api */
    console.log(formData);

    const currentDate = new Date();
    const signupData = {
      'email': formData.email.toLowerCase(),
      'username': formData.username,
      'md5': md5(formData.password),
      'timestamp': currentDate.toISOString().slice(0, 19).replace('T', ' '),
    };

    checkUser(
      { 'email': formData.email.toLowerCase() }, 
      (res) => {
        const data = JSON.parse(res.data);
        console.log('checkUser: '); console.log(data);

        if (data !== null) {
          setErrors({ ...errors, existingEmail: true });
          return;
        }

        addUser(
          signupData,
          () => {
            checkUser(
              { 'email': formData.email.toLowerCase() },
              (res) => {
                const data = JSON.parse(res.data);
                store.dispatch(setBalance(data.balance));
                store.dispatch(setUsername(data.username));
                store.dispatch(setLoggedIn(true));
                return data;
              }
            )
            navigate('/')
            store.dispatch(updateState());
          },
          (err) => {
            console.log(err);
          }
        )
      },
    )

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