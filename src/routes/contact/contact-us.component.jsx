import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import CustomButton from '../../components/customUI/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {ContactContainer, InfoContainer, InsideContainer, InfoItem, InfoInner} from './contact-us.styles';

const ContactUs = () => {
  const form = useRef();

  const defaultFormFields = {
    user_name: '',
    user_email: '',
    message: '',
  }
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { user_name, user_email, message } = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields,  [name]: value});
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b3u908q', 'template_zk9nj3y', form.current, 'a3wDv2Dis48Xd4fOC')
      .then((result) => {
        toast.success("Form Submitted Successfully");
        console.log(result.text);

      }, (error) => {
        toast.error("Something went wrong...");
        console.log(error.text);
      });
    resetFormFields();
  };

  return (
    <ContactContainer>
      <ToastContainer position="top-center" />
      <InsideContainer>
        <form ref={form} onSubmit={sendEmail}>
          <FormInput
            label="Name"
            type="text"
            required
            name="user_name"
            onChange={handleChange}
            value={user_name}
          />
          <FormInput
            label="Email"
            type="email"
            required
            name="user_email"
            onChange={handleChange}
            value={user_email}
          />
          <FormInput
            as="textarea"
            label="Message"
            name="message"
            onChange={handleChange}
            value={message}
          />
          <CustomButton type="submit">Send Message</CustomButton>
        </form>
      </InsideContainer>
      <InfoContainer>
        <h2>Contact us</h2>
        <span>We're open for any suggestion or just to have a chat</span>
        <InfoInner>
          <InfoItem className="info-item">
            <span className="fa fa-map-marker"></span>
            <p>
              <span>Adress:</span> 189 West 12th Street, Suite 672 New York NY 10016
            </p>
          </InfoItem>
          <InfoItem className="info-item">
            <span className="fa fa-phone" ></span>
            <p>
              <span>Phone:</span>
              <a href="tel://123456789">+12 656 1212 12</a>
            </p>
          </InfoItem>
          <InfoItem className="info-item">
            <span className="fa fa-paper-plane" ></span>
            <p>
              <span>Email:</span>
              <a href="mailto:info@yoursite.com">info@yoursite.com</a>
            </p>
          </InfoItem>
          <InfoItem className="info-item">
            <span className="fa fa-globe" ></span>
            <p>
              <span>Website:</span>
              <a href="#">yoursite.com</a>
            </p>
          </InfoItem>
        </InfoInner>
      </InfoContainer>
    </ContactContainer>
  );
};

export default ContactUs;