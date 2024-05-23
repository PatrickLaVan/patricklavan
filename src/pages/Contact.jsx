import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import { SectionWrapper  } from '../hoc';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [isLoading, setIsLoading] = useState(false);

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

  
  emailjs.send(
    // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    // To Do : die KEYs müssen versteckt werden
    'service_busxf5k',
    'template_2jc34lb',
    {
      from_name: form.name,
      to_name: "Patrick La Van",
      from_email: form.email,
      to_email: 'patricklavan12@gamil.com',
      message: form.message
    },
    'cKbRZg9UoTFnD0m49'
    // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

  ).then(() => {
      setIsLoading(false);
      showAlert({show:true,text:'Message was sent successfully 😃', type:'success'})
      //todo hide an alert

     setTimeout(() => {
            hideAlert(false);
            // setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);


    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      showAlert({show:true, text:'I didnt recieve your message', type:'danger'})
    })
};

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert}/>}
      
      <h1 className="head-text mt-10">Get in touch</h1>

      <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
      <label className="text-black-500 font-semibold"> 
          Name
          <input
            type="text"
            name="name"
            className="input"
            placeholder='Your Name'
            required 
            value={form.name}
            onChange={handleChange}
          />
        </label><label className="text-black-500 font-semibold"> 
          Email
          <input
            type="email"
            name="email"
            className="input"
            placeholder='Your Email Adress'
            required 
            value={form.email}
            onChange={handleChange}
          />
        </label><label className="text-black-500 font-semibold"> 
          Your Message
          <textarea
            name="message"
            rows={4}
            className="textarea"
            placeholder='How can I help you?'
            required 
            value={form.message}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          disabled={isLoading}
          className="btn"
        >  
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}

export default SectionWrapper(Contact, "contact")