import React, { Component } from "react";
import axios from 'axios';

import { Layout } from "../layout";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName:'',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/api/index.php",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({firstName: '', lastName: '', email: '', message: ''})
  }

  render() {
    return (
      <Layout>
        <h1 className="text-2xl block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Contact
        </h1>
        <div className="shadow bg-gray-50 p-6 flex justify-center">
          <form
            method="POST"
            id="contact-form" 
            onSubmit={this.handleSubmit.bind(this)}
            className="w-full max-w-lg"
          >
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                          border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
                          focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  value={this.state.firstName}
                  onChange={this.onFirstNameChange.bind(this)}
                  placeholder="Jane"
                ></input>
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                          border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                          focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.onLastNameChange.bind(this)}
                  placeholder="Doe"
                ></input>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                      border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white 
                      focus:border-gray-500"
                  id="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                ></input>
                <p className="text-gray-600 text-xs italic">
                  Some tips - as long as needed
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                ></textarea>
                <p class="text-gray-600 text-xs italic">
                  Re-size can be disabled by set by resize-none / resize-y /
                  resize-x / resize
                </p>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <button
                  className="shadow bg-purple-400 hover:bg-purple-400 focus:shadow-outline 
                      focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    )
  }

  onFirstNameChange(event) {
    this.setState({firstName: event.target.value})
  }

  onLastNameChange(event) {
    this.setState({lastName: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
}

export default Contact;
