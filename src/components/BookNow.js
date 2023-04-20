import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "tw-elements";
import { Datepicker, Input, initTE } from "tw-elements";
import { init } from 'emailjs-com';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
init(process.env.REACT_APP_PUBLIC_KEY);

const BookNow = () => {
  const [patient_name, setPatientName] = useState("");
  const [patient_lastName, setPatientLastName] = useState("");
  const [guardian_name, setGuardianName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [appointment_types, setAppointmentTypes] = useState("");
  const [appointment_locations, setAppointmentLocations] = useState("");
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

  const [appointmentType, setAppointmentType] = useState([
    { type: "Missed Appointment", clicked: false },
    { type: "Request Consultation", clicked: false },
    { type: "Need Elastics", clicked: false },
    { type: "Emergency", clicked: false },
  ]);

  const [times, setTimes] = useState([
    { time: "Morning", clicked: false },
    { time: "Afternoon", clicked: false },
    { time: "Evening", clicked: false },
  ]);

  const [locations, setLocations] = useState([
    { location: "Allentown", clicked: false },
    { location: "Bethlehem", clicked: false },
    { location: "Schnecksville", clicked: false },
    { location: "Lehighton", clicked: false },

  ]);

  const handleAppointmentClick = (index) => {
    const updatedAppointmentType = [...appointmentType];
    updatedAppointmentType[index].clicked = !updatedAppointmentType[index].clicked;
    setAppointmentType(updatedAppointmentType)
    const selectedTypes = updatedAppointmentType.filter(type => type.clicked).map(type => type.type);
    setAppointmentTypes(selectedTypes);
  };

  const handleClick = (index) => {
    const updatedLocations = [...locations];
    updatedLocations[index].clicked = !updatedLocations[index].clicked;
    setLocations(updatedLocations);
    const selectedLocations = updatedLocations.filter(location => location.clicked).map(location => location.location);
    setAppointmentLocations(selectedLocations);
  };

  const handleDayClick = (index) => {
    const updatedDays = [...days];
    updatedDays[index].clicked = !updatedDays[index].clicked;
    setDays(updatedDays);
    const selectedDays = updatedDays
      .filter((day) => day.clicked)
      .map((day) => day.day);
    setPreferredDay(selectedDays);
  };

  const handleTimeClick = (index) => {
    const updatedTimes = [...times];
    updatedTimes[index].clicked = !updatedTimes[index].clicked;
    setTimes(updatedTimes);
    const selectedTimes = updatedTimes
      .filter((time) => time.clicked)
      .map((time) => time.time);
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
      patient_lastName,
      guardian_name,
      phone_number,
        appointment_types,
        appointment_locations,
        email,
        date_of_birth: dateOfBirthRef.current.value,
        preferred_day,
        preferred_time,
        message,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_BOOK_NOW_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        function (response) {
          console.log("Success!", response.status, response.text);
        },
        function (error) {
          console.log("Failed...", error);
        }
      );
    setEmailSent(true);
  };


  const baseButtonClass = "text-slate-700 py-2 px-4 rounded-full";
  const activeButtonClass =
    "bg-gradient-to-r from-violet-100 via-violet-200 to-violet-300";
  const inactiveButtonClass =
    "border-2 border-violet-400 hover:bg-violet-400 hover:text-white";

  return (
    <div id="contact-form">
      {emailSent ? (
        <span className={emailSent ? "block" : "hidden"}>
          Thank you for your message, we will be in touch soon!
        </span>
      ) : (
        <form onSubmit={handleSubmit} 
        className="border-2 backdrop-blur-md bg-white/30 max-w-screen-sm mx-auto flex flex-col space-y-12 p-8 rounded-xl">
<div className="flex flex-col items-center">
  <div className="flex w-full gap-2">
    <div className="relative flex-1 w-1/2">
      <input
        className="w-full block p-2"
        type="text"
        value={patient_name}
        onChange={(e) => setPatientName(e.target.value)}
        required
        style={{ borderRadius: "9999px", border: "1px solid gray" }}
      />
      <label className="absolute -mt-12 ml-4 bg-white px-2 text-xs">
        First Name
      </label>
    </div>

    <div className="w-1/2 relative">
      <label className="absolute -mt-2 ml-4 bg-white px-2 text-xs">
        Last Name
      </label>
      <input
        className="w-full block p-2"
        type="text"
        value={patient_lastName}
        onChange={(e) => setPatientLastName(e.target.value)}
        required
        style={{ borderRadius: "9999px", border: "1px solid gray" }}
      />
    </div>
  </div>

  <div className="relative pt-8 pb-4 w-full">
    <input
      className="block p-2 w-full"
      type="text"
      value={guardian_name}
      onChange={(e) => setGuardianName(e.target.value)}
      required
      style={{ borderRadius: "9999px", border: "1px solid gray" }}
    />
    <label className="absolute -mt-12  ml-4 bg-white px-2 text-xs">
      Parent/Guardian
    </label>
  </div>

<div className="w-full flex gap-2">
  <div className="w-1/2 relative flex-1 py-4">
    <input
      className="w-full block p-2"
      type="text"
      value={phone_number}
      onChange={(e) => setPhoneNumber(e.target.value)}
      required
      style={{ borderRadius: "9999px", border: "1px solid gray" }}
    />
    <label className="absolute -mt-12  ml-4 bg-white px-2 text-xs">
      Phone Number
    </label>
  </div>

  <div className="w-1/2 relative flex-1 py-4">
    <label className="absolute -mt-2  ml-4 bg-white px-2 text-xs">
      Email
    </label>
    <input
      className="w-full block p-2"
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      style={{ borderRadius: "9999px", border: "1px solid gray" }}
    />
  </div>
</div>
</div>

<div
            className="my-4 relative mb-3"
            data-te-datepicker-init
            data-te-input-wrapper-init
          >
            <input
              required
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Select a date"
              ref={dateOfBirthRef}
            />
            <label
              htmlFor="floatingInput"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Date of Birth
            </label>
          </div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Type Of Appointment</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {appointmentType.map((button, index) => (
                    <button
                      className="px-4"
                      key={button.type}
                      type="button"
                      onClick={() => handleAppointmentClick(index)}
                    >
                      {button.clicked ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="purple"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                      {button.type}
                    </button>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Choose Locations</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {locations.map((button, index) => (
                    <button
                      className="px-4"
                      key={button.location}
                      type="button"
                      onClick={() => handleClick(index)}
                    >
                      {button.clicked ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="indigo"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      )}
                      {button.location}
                    </button>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>


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

          <div className="border-2 flex flex-col">
            <label className="flex flex-col">
              Comments
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>
            <button
              className="bg-indigo-100"
              type="submit"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookNow;
