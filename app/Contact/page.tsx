// app/Contact/page.tsx

"use client"; // Mark as a client component

import Footer from "@/components/Footer";
import { useState } from "react";
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", { name, email, address, message });
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback Submitted:", feedback);
    setFeedback(""); // Clear feedback after submission
  };

  return (
    <div className="flex flex-col items-center justify-between min-w-maxw-full h-screen pt-10  bg-black pb-20"> {/* Added padding-bottom */}
      <div className="flex-grow">
      <div className='flex items-center justify-center '>

<MoveLeft color="#befdb9" />
<Link href={"./"} className='text-lg font-bold mr-[1200px] z-40 text-green-200'>Back</Link>

</div>  
        <h1 className="text-3xl font-bold m-7">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10 w-full max-w-full">
          <input
            type="text"
            className="p-2 h-[50px] w-[800px] border rounded "
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="p-2 border rounded h-[50px] w-[800px]"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            className="p-2 h-[50px] w-[800px] border rounded"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <textarea
            className="p-2 h-[50px] w-[800px]  border rounded "
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 h-[50px] w-[800px]"
          >
            Submit
          </button>
        </form>

        <h2 className="text-2xl font-bold mb-10">Feedback</h2>
        <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-4 w-full max-w-md">
          <textarea
            className="p-2 border rounded w-full"
            placeholder="Leave your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit Feedback
          </button>
        </form>
      </div>
      {/* <div><br /> <br /><br /><br /><br /><br /><br  /></div> */}

      
       
      <div className="mt-60"></div><Footer/>
    </div>
  );
};

export default Contact;
