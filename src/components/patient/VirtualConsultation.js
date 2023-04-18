import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "tw-elements";
import { Datepicker, Input, initTE } from "tw-elements";
import { init } from 'emailjs-com';
init(process.env.REACT_APP_PUBLIC_KEY);

const VirtualConsultation = () => {
  const [patient_name, setPatientName] = useState("");
  const [guardian_name, setGuardianName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    initTE({ Datepicker, Input });
  }, []);

  const handleSubmit = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
      const templateParams = {
        patient_name,
        guardian_name,
        phone_number,
        email,
        date_of_birth: date_of_birth,
        message,
      };

      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(function(response) {
          console.log("Success!", response.status, response.text);
        }, function(error) {
          console.log('Failed...', error);
        });

      setPatientName("");
      setGuardianName("");
      setPhoneNumber("");
      setEmail("");
      setDateOfBirth("");
      setMessage("");
      setEmailSent(true);
  };

  return (
    <div id="contact-form">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>
          First and Last Name
          <input
            type="text"
            placeholder="First and Last Name"
            value={patient_name}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </label>

        <label>
          Name of Parent or Guardian
          <input
            type="text"
            placeholder="Parent or Guardian Name"
            value={guardian_name}
            onChange={(e) => setGuardianName(e.target.value)}
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            placeholder="222-222-2222"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>

        <label>
          Email address
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <div className="my-4 relative mb-3" data-te-datepicker-init data-te-input-wrapper-init>
          <input required type="text" className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          placeholder="Select a date" value={date_of_birth} onChange={(e) => setDateOfBirth(e.target.value)}/>
          <label htmlFor="floatingInput"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >Date of Birth</label>
        </div>

        <div className="flex flex-col">
          <label className="flex flex-col">
            Tell us about your concern(s)
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
          <button type="submit" onClick={handleSubmit}>Send Message</button>
          <span className={emailSent ? "block" : "hidden"}>
            Thank you for your message, we will be in touch in no time!
          </span>
        </div>
      </form>
    </div>
  );
};

export default VirtualConsultation;
