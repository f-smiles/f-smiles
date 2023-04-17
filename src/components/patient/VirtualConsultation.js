import React, { Component, useState } from "react";
import "tw-elements";
import {
  Datepicker,
  Input,
  initTE,
} from "tw-elements";

class VirtualConsultation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: "slate-100"
    };
  }
  handleButtonClick = (color, time) => { 
    if (time === "Morning") {
      this.setState({ morningButton: color });
    }
    this.setState({ buttonColor: color });
  }


  componentDidMount() {
    initTE({ Datepicker, Input });
  }
  render() {
    const { buttonColor } = this.state;
    return (
      <div className= " mx-auto justify-center w-1/3">
      <form>
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
        Preferred Day(s)
        <div className="justify-center py-2 flex space-x-4">
        <button
                className={buttonColor === "yellow" ? "bg-yellow-500 px-4 border rounded-full" : "px-4 border border-slate-900 rounded-full"}
                onClick={() => this.handleButtonClick("yellow")}
              >
                Monday
              </button>
        <button className= " px-4 border border-slate-900 rounded-full">Tuesday</button>
        <button className= " px-4 border border-slate-900 rounded-full">Wednesday</button>
        </div>
        <div className="justify-center py-2 flex space-x-4">
        <button className= " px-4 border border-slate-900 rounded-full">Thursday</button>
        <button className= " px-4 border border-slate-900 rounded-full">Friday</button>
        <button className= " px-4 border border-slate-900 rounded-full">Saturday</button>
      </div>
      </div>
      <div className="py-2 flex space-x-4">
        Preferred Time(s)
        <div className="justify-center py-8 flex space-x-4">
        <button
  className={buttonColor === "yellow" ? "bg-yellow-500 px-4 border rounded-full" : "px-4 border border-slate-900 rounded-full"}
  onClick={() => this.handleButtonClick("yellow", "morning")} 
>
  Morning
</button>
            <button className="px-4 border border-slate-900 rounded-full hover:bg-gradient-to-r from-blue-500 to-purple-500 focus:bg-gradient-to-r from-blue-500 to-purple-500 focus:outline-none">
              Afternoon
            </button>
            <button className="px-4 border border-slate-900 rounded-full hover:bg-gradient-to-r from-blue-500 to-purple-500 focus:bg-gradient-to-r from-blue-500 to-purple-500 focus:outline-none">
              Evening
            </button>
          </div>
        </div>
      </form>
    </div>
    );
  }
}

export default VirtualConsultation;
