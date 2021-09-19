import React, { useState } from 'react';

import styles from '../styles/contact.module.scss';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const clearForm = () => {
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = { email, subject, message };
    setSuccessMsg('');

    fetch('/api/contact', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => {
        setSuccessMsg("Thank you for reaching out! I'll be touch shortly.");
        clearForm();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <div className={styles.inputContainer}>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="subject">
              Subject <span>*</span>
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.textareaContainer}>
          <label htmlFor="message">
            Message <span>*</span>
          </label>
          <textarea
            type="textarea"
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {successMsg && <p>{successMsg}</p>}
      </form>
    </div>
  );
};

export default Contact;
