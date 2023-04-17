import React, { Component, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "tw-elements";
import {
  Datepicker,
  Input,
  initTE,
} from "tw-elements";

class VirtualConsultation extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      days: [
        { day: "Monday", clicked: false },
        { day: "Tuesday", clicked: false },
        { day: "Wednesday", clicked: false },
        { day: "Thursday", clicked: false },
        { day: "Friday", clicked: false },
        { day: "Saturday", clicked: false },
        { day: "Sunday", clicked: false },
      ],
      times: [
        { time: "Morning", clicked: false },
        { time: "Afternoon", clicked: false },
        { time: "Evening", clicked: false },
      ],
    };

    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleTimeClick = this.handleTimeClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleDayClick = (index) => {
    const days = [...this.state.days];
    days[index].clicked = !days[index].clicked;
    this.setState({ days });
  };

  handleTimeClick = (index) => {
    const times = [...this.state.times];
    times[index].clicked = !times[index].clicked;
    this.setState({ times });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, this.formRef.current, process.env.REACT_APP_PUBLIC_KEY)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       // Reset the page after successful form submission
       window.location.reload();
    }, function(error) {
       console.log('FAILED...', error);
    });
  }

  componentDidMount() {
    initTE({ Datepicker, Input });
  }

  render() {
    const baseButtonClass = "text-slate-700 py-2 px-4 rounded-full";
    const activeButtonClass = "bg-gradient-to-r from-violet-100 via-violet-200 to-violet-300";
    const inactiveButtonClass = "border-2 border-violet-400 hover:bg-violet-400 hover:text-white";

    return (
      <div className= " mx-auto justify-center w-1/3">
      <form ref={this.formRef}>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          First name
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      
        <label
          htmlFor="last_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Last name
        </label>
        <input
          type="text"
          id="last_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      
        <label
          htmlFor="phone-number"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Phone
        </label>
        <input
          type="text"
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
          <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      
      <div
      className="my-4 relative mb-3"
      data-te-datepicker-init
      data-te-input-wrapper-init>
      <input
      type="text"
      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      placeholder="Select a date" />
      <label
      htmlFor="floatingInput"
      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
      >Date of Birth</label>
      </div>
      <div className="flex justify-center flex-col">
        Preferred Day(s):
        <div className="flex flex-wrap justify-start py-4 gap-4 ml-4">
        {this.state.days.map((button, index) => (
          <button
            key={button.day}
            type="button"
            className={
              button.clicked
                ? `${baseButtonClass} ${activeButtonClass}`
                : `${baseButtonClass} ${inactiveButtonClass}`
            }
            onClick={() => this.handleDayClick(index)}
          >
            {button.day}
          </button>
        ))}      
        </div>
      </div>
      <div className="py-2 space-x-4">
        Preferred Time(s):
        <div className="flex flex-wrap justify-start py-4 gap-4 ml-4">
        {this.state.times.map((button, index) => (
          <button
            key={button.time}
            type="button"
            className={
              button.clicked
                ? `${baseButtonClass} ${activeButtonClass}`
                : `${baseButtonClass} ${inactiveButtonClass}`
            }
            onClick={() => this.handleTimeClick(index)}
          >
            {button.time}
          </button>
        ))}
          </div>
        </div>
      </form>
      <div class="max-w-lg rounded-lg shadow-md shadow-indigo-600/50">
  <form ref={this.formRef} onSubmit={this.handleSubmit} action="" className="w-full p-4 my-8">
    <div className="mb-2">
      <label for="comment" className="text-lg text-gray-600">Inquiry</label>
      <textarea
        className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
        name="send"
        placeholder=""></textarea>
    </div>
    <div className="space-x-2">
    <button onClick={this.handleSubmit} type="submit" className="px-3 py-2 text-sm text-white bg-indigo-300 rounded-lg">
  Send
</button>
      <button
        className="px-3 py-2 text-sm text-blue-600 border border-blue-100 rounded-lg">
        Cancel
      </button>
    </div>
  </form>
</div>
    </div>
    );
  }
}

export default VirtualConsultation;