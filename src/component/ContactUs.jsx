import React from 'react';


const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-3"> Contact Us</h2>
      <form >
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default ContactUs;