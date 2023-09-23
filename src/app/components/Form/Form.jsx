"use client";
import { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const response = await axios.post("/api", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status !== 200) throw new Error(response.statusText);
      toast.success("Message sent");
      setData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex flex-col space-y-4 max-w-2xl"
    >
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Name"
        className="border border-gray-300 p-2 rounded-md"
        required
      />
      <input
        type="tel"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        placeholder="Telephone"
        className="border border-gray-300 p-2 rounded-md"
        required
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
        className="border border-gray-300 p-2 rounded-md"
        required
      />
      <textarea
        name="message"
        value={data.message}
        onChange={handleChange}
        placeholder="Message"
        className="border border-gray-300 p-2 rounded-md"
        required
      ></textarea>
      <button type="submit" className="bg-main text-white p-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default Form;
