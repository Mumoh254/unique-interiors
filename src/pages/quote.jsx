import React, { useState } from 'react';
import { db } from '../../public/functions/firebase';
import { collection, addDoc } from 'firebase/firestore';
// import './FormStyles.css';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'quotes'), formData);
      // Add email notification logic here
      alert('Quote request submitted!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Get a Quote</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields here */}
      </form>
    </div>
  );
};

export default Quote;