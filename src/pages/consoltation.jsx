import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { db } from '../../public/functions/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { FaUser, FaEnvelope, FaPhone, FaHome, FaPalette, FaClock, FaCalendarAlt } from 'react-icons/fa';


const Consultation = () => {
  const navigate = useNavigate();
  const timeSlots = [
    '8:00-9:00 AM', '9:00-10:00 AM', '10:00-11:00 AM', '11:00 AM-12:00 PM',
    '12:00-1:00 PM', '1:00-2:00 PM', '2:00-3:00 PM', '3:00-4:00 PM', '4:00-5:00 PM'
  ];

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    projectType: 'residential',
    address: '',
    areaSize: '',
    scope: 'renovation',
    style: 'modern',
    colorPalette: 'neutral',
    materials: [],
    budget: 'medium',
    timeline: '1-3 Months',
    date: null,
    time: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    areaSize: Yup.number().required('Required'),
    date: Yup.date().required('Required'),
    time: Yup.string().required('Required'),
    materials: Yup.array().min(1, 'Select at least one material')
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addDoc(collection(db, 'consultations'), values);
      Swal.fire({
        title: 'Success!',
        text: 'Consultation booked successfully',
        icon: 'success',
        confirmButtonText: 'Return Home',
        confirmButtonColor: '#ff6b35'
      }).then(() => navigate('/'));
      resetForm();
    } catch (error) {
      Swal.fire('Error!', 'Submission failed. Please try again.', 'error');
    }
  };

  return (
    <div className="consultation-container">
      <h2 className="form-title">Design Consultation Request</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className="consultation-form">
            {/* Basic Information Section */}
            <div className="form-section">
              <h3><FaUser /> Basic Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <FaUser className="input-icon" />
                  <Field name="name" placeholder="Full Name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className="form-group">
                  <FaEnvelope className="input-icon" />
                  <Field name="email" type="email" placeholder="Email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
              </div>
              
              {/* Other fields... */}
            </div>

            {/* Project Details Section */}
            <div className="form-section">
              <h3><FaHome /> Project Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <Field as="select" name="projectType">
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="office">Office</option>
                    <option value="hotel">Hotel</option>
                  </Field>
                </div>
                {/* More fields... */}
              </div>
            </div>

            {/* Calendar & Time Section */}
            <div className="form-section">
              <h3><FaCalendarAlt /> Schedule Appointment</h3>
              <div className="form-row">
                <div className="form-group">
                  <DatePicker
                    selected={values.date}
                    onChange={date => setFieldValue('date', date)}
                    minDate={new Date()}
                    placeholderText="Select Date"
                    className="date-picker"
                  />
                </div>
                <div className="time-slots">
                  {timeSlots.map(slot => (
                    <button
                      type="button"
                      key={slot}
                      className={`time-btn ${values.time === slot ? 'selected' : ''}`}
                      onClick={() => setFieldValue('time', slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button type="submit" className="submit-btn">
              Book Consultation
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Consultation;