export const accountVeification=(userEmail : string,code : string)=>{
    return {
        from : process.env.EMAIL,
        to : userEmail,
        subject : 'Account verification code',
        text : `Email verification code is <b>${code}</b>`
    }
}

export const verifySuccessfully=(userEmail : string)=>{
    return {
        from : process.env.EMAIL,
        to : userEmail,
        subject : 'Verification successfully verified',
        text : `Account verified successfully`
    }
}