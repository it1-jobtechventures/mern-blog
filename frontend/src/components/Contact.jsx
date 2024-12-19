import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import { CiLinkedin, CiFacebook } from "react-icons/ci";

const Contact = ({ url }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle form data change
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Save form data in the database
    try {
      const response = await axios.post(`${url}/api/contact/sentEmail`, formData);
      if (response.data.success) {
        // Send email using EmailJS
        sendEmail(formData);
        toast.success("Form submitted successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNo: "",
          subject: "",
          message: "",
        });
        setIsModalOpen(false); // Close the modal on successful submission
      } else {
        toast.error("Error submitting form.");
      }
    } catch (error) {
      toast.error("Error submitting form.");
    }
  };

  // Send email using EmailJS
  const sendEmail = (data) => {
    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    emailjs
      .send(
        "service_jxoj6co",
        "template_m8sf5gk",
        templateParams,
        "e-_rfXCcHpoHXPCIy"
      )
      .then(
        (response) => {
          toast.success("Email sent successfully");
        },
        (error) => {
          toast.error("Error sending email");
        }
      );
  };

  return (
    // <div className="relative">
    //   {/* Main Contact Section */}
    //   <div className="flex flex-col md:flex-row items-center justify-between bg-[#202020] text-white py-16 px-8">
    //     <div className="w-full md:w-1/2">
    //       <div className=" bottom-0 left-0 w-full h-1 bg-[#FF6200]"></div>
    //       <h1 className="text-5xl font-bold mb-4">CONTACT.</h1>
    //       <p className="mb-6 text-lg">PRAKASH BANSAL</p>
    //       <p className="mb-6"> PRAKASHBANSAL(AT)GMAIL(DOT)COM</p>
    //       <div className="flex space-x-4 mb-6">
    //         <span className="text-3xl cursor-pointer"><CiLinkedin/></span>
    //         <span className="text-3xl cursor-pointer"><CiFacebook/></span>
    //       </div>
    //       <button onClick={() => setIsModalOpen(true)} className="bg-[#FF6200] text-white font-bold py-2 px-6 rounded hover:bg-[#f18847] transition duration-200">
    //         Get in Touch
    //       </button>
    //     </div>
    //     <div className="w-full md:w-1/2 mt-8 md:mt-0">
    //       <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className="rounded-md shadow-lg w-full max-w-sm md:max-w-md"/>
    //     </div>
    //   </div>

    //   {/* Modal */}
    //   {isModalOpen && (
    //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    //       <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
    //         <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    //         <form onSubmit={onSubmitHandler}>
    //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    //             <div>
    //               <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
    //                 First Name
    //               </label>
    //               <input type="text" name="firstName" value={formData.firstName} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required/>
    //             </div>
    //             <div>
    //               <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
    //                 Last Name
    //               </label>
    //               <input type="text" name="lastName" value={formData.lastName} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required/>
    //             </div>
    //           </div>
    //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    //             <div>
    //               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    //                 Email
    //               </label>
    //               <input type="email" name="email" value={formData.email} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required/>
    //             </div>
    //             <div>
    //               <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
    //                 Phone No.
    //               </label>
    //               <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required/>
    //             </div>
    //           </div>
    //           <div className="mb-4">
    //             <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
    //               Subject
    //             </label>
    //             <input type="text" name="subject" value={formData.subject} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3" required/>
    //           </div>
    //           <div className="mb-4">
    //             <label htmlFor="message" className="block text-sm font-medium text-gray-700">
    //               Message
    //             </label>
    //             <textarea name="message" value={formData.message} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="4" required/>
    //           </div>
    //           <div className="flex justify-between items-center">
    //             <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
    //               Close
    //             </button>
    //             <button type="submit" className="bg-[#FF6200] text-white px-4 py-2 rounded-md hover:bg-[#f18847] transition">
    //               Submit
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div className="relative">
  {/* Main Contact Section */}
  <div className="flex flex-col md:flex-row items-center justify-between bg-[#202020] text-white py-16 px-6 md:px-8">
    <div className="w-full md:w-1/2">
      <div className="w-full h-1 bg-[#FF6200] mb-4"></div>
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
        CONTACT.
      </h1>
      <p className="mb-4 text-center md:text-left text-sm md:text-lg">
        PRAKASH BANSAL
      </p>
      <p className="mb-6 text-center md:text-left text-sm">
        PRAKASHBANSAL(AT)GMAIL(DOT)COM
      </p>
      <div className="flex justify-center md:justify-start space-x-4 mb-6">
        <span className="text-3xl cursor-pointer">
          <CiLinkedin />
        </span>
        <span className="text-3xl cursor-pointer">
          <CiFacebook />
        </span>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#FF6200] text-white font-bold py-2 px-6 rounded hover:bg-[#f18847] transition duration-200 w-full md:w-auto"
      >
        Get in Touch
      </button>
    </div>
    <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
      <img
        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="profile"
        className="rounded-md shadow-lg w-4/5 max-w-xs md:max-w-md"
      />
    </div>
  </div>

  {/* Modal */}
  {isModalOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-lg mx-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
          Contact Us
        </h2>
        <form onSubmit={onSubmitHandler}>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4">
    <div>
      <label
        htmlFor="firstName"
        className="block text-sm font-medium text-gray-700 hidden sm:block"
      >
        First Name
      </label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={onChangeHandler}
        className="mt-1 sm:mt-0 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-[#FF6200] focus:border-[#FF6200]"
        placeholder="First Name"
        required
      />
    </div>
    <div>
      <label
        htmlFor="lastName"
        className="block text-sm font-medium text-gray-700 hidden sm:block"
      >
        Last Name
      </label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={onChangeHandler}
        className="mt-1 sm:mt-0 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-[#FF6200] focus:border-[#FF6200]"
        placeholder="Last Name"
        required
      />
    </div>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4">
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700 hidden sm:block"
      >
        Email
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChangeHandler}
        className="mt-1 sm:mt-0 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-[#FF6200] focus:border-[#FF6200]"
        placeholder="Email"
        required
      />
    </div>
    <div>
      <label
        htmlFor="phoneNo"
        className="block text-sm font-medium text-gray-700 hidden sm:block"
      >
        Phone No.
      </label>
      <input
        type="tel"
        name="phoneNo"
        value={formData.phoneNo}
        onChange={onChangeHandler}
        className="mt-1 sm:mt-0 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-[#FF6200] focus:border-[#FF6200]"
        placeholder="Phone No."
        required
      />
    </div>
  </div>
  <div className="mb-4">
    <label
      htmlFor="subject"
      className="block text-sm font-medium text-gray-700 hidden sm:block"
    >
      Subject
    </label>
    <input
      type="text"
      name="subject"
      value={formData.subject}
      onChange={onChangeHandler}
      className="mt-1 sm:mt-0 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-[#FF6200] focus:border-[#FF6200]"
      placeholder="Subject"
      required
    />
  </div>
  <div className="mb-4">
    <label
      htmlFor="message"
      className="block text-sm font-medium text-gray-700 hidden sm:block"
    >
      Message
    </label>
    <textarea
      name="message"
      value={formData.message}
      onChange={onChangeHandler}
      className="mt-1 sm:mt-0 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-[#FF6200] focus:border-[#FF6200]"
      placeholder="Message"
      rows="4"
      required
    />
  </div>
  <div className="flex flex-col sm:flex-row gap-4 sm:justify-between items-center">
    <button
      type="button"
      onClick={() => setIsModalOpen(false)}
      className="w-full sm:w-auto bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition"
    >
      Close
    </button>
    <button
      type="submit"
      className="w-full sm:w-auto bg-[#FF6200] text-white px-4 py-2 rounded-md hover:bg-[#f18847] transition"
    >
      Submit
    </button>
  </div>
</form>

      </div>
    </div>
  )}
</div>

  );
};

export default Contact;
