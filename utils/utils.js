const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_FROM } = process.env;

// Function to send emails
const sendEmail = async (mailOptions) => {
  try {
    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: EMAIL_PORT === 465, // Use SSL if port is 465
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Add 'from' to the mailOptions
    const finalMailOptions = {
      from: EMAIL_FROM, // Set the sender address
      ...mailOptions,       // Include the user-provided options
    };

    // Send email
    await transporter.sendMail(finalMailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

module.exports = {
  sendEmail,
};
