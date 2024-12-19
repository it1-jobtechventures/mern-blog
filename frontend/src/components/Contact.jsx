// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   // Handle form data change
//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     // Save form data in the database
//     try {
//       const response = await axios.post('http://localhost:4000/api/contact/sentEmail', formData);
//       if (response.data.success) {
//         // Send email using EmailJS
//         sendEmail(formData);
//         toast.success('Form submitted successfully.');
//         setFormData({
//           firstName: '',
//           lastName: '',
//           email: '',
//           subject: '',
//           message: ''
//         });
//       } else {
//         toast.error('Error submitting form.');
//       }
//     } catch (error) {
//       toast.error('Error submitting form.');
//     }
//   };

//   // Send email using EmailJS
//   const sendEmail = (data) => {
//     const templateParams = {
//       from_name: `${data.firstName} ${data.lastName}`,
//       email: data.email,
//       subject: data.subject,
//       message: data.message
//     };

//     emailjs
//       .send('service_jxoj6co', 'template_m8sf5gk', templateParams, 'e-_rfXCcHpoHXPCIy')
//       .then(
//         (response) => {
//           console.log('Email sent successfully:', response);
//         },
//         (error) => {
//           console.log('Error sending email:', error);
//         }
//       );
//   };

//   return (
//     <div className="max-w-4xl mx-auto pt-32 p-5 bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold mb-5">Contact Us</h1>
//       <form onSubmit={onSubmitHandler}>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="mb-4">
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//               First Name
//             </label>
//             <input type="text" name="firstName" value={formData.firstName} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required/>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//               Last Name
//             </label>
//             <input type="text" name="lastName" value={formData.lastName} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required/>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email Address
//           </label>
//           <input type="email" name="email" value={formData.email} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required/>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
//             Subject
//           </label>
//           <input type="text" name="subject" value={formData.subject} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required/>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//             Message
//           </label>
//           <textarea name="message" value={formData.message} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="4" required/>
//         </div>
//         <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-200">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const Contact = ({url}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNo:'',
    email: '',
    subject: '',
    message: ''
  });

  

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
        console.log("dksj" , formData)
        toast.success('Form submitted successfully.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNo:'',
          subject: '',
          message: ''
        });
      } else {
        toast.error('Error submitting form.');
      }
    } catch (error) {
      toast.error('Error submitting form.');
    }
  };

  // Send email using EmailJS
  const sendEmail = (data) => {
    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      subject: data.subject,
      message: data.message
    };

    emailjs
      .send('service_jxoj6co', 'template_m8sf5gk', templateParams, 'e-_rfXCcHpoHXPCIy')
      .then(
        (response) => {
          toast.success('Email sent successfully:', response);
        },
        (error) => {
          toast.error('Error sending email:', error);
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto md:pt-32 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-5 text-center">Contact Us</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input type="text" name="firstName" value={formData.firstName} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input type="text" name="lastName" value={formData.lastName} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3" required/>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="email" name="email" value={formData.email} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
              Phone No.
            </label>
            <input type='tel' name="phoneNo" value={formData.phoneNo} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3" required/>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input type="text" name="subject" value={formData.subject} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3" required/>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea name="message" value={formData.message} onChange={onChangeHandler} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3" rows="4" required/>
        </div>
        <button type="submit" className="w-full bg-[#ff6200] text-white font-bold py-3 rounded hover:bg-[#f18847] transition duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
