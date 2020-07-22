import React, { useState } from 'react';
import {validEmailRegex, validPasswordRegex, requiredRegex} from '../shared/Validation.js'
import URL from '../shared/Url.js';
import FormInput from '../presenters/FormInput.js'
import Button from '../presenters/Button.js'
import axios from 'axios';


const inputStates = {
    email: '',
    password: '',
    errors: {
        email: '',
        password: ''
    },
    success: '',
    submitted: false
}

function Login() {
    const [statesManager, setStatesManager] = useState(inputStates);

   function handleChange(e)
    {
        const { id, value } = e.target;

        setStatesManager(prevState => ({ ...prevState, [id]: value }));

        let errors = statesManager.errors;
        
        switch (id) {
            case 'password': 
              errors.password = 
              requiredRegex.test(value) ? 'This is a required field' :
              validPasswordRegex.test(value) && value.length
                  ? ''
                  : 'Password must be at least 6 characters long along with 1 uppercase';
              break;
            case 'email': 
              errors.email = 
                requiredRegex.test(value) ? 'This is a required field' :
                validEmailRegex.test(value) && value.length
                  ? ''
                  : 'Please enter a valid email';
              break;
            
            default:
              break;
          }
    }


    function hideModal()
    {
        setStatesManager(prevState => ({ ...prevState, email: '', password: '', submitted: false}));
    }

    function handleSubmit() {
        axios.get(URL.LOGIN())
            .then(response => {
                setStatesManager(prevState => ({ ...prevState, success: response.data, submitted: true}));
            })
            setTimeout(() => {hideModal()}, 3000);
    }

    let {email, password, errors, submitted} = statesManager;

    return (
        <div className="container">
                <div className="center card" >
                <h3 >
                <div className="logo-box">
                    <img src={URL.IMAGE()} 
                         alt="logo" />
                </div>
                <div className="sign-in">Sign In </div>
                <div className="title">Use your Healthifyme Account </div>
                </h3>
                <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    error={errors.email}
                    required
                    className="input"
                    />

                <FormInput
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                    error={errors.password}
                    required
                    className="input"
                    />

                <Button
                    type="submit"
                    label="Login"
                    className={errors.password.length > 0 || errors.email.length > 0 || password == '' || email == '' ? "push_button red isDisabled" : "push_button red" }
                    handleClick={handleSubmit}
                    disabled={errors.password.length > 0 || errors.email.length > 0 || password == '' || email == '' ? true : false}
                  />
                  {
                      submitted == true ?
                      <span className='success' >{statesManager.success.result}</span> :
                      null 
                  }
                </div>
            </div>
    )

}
export default Login;
