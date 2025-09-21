// src/components/ConnectWithUs.tsx
import React from 'react';

interface ConnectWithUsProps {
  className?: string;
}

function ConnectWithUs({ className = '' }: ConnectWithUsProps) {
  return (
    <div className={`bg-blue-50 p-6 rounded-lg ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Connect With Us</h2>
      
      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Email</p>
            <a 
              href="mailto:info@hopeforchildhood.org" 
              className="text-sm text-blue-600 hover:text-blue-800 break-all"
            >
              info@hopeforchildhood.org
            </a>
            <br />
            <a 
              href="mailto:support@hopeforchildhood.org" 
              className="text-sm text-blue-600 hover:text-blue-800 break-all"
            >
              support@hopeforchildhood.org
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Phone</p>
            <a 
              href="tel:+15551234567" 
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Office: (555) 123-4567
            </a>
            <br />
            <a 
              href="tel:+15559876543" 
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Crisis Hotline: (555) 987-6543
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Address</p>
            <p className="text-sm text-gray-600">
              123 Hope Street<br />
              Children's Services Center<br />
              Atlanta, GA 30309
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Support Hours</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <div className="flex justify-between">
            <span>Monday - Friday</span>
            <span>8:00 AM - 8:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span>10:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span>12:00 PM - 4:00 PM</span>
          </div>
        </div>
        <p className="text-xs text-red-500 mt-2">
          Emergency support available 24/7
        </p>
      </div>
    </div>
  );
};

export default ConnectWithUs;