const nodemailer = require('nodemailer')


const sendOtp = async (to,subject,body)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.USER_EMAIL,
            pass:process.env.USER_EMAIL_PASSWORD
        }
    })

    const mailoption = {
        from:process.env.USER_EMAIL,
        to,
        subject,
        html:body
    }

    await transporter.sendMail(mailoption)

}

module.exports = sendOtp