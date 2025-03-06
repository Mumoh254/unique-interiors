const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configure your email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-specific-password' // Use 2FA app password
  }
});

exports.sendConsultationNotification = functions.firestore
  .document('consultations/{docId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    const adminEmail = 'peteritumo2030@gmail.com';

    const mailOptions = {
      from: '"Design Studio" <noreply@designstudio.com>',
      to: adminEmail,
      subject: `New Consultation Request from ${data.name}`,
      html: `
        <h1 style="color: #ff6b35;">New Consultation Request</h1>
        <div style="padding: 20px; background: #f8f9fa; border-radius: 10px;">
          <h3>Client Information:</h3>
          <p>Name: ${data.name}</p>
          <p>Email: ${data.email}</p>
          <p>Phone: ${data.phone}</p>
          
          <h3>Project Details:</h3>
          <p>Type: ${data.projectType}</p>
          <p>Address: ${data.address}</p>
          <p>Area: ${data.areaSize} sq.ft</p>
          
          <h3>Scheduled Time:</h3>
          <p>Date: ${data.date.toDate().toLocaleDateString()}</p>
          <p>Time Slot: ${data.time}</p>
        </div>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      return null;
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Email sending failed');
    }
  });