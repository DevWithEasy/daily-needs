export const accountVeification=(userEmail : string,code : string)=>{
    return {
        from : process.env.EMAIL,
        to : userEmail,
        subject : 'Account verification code',
        html : `<div>
        Email verification code is <b>${code}</b>
        <br/>
        Code will be expire 6 hours later
        </div>`
    }
}

export const verifySuccessfully=(userEmail : string)=>{
    return {
        from : process.env.EMAIL,
        to : userEmail,
        subject : 'Verification successfully verified',
        html : `<div>Account verified successfully</div>`
    }
}

export const ForgetPassword=(userEmail : string, token : string, code: string)=>{
    return {
        from : process.env.EMAIL,
        to : userEmail,
        subject : 'Forget account password',
        html : `<div>
        Reset your password <a href='http://localhost:3000/forget/${token}/${code}' target='_blank'>Click here</a>
        </div>`
    }
}

export const successfullResetPassword=(userEmail : string)=>{
    return {
        from : process.env.EMAIL,
        to : userEmail,
        subject : 'Successfully password reset',
        html : `<div>
        Successfully password change.please login with new password.
        </div>`
    }
}