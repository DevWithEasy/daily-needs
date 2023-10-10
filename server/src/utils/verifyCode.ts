import bcrypt from 'bcrypt'
const verifyCode =()=>{
    return (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000).toString()
}
export default verifyCode