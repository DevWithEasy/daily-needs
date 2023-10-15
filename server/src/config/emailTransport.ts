import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'devwitheasy@gmail.com',
        pass: 'foxx hbdm wzis vwcu'
    }
})

export default transporter