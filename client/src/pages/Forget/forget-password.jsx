import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../actions/auth';
import './ForgetPassword.css';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(forgotPassword(email));
      setMessage(response.message);  // Display success message
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong.');  // Display error message
    }
  };

  return (
    <div className='forget-password'>
    <div className="forget-password-form">
      <h2>Forgot Password?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className='Reset-btn' type="submit">Reset Password</button>
      </form>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
    </div>
  );
};

export default ForgetPasswordForm;
