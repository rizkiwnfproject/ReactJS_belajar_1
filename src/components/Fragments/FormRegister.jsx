import React from 'react'
import Button from '../Elements/Button/Button';
import {InputForm} from '../Elements/Input/InputForm';

const FormRegister = () => {
    return (
        <form action="">
            <InputForm label="Fullname" type="text" placeholder="John Doe" name="fullname" />
            <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" />
            <InputForm label="Password" type="password" placeholder="*****" name="password" />
            <InputForm label="Confirm Password" type="password" placeholder="*****" name="confirmPassword" />
            <Button variant="bg-blue-600 w-full">Register</Button>
        </form> 
    )
}

export default FormRegister