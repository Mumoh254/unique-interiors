import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.errorCode}>404</h1>
        <h2 style={styles.message}>Page Not Found</h2>
        <p style={styles.description}>
          Oops! The page you're looking for does not exist. Please check the URL or
          go back to the homepage.
        </p>

        <Link to="/" className='btn' >Back to Home</Link>
      </div>
      <footer style={styles.footer}>
        <p> Sorry  we   dont  have  the  page  your  looking  For </p>
        <p> ✔✔  Contact  for  help !! </p>
        <p style={styles.hotline}> 📞📞 : Call for help: <a href="tel: +254710772575" style={styles.hotlineLink}>0710772575</a></p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',

    marginTop: '100px'
  },
  content: {
    textAlign: 'center',
    padding:  "30px",

    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  errorCode: {
    marginTop:  "50px",
    fontSize: '100px',
    fontWeight: 'bold',
    color: 'var(--color-sample-2)',  // #FF5C00
  },
  message: {
    fontSize: '30px',
    marginTop: '10px',
    color: 'var(--color-sample-1)',  // #AEE553
  },
  description: {
    fontSize: '18px',
    marginTop: '15px',
    color: '#000',
    fontWeight: "800",
    padding:   "30px"
  },
  button: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: 'var(--color-sample-4)',  // #8490FF
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: 'var(--color-sample-3)',  // #CC00FF
  },
  footer: {
    marginTop: 'auto',
    textAlign: 'center',
    fontSize: '14px',
    color: '#555',
    paddingTop: '20px',
    borderTop: '1px solid #ddd',
  },
  hotline: {
    marginTop: '10px',
    fontSize: '16px',
    color: 'var(--color-sample-1)',  // #AEE553
  },
  hotlineLink: {
    color: 'var(--color-sample-2)',  // #FF5C00
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default NotFound;
