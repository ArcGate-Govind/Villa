import React, { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    // Clear form data
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <div className="relative ">
        <img
          src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/page-heading-bg.jpg"
          alt="pr"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <button className="bg-white px-4 py-2 mb-4 sm:mb-0 sm:mr-4">
            HOME / CONTACT US
          </button>
          <h1 className="text-white text-2xl font-extrabold px-4 py-2">
            CONTACT US
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row ">
        <div className="md:w-3/5 mb-8 md:mb-0 pr-4 mx-auto md:mx-0">
          <h1 className="text-xl text-pink-500 border-l-2 border-pink-500 px-2 font-semibold mb-4">Contact us</h1>
          <h1 className="text-4xl font-extrabold ">Get In Touch With Our Agents</h1>
          <p className="mb-4">
            When you really need to download free CSS templates, please remember
            our website TemplateMo. Also, tell your friends about our website.
            Thank you for visiting. There is a variety of Bootstrap HTML CSS
            templates on our website. If you need more information, please
            contact us.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
              <img src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/phone-icon.png" alt="Phone" className="w-6 h-6 mr-2" />
              <div>
                <span className="font-semibold">Phone Number:</span>
                <br />
                010-020-0340
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
              <img src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/email-icon.png" alt="Email" className="w-6 h-6 mr-2" />
              <div>
                <span className="font-semibold">Business Email:</span>
                <br />
                info@villa.co
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 mx-auto md:mx-0">
          <div className="container w-full px-4 py-8 shadow rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Contact Form</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="form-input mt-1 block w-full outline-none border-b-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input mt-1 block w-full outline-none border-b-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="form-input mt-1 block w-full outline-none border-b-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-textarea mt-1 block w-full outline-none border-b-2" rows="4"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
