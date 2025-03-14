import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate successful submission
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section className="contact">
      <h1>Contact</h1>
      {submitted ? (
        <p>Thank you for your message! I will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
