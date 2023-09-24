import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className='sec' id='contact'>
      <div className='container m-auto'>
        <div className='contact-section flex'>
          <div className='w-[35%]'>
            <h2 className='sub-title'>Get In Touch</h2>
            <h1 className='text-white text-5xl font-rubik font-medium py-4'>Let's Connect</h1>
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>
          <div className='w-[65%]'>
            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-2 gap-7 mb-7'>
                <div className="form-group">
                  <input
                    className='input-contact'
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Full Name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    className='input-contact'
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    className='input-contact'
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder='Subject'
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    className='input-contact'
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder='Phone'
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <textarea
                  className='input-contact'
                  id="message"
                  name="message"
                  placeholder='Message'
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact