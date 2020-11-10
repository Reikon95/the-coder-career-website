import React from "react";
import { useForm } from "react-hook-form";
import './contact.css'
export function ContactUs() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <h2 className="global-header">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form-container">
        Name
      <input
        name="name"
        ref={register({
          required: "Required"
        })}
      />
      {errors.name && errors.name.message}
      Company (optional)
      <input
        name="company"
        ref={register({
        })}
      />
      {errors.company && errors.company.message}
      Email
      <input
        name="email"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
      />
      {errors.email && errors.email.message}
      Confirm Email
      <input
        name="confirmEmail"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid confirmEmail address"
          }
        })}
      />
      {errors.confirmEmail && errors.confirmEmail.message}
      Message
      <textarea name="contactMessage" ref={register({required: "Required"})}></textarea>
      {errors.contactMessage && errors.contactMessage.message}

      <button type="submit">Submit</button>
    </form>    
    </>
  );
}
