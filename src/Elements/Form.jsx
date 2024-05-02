import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "./Button";

export default function Form() {
  const [state, handleSubmit] = useForm("mnqelnjz");
  if (state.succeeded) {
    return (
      <div className="flex pb-12">
        <span className="inline-block mx-auto text-lg font-medium text-center  p-2 bg-gray-100 rounded-md">
          Thanks for Connecting!
        </span>
        ;
      </div>
    );
  }
  return (
    <div className="pb-12">
      <form
        className="md:max-w-[50%] md:mx-auto  flex flex-col text-white gap-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Full Name</label>
          <input
            className="bg-gray-800 rounded-md p-2"
            type="text"
            name="name"
            id="name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
          <input
            className="bg-gray-800 rounded-md p-2"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            className="bg-gray-800 rounded-md p-2"
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          className="flex justify-center py-2 px-4 mt-2 hover:text-gray-100 text-md sm:text-xl rounded-md z-10 text-gray-300  transition-colors duration-200 font-medium bg-gradient-to-tr from-gray-900 to-gray-900 text-center"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
