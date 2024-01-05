import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Datepicker, Input, initTE } from "tw-elements";
import { init } from "emailjs-com";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import classNames from 'classnames';
import { gsap } from "gsap";

init(process.env.REACT_APP_PUBLIC_KEY);


const BookNow = () => {
  
  
  const [isFirstNameVisible, setIsFirstNameVisible] = useState(false);
  const [isLastNameVisible, setIsLastNameVisible] = useState(false);
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

  useEffect(() => {
    const delay = 500;
    const timeout1 = setTimeout(() => setIsFirstNameVisible(true), delay);
    const timeout2 = setTimeout(() => setIsLastNameVisible(true), delay * 2);


    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);

    };
  }, []);

  const handleAppointmentClick = (index) => {
    const updatedAppointmentType = [...appointmentType];
    updatedAppointmentType[index].clicked =
      !updatedAppointmentType[index].clicked;
    setAppointmentType(updatedAppointmentType);
    const selectedTypes = updatedAppointmentType
      .filter((type) => type.clicked)
      .map((type) => type.type);
    setAppointmentTypes(selectedTypes);
  };

  const handleClick = (index) => {
    const updatedLocations = [...locations];
    updatedLocations[index].clicked = !updatedLocations[index].clicked;
    setLocations(updatedLocations);
    const selectedLocations = updatedLocations
      .filter((location) => location.clicked)
      .map((location) => location.location);
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

  const baseButtonClass = "text-indigo-700 py-2 px-4 rounded-full";
  const activeButtonClass = "bg-violet-100";
  const inactiveButtonClass =
    "border border-violet-400 hover:bg-violet-400 hover:text-white text-indigo-700";
    const styles = {
      animation: "slide-in 2s",
      transition: "opacity 0.5s",
    };
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
      setShowForm(true);
    }, []);
    
  return (
    <>

{/* <svg
  className="w-128 h-128"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
>

  <path
    d="M 50, 50
      m -50, 0
      a 50,50 0 0,1 100,0
      l -50,0
      z"
    fill="#c8b4d6"
  />
  <path
    id="curve"
    d="M 50, 50
      m -50, 0
      a 50,50 0 1,1 100,0
      a 50,50 0 1,1 -100,0"
    fill="none"
  />
  <text dy="20" dx="16" letterSpacing="2.5" fill="white" fontFamily="Larken">
    <textPath xlinkHref="#curve">
      <tspan fontSize="8">Let's make it happen</tspan>
    </textPath>
  </text>

</svg>; */}





<main className={`pt-10 mt-20 ${showForm ? 'opacity-100 fadeIn' : 'opacity-0'}`}>





      <div id=" contact-form">
        {emailSent ? (
          <span className={emailSent ? "block" : "hidden"}>
            Thank you for your message, we will be in touch soon!
          </span>
        ) : (
          
          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-screen-sm p-8 mx-auto space-y-12  rounded-xl"
          >
            <div className=" flex flex-col items-center">


            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_238_1184)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00242398 200C0.000809232 199.834 0 199.667 0 199.5C0 174.111 18.7366 153.097 43.1371 149.533C18.7701 146.188 0 125.286 0 100C0 72.3858 22.3858 50 50 50H50.5C22.7765 50 0.270718 27.6601 0.00242398 0H199.998C199.729 27.6601 177.224 50 149.5 50H150C177.614 50 200 72.3858 200 100C200 125.286 181.23 146.188 156.863 149.533C181.263 153.097 200 174.111 200 199.5C200 199.667 199.999 199.834 199.998 200H0.00242398Z" fill="url(#paint0_linear_238_1184)"/> </g> <defs> <linearGradient id="paint0_linear_238_1184" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#B0B9FF"/> <stop offset="1" stop-color="#E7E9FF"/> </linearGradient> <clipPath id="clip0_238_1184"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
         
              <div className="flex w-full gap-2">
                <div className="relative flex-1 w-1/2">
                  <input
                    type="text"
                    id="floating_filled"
                    style={{ borderRadius: "9999px", border: "1px solid gray" }}
                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border-1 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_filled"
                    className="absolute -mt-1 ml-4 bg-white px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative flex-1 w-1/2">
                  <input
                    type="text"
                    id="floating_second"
                    style={{ borderRadius: "9999px", border: "1px solid gray" }}
                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border-1 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_second"
                    className="absolute -mt-1 ml-4 bg-white px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              <div className="relative w-full mt-2">
                <input
                  type="text"
                  id="guardian"
                  style={{ borderRadius: "9999px", border: "1px solid gray" }}
                  className="mt-2 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border-1 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="guardian"
                  className="absolute mt-2  ml-4 bg-white px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Guardian
                </label>
              </div>

              <div className="flex w-full gap-2">
                <div className="relative flex-1 w-1/2 py-4">
                  <input
                    type="text"
                    id="phone"
                    style={{ borderRadius: "9999px", border: "1px solid gray" }}
                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border-1 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="phone"
                    className="absolute mt-4 ml-4 bg-white px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone Number
                  </label>
                </div>

                <div className="relative flex-1 w-1/2 py-4">
                <input
                    type="text"
                    id="email"
                    style={{ borderRadius: "9999px", border: "1px solid gray" }}
                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border-1 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="email"
                    className="absolute mt-4 ml-4 bg-white px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
              </div>
            </div>

            <div
              className="relative my-4 mb-3"
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
                className="text-indigo-300 pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Date of Birth*
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4">
 {appointmentType.map((button, index) => (
  <button
    className={`px-6 ${button.clicked ? 'py-2 border rounded-full border-purple-500 bg-purple-500 text-white' : 'py-2 rounded-full border border-purple-500 text-black'}`}
    key={button.type}
    type="button"
    onClick={() => handleAppointmentClick(index)}
  >
    {button.type}
  </button>
))}

</div>





<div>
  <div className="flex justify-between w-full px-4 py-2 font-medium text-left text-indigo-700 rounded-lg text-md focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
    <span>Choose Location</span>
  </div>
  <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
    {locations.map((button, index) => (
      <button
        className="px-4"
        key={button.location}
        type="button"
        onClick={() => handleClick(index)}
      >
        {button.clicked ? (
          <svg
            className="w-8"
            id="gradient_concentrics"
            data-name="gradient_concentrics"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
          >
            <g
              className="hover:shadow-lg hover:shadow-cyan-500/50"
              id="gradient_concentric"
              data-name="gradient_concentric"
            >
              <g>
                <circle cx="250" cy="250" r="250" fill="white" />
                <circle cx="250" cy="250" r="221.43" fill="#ddd6fe" />
                <circle cx="250" cy="250" r="192.86" fill="#ddd6fe" />
                <circle cx="250" cy="250" r="164.29" fill="#c4b5fd" />
                <circle cx="250" cy="250" r="135.71" fill="#c4b5fd" />
                <circle cx="250" cy="250" r="107.14" fill="#a78bfa" />
                <circle cx="250" cy="250" r="78.57" fill="#a78bfa" />
                {/* <circle cx="250" cy="250" r="50" fill="#ba9bc9" /> */}
              </g>
            </g>
          </svg>
        ) : (
          <svg
            className="w-8"
            stroke="black"
            id="gradient_concentrics"
            data-name="gradient_concentrics"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
          >
            <g id="gradient_concentric" data-name="gradient_concentric">
              <g>
                <circle cx="250" cy="250" r="250" fill="#f3f4f6" />
                {/* <circle cx="250" cy="250" r="192.86" fill="#f3f4f6" /> */}
                <circle cx="250" cy="250" r="164.29" fill="#d1d5db" />
                <circle cx="250" cy="250" r="78.57" fill="#9ca3af" />
              </g>
            </g>
          </svg>
        )}
        {button.location}
      </button>
    ))}
  </div>
</div>


            <div className="flex flex-col justify-center text-indigo-700">
              Preferred Day(s):
              <div className="flex flex-wrap justify-start gap-4 py-4 ml-4">
                {days.map((button, index) => (
                  <button
                    key={button.day}
                    type="button"
                    className={
                      button.clicked
                        ? `${baseButtonClass} ${activeButtonClass} `
                        : `${baseButtonClass} ${inactiveButtonClass}  `
                    }
                    onClick={() => handleDayClick(index)}
                  >
                    {button.day}
                  </button>
                ))}
              </div>
            </div>
            <div className="py-2 space-x-4 text-indigo-700">
              Preferred Time(s):
              <div className="flex flex-wrap justify-start gap-4 py-4 ml-4">
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

            <div className="flex flex-col h-32 border-2 border-indigo-100">
              <label className="flex flex-col" style={{ height: "100%" }}>
                <textarea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ fontStyle: "italic", color: "blue", height: "100%" }}
                ></textarea>
              </label>
            </div>

            <div className="flex justify-center">
              <button
                className="px-4 py-2 -mt-3 text-white bg-indigo-700 rounded-lg max-w-max"
                type="submit"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
    </>
  );
};

export default BookNow;
