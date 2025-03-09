import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaPhone, FaHome, FaCalendarAlt, FaToolbox } from 'react-icons/fa';
import LoadingSpinner from './looder';

// Kenyan Counties array (full list preserved)
const kenyanCounties = [
  'Mombasa', 'Kwale', 'Kilifi', 'Tana River', 'Lamu', 'Taita-Taveta',
  'Garissa', 'Wajir', 'Mandera', 'Marsabit', 'Isiolo', 'Meru',
  'Tharaka-Nithi', 'Embu', 'Kitui', 'Machakos', 'Makueni', 'Nyandarua',
  'Nyeri', 'Kirinyaga', 'Murang\'a', 'Kiambu', 'Turkana', 'West Pokot',
  'Samburu', 'Trans-Nzoia', 'Uasin Gishu', 'Elgeyo-Marakwet', 'Nandi',
  'Baringo', 'Laikipia', 'Nakuru', 'Narok', 'Kajiado', 'Kericho',
  'Bomet', 'Kakamega', 'Vihiga', 'Bungoma', 'Busia', 'Siaya',
  'Kisumu', 'Homa Bay', 'Migori', 'Kisii', 'Nyamira', 'Nairobi City'
];

const Consultation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const timeSlots = [
    '8:00-9:00 AM', '9:00-10:00 AM', '10:00-11:00 AM', '11:00 AM-12:00 PM',
    '12:00-1:00 PM', '1:00-2:00 PM', '2:00-3:00 PM', '3:00-4:00 PM', '4:00-5:00 PM'
  ];

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    serviceCategory: 'renovation',
    county: '',
    areaSize: '',
    date: null,
    time: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    county: Yup.string().required('Required'),
    areaSize: Yup.number().required('Required'),
    date: Yup.date().required('Required'),
    time: Yup.string().required('Required'),
    projectType: Yup.string().required('Required'),
    serviceCategory: Yup.string().required('Required')
  });

  useEffect(() => {
    emailjs.init('FGBV3zSBJEQcNqihu');
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    try {
      const templateParams = {
        ...values,
        date: values.date ? values.date.toLocaleDateString() : 'Not selected',
        fullRequest: JSON.stringify(values, null, 2)
      };

      const response = await emailjs.send(
        'service_kortt7m',
        'template_g5i570v',
        templateParams
      );

      if (response.status === 200) {
        Swal.fire({
          title: 'Success!',
          text: 'Consultation request sent successfully',
          icon: 'success',
          confirmButtonText: 'Return Home',
          confirmButtonColor: '#ff6b35'
        }).then(() => navigate('/'));
      }

      resetForm();
    } catch (error) {
      console.error('Submission error:', error);
      Swal.fire('Error!', 'Failed to send request. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="consultation-container">
      {isSubmitting && <LoadingSpinner />}
      
      <h2 className="form-title">Design Consultation Appointment</h2>
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
                <div className="form-group">
                  <FaPhone className="input-icon" />
                  <Field name="phone" placeholder="Phone Number" />
                  <ErrorMessage name="phone" component="div" className="error" />
                </div>
              </div>
            </div>

            {/* Project Details Section */}
            <div className="form-section">
              <h3><FaHome /> Project Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Property Type</label>
                  <Field as="select" name="projectType">
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="office">Office Space</option>
                    <option value="hotel">Hotel/Resort</option>
                    <option value="retail">Retail Space</option>
                  </Field>
                </div>

                <div className="form-group">
                  <label>Service Needed</label>
                  <Field as="select" name="serviceCategory">
                    <option value="renovation">Full Renovation</option>
                    <option value="tiling">Floor Tiling</option>
                    <option value="gypsum">Gypsum Ceiling</option>
                    <option value="painting">Painting</option>
                    <option value="furniture">Custom Furniture</option>
                    <option value="lighting">Lighting Design</option>
                    <option value="other">Other Services</option>
                  </Field>
                </div>

                <div className="form-group">
                  <label>County</label>
                  <Field as="select" name="county">
                    <option value="">Select County</option>
                    {kenyanCounties.map(county => (
                      <option key={county} value={county}>{county}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="county" component="div" className="error" />
                </div>

                <div className="form-group">
                  <label>Area Size (sq ft)</label>
                  <Field name="areaSize" type="number" />
                  <ErrorMessage name="areaSize" component="div" className="error" />
                </div>
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
                  <ErrorMessage name="date" component="div" className="error" />
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
                <ErrorMessage name="time" component="div" className="error" />
              </div>
            </div>

            {/* Additional Details */}
            <div className="form-section">
              <h3><FaToolbox /> Additional Details</h3>
              <div className="form-group">
                <Field 
                  as="textarea" 
                  name="message" 
                  placeholder="Describe your project needs..." 
                  rows={4}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Book Consultation'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Consultation;