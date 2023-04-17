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
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  componentDidMount() {
    initTE({ Datepicker, Input });
  }
  render() {
    const buttonStyle = {
      background: this.state.clicked
        ? "linear-gradient(90deg, #FFB6C1, #FF69B4)"
        : "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
    };
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
        <button type="button" className={this.state.clicked ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-2 px-4 rounded" : "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"} onClick={this.handleClick}>
          Monday
        </button>
        <button type="button" className={this.state.clicked ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-2 px-4 rounded" : "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"} onClick={this.handleClick}>Tuesday</button>
        <button type="button" className={this.state.clicked ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-2 px-4 rounded" : "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"} onClick={this.handleClick}>Wednesday</button>
        </div>
        <div className="justify-center py-2 flex space-x-4">
        <button type="button" className={this.state.clicked ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-2 px-4 rounded" : "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"} onClick={this.handleClick}>Thursday</button>
        <button type="button" className={this.state.clicked ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-2 px-4 rounded" : "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"} onClick={this.handleClick}>Friday</button>
        <button type="button" className={this.state.clicked ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-2 px-4 rounded" : "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"} onClick={this.handleClick}>Saturday</button>
      </div>
      </div>
      <div className="py-2 flex space-x-4">
        Preferred Time(s)
        <div className="justify-center py-8 flex space-x-4">
        <button type="button" className={this.state.clicked ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-2 px-4 rounded" : "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"} onClick={this.handleClick}>Morning</button>
            <button type="button" className={this.state.clicked ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-2 px-4 rounded" : "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"} onClick={this.handleClick}>
              Afternoon
            </button>
            <button type="button" className={this.state.clicked ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-2 px-4 rounded" : "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"} onClick={this.handleClick}>
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
