import React, { useState } from "react";
import {Input} from '../components/Index'
import axios from "axios";
import apiUrl from "../utils/apiUrl";
const SignUp = () => {
  const [value,setValue] = useState({
    name : '',
    email : '',
    phone : '',
    password : '',
    confirmPassword : ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prevVelue) => ({
      ...prevVelue,
      [name]: value,
    }));
  };
  const handleSignup = async(e : React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${apiUrl}/user/signup`,value)
      if(res.data.success === true){
        console.log(res.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return <div>
    <form
      onSubmit={handleSignup}
      className="space-y-3"
    >
      <Input {...{
        name : 'name',
        label : 'Name',
        placeholder : 'Enter your name',
        handleChange : handleChange
      }}/>
      <Input {...{
        name : 'email',
        label : 'Email',
        placeholder : 'Enter your email address',
        handleChange : handleChange
      }}/>
      <Input {...{
        name : 'phone',
        label : 'Phone Number',
        placeholder : 'Enter your phone number',
        handleChange : handleChange
      }}/>
      <Input {...{
        name : 'password',
        label : 'Password',
        placeholder : 'Enter you Password',
        handleChange : handleChange
      }}/>
      <Input {...{
        name : 'confirmPassword',
        label : 'Confirm Password',
        placeholder : 'Enter you confirm password',
        handleChange : handleChange
      }}/>
      {value.password === value.confirmPassword ? '' : 
        <p className="text-red-500">Password not match.</p>
      }
      <input 
        type='submit'
        value='Sign up'
        className="px-6 py-2 bg-green-500 text-white rounded cursor-pointer"
      />
    </form>
  </div>;
};

export default SignUp;
