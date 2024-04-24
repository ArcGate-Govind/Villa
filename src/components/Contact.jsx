import React,{useState} from 'react'

const Contact = () => {
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
    <div className='w-full relative  flex flex-col justify-center items-center '>
    <img src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/contact-bg.jpg" alt="Video Background" className="w-full" />
    <div className="absolute top-10 text-center w-4/5 md:w-2/5 lg:w-1/4 xl:w-1/5">
      <h2 className='mt-4 text-pink-600 text-xl'>CONTACT US</h2>
      <h1 className='text-4xl  mt-10 text-white font-extrabold'>Get In Touch With Our Agents</h1>
    </div>
    <div className="">
      <div className="container w-[100%]  px-4 py-8 shadow  margin-imges ">
            <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="form-input mt-1 block w-full " />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input mt-1 block w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="form-input mt-1 block w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-textarea mt-1 block w-full" rows="4"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Send Message</button>
            </form>
        </div>
    </div>
  </div>
  )
}

export default Contact