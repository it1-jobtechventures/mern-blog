import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { CiTwitter } from "react-icons/ci";
import contact from '../assets/pb_contact.jpeg'

const Contact = ({ url }) => {
  const [formData, setFormData] = useState({
    // firstName: "",
    // lastName: "",
    name:"",
    countryCode: "",
    location:"",
    phoneNo: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle form data change
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!/^\+?\d{1,4}$/.test(formData.countryCode)) {
      toast.error("Invalid country code. Example: +1");
      return false;
    }
    if (!/^\d{10}$/.test(formData.phoneNo)) {
      toast.error("Phone number must be 10 digits long.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email address.");
      return false;
    }
    if (!formData.name|| !formData.message || !formData.location) {
      toast.error("All fields are required.");
      return false;
    }
    return true;
  };
  

  // // Handle form submission
  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) return;
  //   console.log("hjh",formData)
  //   // Save form data in the database
  //   try {
  //     setLoading(true);
  //     const response = await axios.post(`${url}/api/contact/sentEmail`, formData);
  //     console.log(response.data)
  //     if (response.data.success) {
  //       // Send email using EmailJS
  //       sendEmail(formData);
  //       toast.success("Form submitted successfully.");
  //       setFormData({
  //         // firstName: "",
  //         // lastName: "",
  //         name:"",
  //         email: "",
  //         countryCode: "",
  //         location:"",
  //         phoneNo: "",
  //         subject: "",
  //         message: "",
  //       });
  //     } else {
  //       toast.error("Error submitting form.");
  //     }
  //   } catch (error) {
  //     console.log(error.message)
  //     toast.error("Error submitting form.");
  //   }finally{
  //     setLoading(false);
  //   }
  // };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    console.log("Submitting form:", formData); // Debug log
  
    // try {
    //   setLoading(true);
    //   const response = await axios.post(`${url}/api/contact/sentEmail`, formData, {
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   console.log("API response:", response.data); // Debug log
  
    //   if (response.data.success) {
    //     sendEmail(formData);
    //     toast.success("Form submitted successfully.");
    //     setFormData({
    //       name: "",
    //       email: "",
    //       countryCode: "",
    //       location: "",
    //       phoneNo: "",
    //       subject: "",
    //       message: "",
    //     });
    //   } else {
    //     toast.error("Error submitting form.");
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error.message); // Debug log
    //   toast.error("Error submitting form.");
    // } finally {
    //   setLoading(false);
    // }
    try {
      setLoading(true);
      const response = await axios.post(`${url}/api/contact/sentEmail`, formData);
      console.log("API response:", response.data);
      if (response.data.success) {
        sendEmail(formData);
        toast.success("Form submitted successfully.");
        setFormData({
          name: "",
          email: "",
          countryCode: "",
          location: "",
          phoneNo: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error); // Log full error object
      toast.error("Error submitting form: " + (error.message || "Unknown error occurred."));
    } finally {
      setLoading(false);
    }
    
  };
  
  // Send email using EmailJS
  const sendEmail = (data) => {
    const templateParams = {
      // from_name: `${data.firstName} ${data.lastName}`,
      from_name: data.name,
      email: data.email,
      phoneNo:data.phoneNo,
      subject: data.subject,
      message: data.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          toast.success("Email sent successfully");
        },
        (error) => {
          console.log(error.message)
          toast.error("Error sending email");
        }
      );
  };

  return (
    <div className="relative bg-[#202020] pb-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#202020] text-white md:py-10 px-6 md:px-8">
        <div className="w-full md:w-1/2">
          <div className="w-full h-1 bg-[#ff9724] mb-4 mt-3 md:mt-0"></div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">CONTACT.</h1>
          <p className="mb-4 text-center md:text-left text-sm md:text-lg"> PRAKASH BANSAL</p>
          <p className="mb-6 text-center md:text-left text-sm"> PRAKASHBANSAL(AT)GMAIL(DOT)COM</p>
          <div className="flex justify-center md:justify-start space-x-4 text-3xl mb-6">
            <Link to={'https://www.instagram.com/prakbansal/?igsh=MW4zOWNyNXZneHhtYQ%3D%3D#'} target="_blank"><FaInstagram className="hover:text-[#ff9724] cursor-pointer"/></Link>
            <Link to={'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEFiEirkuP4uwAAAZQrxQ3Q0PGDDlczUzLg67c4tGhUG5qmltYWdTAD8eMyVsnCu2Qa9eB5d0W4-T4h3RX7cDnTp4DkJPrOwEkFI25TCZGSp7WnO_3TaHv4Jaga-BK069_BERA=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fprakashbansal'} target="_blank"><CiLinkedin className="hover:text-[#ff9724] cursor-pointer"/></Link>
            <Link to={'facebook.com/prakashbansal?rdid=aH7v1LuL0d0XT43i&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FV3rXm7jtLFwrMfGm%2F#'} target="_blank"><CiFacebook className="hover:text-[#ff9724] cursor-pointer"/></Link>
            <Link to={'https://x.com/i/flow/login?redirect_after_login=%2FPrakBansal'} target="_blank"><CiTwitter className="hover:text-[#ff9724] cursor-pointer"/></Link> 
          </div>
        </div>
        {/* <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src={contact} alt="profile" className="rounded-md shadow-lg w-4/5 max-w-xs md:max-w-md"/>
        </div> */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src={contact} alt="profile" className="md:h-[500px] h-[250px] object-cover object-top rounded-md"/>
        </div>
      </div>
        <div className=" inset-0 z-50 flex items-center justify-center  bg-opacity-50 overflow-auto">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-lg mx-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center"> Contact Us</h2>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 hidden sm:block">
                  Name *
                </label>
                <input type="text" name="name" value={formData.name} onChange={onChangeHandler} className="mt-1 sm:mt-0 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-[#ff9724] focus:border-[#ff9724]" placeholder="Name" required/>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 hidden sm:block">
                    Email *
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={onChangeHandler} className="mt-1 sm:mt-0 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-[#ff9724] focus:border-[#ff9724]" placeholder="Email" required/>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 hidden sm:block">
                    Location *
                  </label>
                  <input type="text" name="location" value={formData.location} onChange={onChangeHandler} className="mt-1 sm:mt-0 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-[#ff9724] focus:border-[#ff9724]" placeholder="Location" required/>
                </div>
              </div>
              <div className="mb-4">
                <div className="w-full">
                  <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700 hidden sm:block">
                    Phone No. *
                  </label>
                  <div className="flex">
                    <input type="number" name="countryCode" value={formData.countryCode} onChange={(e) => {const value = e.target.value; if(/^\d{0,4}$/.test(value)) {setFormData((prev) => ({...prev , countryCode: value}));}}} className="w-20 border border-gray-300 rounded-l-md shadow-sm p-2 focus:outline-none focus:ring-[#ff9724] focus:border-[#ff9724]" placeholder="+91" required/>
                    <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={(e) => { const value = e.target.value; if (/^\d{0,10}$/.test(value)) { setFormData((prev) => ({ ...prev, phoneNo: value }));}}} className="w-full  border border-gray-300 rounded-r-md shadow-sm p-2 focus:outline-none focus:ring-[#ff9724] focus:border-[#ff9724]" placeholder="Phone No." required/>
                  </div>
                </div>
                </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 hidden sm:block">
                  Subject
                </label>
                <input type="text" name="subject" value={formData.subject} onChange={onChangeHandler} className="mt-1 sm:mt-0 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-[#ff9724] focus:border-[#ff9724]" placeholder="Subject" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 hidden sm:block">
                  Message *
                </label>
                <textarea name="message" value={formData.message} onChange={onChangeHandler} className="mt-1 sm:mt-0 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-[#ff9724] focus:border-[#ff9724]" placeholder="Message" rows="4" required/>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-between items-center">
                <button disabled={loading} type="submit" className="w-full sm:w-auto bg-[#ff9724] text-white px-4 py-2 rounded-md hover:bg-[#f18847] transition">
                  {
                    loading ? (
                      <div className="flex justify-center items-center">
                        <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                      </div>
                    ):(
                      "Submit"
                    )
                  }
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Contact;
