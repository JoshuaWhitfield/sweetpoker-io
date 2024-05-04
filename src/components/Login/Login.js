import { Form, FormGroup, Label, Button } from 'reactstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import HorizontalSpacing from '../Styling/HorizontalSpacing.js';
import XYSpacing from '../Styling/XYSpacing.js';

import { AccountConsumer } from '../../slices/Context/contextSlice.js';

import axios from 'axios';
import md5 from 'md5';
import ProfilePicture from '../ProfilePicture.js';


const Login = () => {
  const account = AccountConsumer();
  const handleLogin = ({ email, username, pfp, balance }) => {
    account.resetAccount();
    account.withStatus().setLoggedIn();

    account.withEmail()
    .setEmail(
      email
    );

    account.withUsername()
    .setUsername(
      username
    );

    account.withBalance()
    .setBalance(
      balance
    );

    account.withPFP()
    .setPicture(
      <ProfilePicture 
        imageUrl={pfp}
      />
    );

  }
  

  return (
    <>
    </>
  )
}

export default Login;