const visitors_info = require('../models/visitors_info')
const nodemailer = require('nodemailer')

exports.saveDetails = async(req,res)=>{
    try{
        const data = req.body.data;
        const addDet = await new visitors_info({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            mobile: data.mobile,
            subject: data.sub,
            details: data.details
        })
        const saveDet = await addDet.save()

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_host, 
            port: process.env.SMTP_port, 
            secure: false,      
            auth: {
              user: process.env.SMTP_username, 
              pass: process.env.SMTP_password 
            }
          });
      
          const info = await transporter.sendMail({
            from: process.env.SMTP_EMAIL, 
            to: data.email,
            // cc,              // add cc recipients here
            subject: `Thank you for your interest in working with me!`,
            text: `Dear ${data.first_name} ${data.last_name},

            I hope this email finds you well. I wanted to take a moment to thank you for expressing interest in getting in touch with me. As a developer, I am always excited to connect with others in the industry and explore potential opportunities to work together.
            
            I appreciate you taking the time to visit my portfolio site and review my work. It means a lot to me that you find my skills and experience compelling. I would be happy to discuss your specific needs and how I can assist you further.
            
            Please feel free to reply to this email and let me know how you would like to proceed. I am available for a call or video chat at your convenience to learn more about your project and answer any questions you may have.
            
            Thank you again for your interest in working with me. I look forward to hearing back from you soon.
            
            Best regards,
            Yash Dhumal `
          });
        // console.log(req.body)
        res.send("success")
    }catch(e){
        console.log(e)
        res.status(500).json(e)
    }
}

