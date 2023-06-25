import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "tw-elements";
import { Datepicker, Input, initTE } from "tw-elements";
import { init } from "emailjs-com";
init(process.env.REACT_APP_PUBLIC_KEY);

const VirtualConsultation = () => {
  const [patient_first_name, setPatientFirstName] = useState("");
  const [patient_last_name, setPatientLastName] = useState("");
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
      patient_first_name,
      patient_last_name,
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
      .then(
        function (response) {
          console.log("Success!", response.status, response.text);
        },
        function (error) {
          console.log("Failed...", error);
        }
      );

    // setPatientFirstName("");
    // setPatientLastName("");
    // setGuardianName("");
    // setPhoneNumber("");
    // setEmail("");
    // const date_of_birth = dateOfBirthRef.current;
    // setPreferredDay("");
    // setPreferredTime("");
    // setMessage("");
    setEmailSent(true);
  };

  const baseButtonClass = "text-slate-700 py-2 px-4 rounded-full";
  const activeButtonClass =
    "bg-violet-700 text-white"; 
  const inactiveButtonClass =
    "border border-violet-400 hover:bg-violet-700 hover:text-white text-violet-700";

  return (
    <main
      id="contact-form"
      className="mt-20 p-8"
      style={{
        backgroundImage: `url("../../images/wavylinepurple.png"), url("../../images/halfcircle.svg")`,
        backgroundSize: "50%, 40%",
        backgroundPosition: "-10% center, top -25% right -45%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {emailSent ? (
        <span className={emailSent ? "block" : "hidden"}>
          Thank you for your message, we will be in touch soon!
        </span>
      ) : (
        <>
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-md bg-white/30 max-w-screen-sm mx-auto flex flex-col space-y-12 p-8 rounded-xl"
          >
            <h1 className="text-center text-black text-3xl text-indigo-700">
              Request a Virtual Consultation
            </h1>
            <p className="text-sm flex text-center text-indigo-700">
              Learn everything you need to know about starting in a
              complimentary consultation with one of our doctors . Book a
              meeting below.
            </p>
            <section className="flex gap-2 w-full">
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
            </section>

            <div className="relative  w-full">
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
            <section className="flex gap-2 w-full">
            <div className="w-1/2 relative flex-1 py-4">
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
                <div className="w-1/2 relative flex-1 py-4">
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
            </section>

            <div
              className="my-4 relative mb-3"
              data-te-datepicker-init
              data-te-input-wrapper-init
            >
              <input
                required
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Select a date"
                ref={dateOfBirthRef}
              />
              <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-indigo-300 text-sm transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Date of Birth*
              </label>
            </div>

            <section className="text-indigo-700 flex justify-center flex-col">
              Preferred Day(s):
              <div className="text-indigo-700 flex flex-wrap justify-start py-4 gap-4 ml-4">
                {days.map((button, index) => (
                  <button
                    key={button.day}
                    type="button"
                    className={`${baseButtonClass} ${
                      button.clicked ? activeButtonClass : inactiveButtonClass
                    } text-violet-800`}
                    onClick={() => handleDayClick(index)}
                  >
                    {button.day}
                  </button>
                ))}
              </div>
            </section>
            <section className="text-indigo-700">
              Preferred Time(s):
              <div className=" flex flex-wrap justify-start py-4 gap-4 ml-4">
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
            </section>

            <section className="flex flex-col space-y-8">
              <div className="flex flex-col">
                <label
                  htmlFor="comments"
                  className="absolute -mt-2 ml-4 px-2 pt-1 block mb-2 text-sm font-medium text-indigo-700 dark:text-white bg-white rounded"
                >
                  Tell us about your concern(s):
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-2 border-violet-200 rounded-lg px-2 py-4 bg-white"
           
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex self-center rounded-full bg-violet-300 px-4 py-2 text-white hover:bg-violet-400 hover:text-slate-100"
              >
                Submit
              </button>
            </section>
          </form>
        </>
      )}
    </main>
  );
};

export default VirtualConsultation;
