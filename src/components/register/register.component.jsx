import React from 'react';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-bottom/custom-button.component";

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import './register.styles.scss';

class Register extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
      event.preventDefault();

      const {displayName, email, password, confirmPassword} = this.state;

      if (password != confirmPassword){
          alert("Password don't match")
          return;
      }

      try {
          const {user} = await auth.createUserWithEmailAndPassword(email, password);

          createUserProfileDocument(user, {displayName});

          this.setState({
              displayName: '',
              email: '',
              password: '',
              confirmPassword: ''
          });

      } catch (err) {
          console.log(err)
      }

    };


    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className="register">
                <h2 className="title">I do not have an account</h2>
                <span>Register with your email and password</span>

                <form action="" className="register-form" onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName'
                               value={displayName} onChange={this.handleChange}
                               label='Display Name' required></FormInput>
                    <FormInput type='email' name='email'
                               value={email} onChange={this.handleChange}
                               label='Email' required></FormInput>
                    <FormInput type='password' name='password'
                               value={password} onChange={this.handleChange}
                               label='Password' required></FormInput>
                    <FormInput type='password' name='confirmPassword'
                               value={confirmPassword} onChange={this.handleChange}
                               label='Confirm Password' required></FormInput>

                    <CustomButton type='submit'>REGISTER</CustomButton>
                </form>
            </div>
        )
    }
}

export default Register;