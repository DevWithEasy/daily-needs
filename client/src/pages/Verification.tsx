import React, { useState } from "react";
import { Input } from "../components/Index";
import apiUrl from "../utils/apiUrl";
import axios from "axios";

const Verification = () => {
    const [value, setValue] = useState({
        code: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValue((prevVelue) => ({
            ...prevVelue,
            [name]: value,
        }));
    };
    const handleVerify = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res = await axios.put(`${apiUrl}/user/verify`, value, {
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            if (res.data.success === true) {
                console.log(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form
                onSubmit={handleVerify}
            >
                <Input
                    {...{
                        name: "code",
                        label: "Verification Code",
                        placeholder: "Enter your verification code",
                        handleChange: handleChange,
                    }}
                />
                <input
                    type='submit'
                    value='Verify'
                    className="px-6 py-2 bg-green-500 text-white rounded cursor-pointer"
                />
            </form>
        </div>
    );
};

export default Verification;
