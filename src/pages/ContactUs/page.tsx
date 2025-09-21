// src/pages/ContactUs.tsx
import React from 'react';
import ConnectWithUs from '../../components/ConnectWithUs';
import ContactForm from '../../components/ContactForm';


function ContactUs() {
  return (
    <div className="min-h-screen bg-[var(--bg-color)]">

      <div className=" shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hope for Childhood
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to support children and families in need. 
              Reach out to us anytime - we're ready to help.
            </p>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


          <div className="lg:col-span-1 order-2 lg:order-1">
            <ConnectWithUs />
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2">
            <ContactForm />
          </div>

        </div>
      </div>
     
    </div>
  );
};

export default ContactUs;