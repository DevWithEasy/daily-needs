import axios from "axios";
import React, { useState } from "react";
import { Input } from "../components/Index";
import apiUrl from "../utils/apiUrl";
import {useNavigate } from 'react-router-dom'
const SignIn = () => {
  const navigate = useNavigate ()
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prevVelue) => ({
      ...prevVelue,
      [name]: value,
    }));
  };
  const handleSignIn = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiUrl}/user/signin`, value);
      if (res.data.success === true) {
        localStorage.setItem('token', res.data.token)
        if(res.data.data.isVerified === false){
          navigate('/verification')
        }
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSignIn} className="space-y-3">
        <Input
          {...{
            name: "email",
            label: "Phone Number",
            placeholder: "Enter your email or phone number",
            handleChange: handleChange,
          }}
        />
        <Input
          {...{
            name: "password",
            label: "Password",
            placeholder: "Enter you Password",
            handleChange: handleChange,
          }}
        />

        <input
          type="submit"
          value="Sign in"
          className="px-6 py-2 bg-green-500 text-white rounded cursor-pointer"
        />
      </form>
    </div>
  );
};

export default SignIn;
