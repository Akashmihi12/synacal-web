// src/pages/contactus/ContactUs.tsx

"use client";
import React from "react";
import ContactMainTitle from "../../components/contactus/ContactMainTitle";
import QuickContacts from "../../components/contactus/QuickContacts";
import ContactForm from "../../components/contactus/ContactForm";
import Started_bar from "../../components/getstarted/Started_bar"; // Reusing Started_bar for ReadyToStart section
import QandABlock from "../../components/q_and_a/QandABlock"; // Reusing QandABlock

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      {/* Main Title and Contact Form Section */}
      <div className="flex flex-col items-center justify-center py-8 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <ContactMainTitle />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 justify-items-center mt-12">
          <QuickContacts />
          <ContactForm />
        </div>
      </div>

      {/* Ready To Start Section spanning full width */}
      <div className="relative w-screen">
        <Started_bar /> {/* Reusing Started_bar for ReadyToStart section */}
      </div>

      {/* Frequently Asked Questions Section (Full Width) */}
      <div className="relative w-screen py-12 flex justify-center">
        <QandABlock /> {/* Reusing the Q&A component */}
      </div>
    </div>
  );
};

export default ContactUs;
