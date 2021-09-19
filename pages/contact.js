import React, { useState } from 'react';

import styles from '../styles/contact.module.scss';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errors, setErrors] = useState({});

  const clearForm = () => {
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const checkErrors = () => {
    const temp = {};
    if (email.trim().length <= 0) temp.email = true;
    if (subject.trim().length <= 0) temp.subject = true;
    if (message.trim().length <= 0) temp.message = true;
    setErrors({ ...temp });
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSuccessMsg('');

    if (checkErrors()) {
      const data = { email, subject, message };

      fetch('/api/contact', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(() => {
          setSuccessMsg("Thanks for reaching out! I'll be in touch shortly.");
          clearForm();
        })
        .catch(err => console.log(err));
    }
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
              style={{
                border: errors.email
                  ? '1px solid crimson'
                  : '1px solid rgb(0 0 0 / 30%)'
              }}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="subject">
              Subject <span>*</span>
            </label>
            <input
              type="text"
              id="subject"
              style={{
                border: errors.subject
                  ? '1px solid crimson'
                  : '1px solid rgb(0 0 0 / 30%)'
              }}
              value={subject}
              onChange={e => setSubject(e.target.value)}
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
            style={{
              border: errors.message
                ? '1px solid crimson'
                : '1px solid rgb(0 0 0 / 30%)'
            }}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        {successMsg && <p>{successMsg}</p>}
      </form>
    </div>
  );
};

export default Contact;
