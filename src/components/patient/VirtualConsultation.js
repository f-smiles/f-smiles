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
  const [email, setEmail] = useState("");
  const dateOfBirthRef = useRef(""); 
  const [preferred_day, setPreferredDay] = useState("");
  const [preferred_time, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

   const [days, setDays] = useState([
    { day: "Monday", clicked: false },
    { day: "Tuesday", clicked: false },
    { day: "Wednesday", clicked: false },
    { day: "Thursday", clicked: false },
    { day: "Friday", clicked: false },
    { day: "Saturday", clicked: false },
    { day: "Sunday", clicked: false },
  ]);

   const [times, setTimes] = useState([
    { time: "Morning", clicked: false },
    { time: "Afternoon", clicked: false },
    { time: "Evening", clicked: false },
  ]);

   const handleDayClick = (index) => {
    const updatedDays = [...days];
    updatedDays[index].clicked = !updatedDays[index].clicked;
    setDays(updatedDays);
    const selectedDays = updatedDays.filter(day => day.clicked).map(day => day.day);
    setPreferredDay(selectedDays);
  };

  const handleTimeClick = (index) => {
    const updatedTimes = [...times];
    updatedTimes[index].clicked = !updatedTimes[index].clicked;
    setTimes(updatedTimes);
    const selectedTimes = updatedTimes.filter(time => time.clicked).map(time => time.time);
    setPreferredTime(selectedTimes);
  };


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
        date_of_birth: dateOfBirthRef.current.value,
        preferred_day,
        preferred_time,
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
      const date_of_birth = dateOfBirthRef.current;
      setPreferredDay("");
      setPreferredTime("");
      setMessage("");
      setEmailSent(true);
  };

  const baseButtonClass = "text-slate-700 py-2 px-4 rounded-full";
  const activeButtonClass = "bg-gradient-to-r from-violet-100 via-violet-200 to-violet-300";
  const inactiveButtonClass = "border-2 border-violet-400 hover:bg-violet-400 hover:text-white";


  return (
    <div id="contact-form">
      {emailSent ? (
        <span className={emailSent ? "block" : "hidden"}>
        Thank you for your message, we will be in touch in no time!
        </span>
      ) : (
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
          placeholder="Select a date"  ref={dateOfBirthRef}/>
          <label htmlFor="floatingInput"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >Date of Birth</label>
        </div>

        <div className="flex justify-center flex-col">
          Preferred Day(s):
        <div className="flex flex-wrap justify-start py-4 gap-4 ml-4">
        {days.map((button, index) => (
          <button
            key={button.day}
            type="button"
            className={
              button.clicked
                ? `${baseButtonClass} ${activeButtonClass}`
                : `${baseButtonClass} ${inactiveButtonClass}`
            }
            onClick={() => handleDayClick(index)}
          >
            {button.day}
          </button>
        ))}      
        </div>
      </div>
      <div className="py-2 space-x-4">
        Preferred Time(s):
        <div className="flex flex-wrap justify-start py-4 gap-4 ml-4">
        {times.map((button, index) => (
          <button
            key={button.time}
            type="button"
            className={
              button.clicked
                ? `${baseButtonClass} ${activeButtonClass}`
                : `${baseButtonClass} ${inactiveButtonClass}`
            }
            onClick={() => handleTimeClick(index)}
          >
            {button.time}
          </button>
        ))}
          </div>
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
        </div>
      </form>
      )}
    </div>
  );
};

export default VirtualConsultation;
