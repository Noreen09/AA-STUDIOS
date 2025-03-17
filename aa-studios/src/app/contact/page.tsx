'use client'

import { useState, useRef, useEffect } from 'react'
import { Field, Label, Switch } from '@headlessui/react'
import Link from 'next/link'


export function Contact() {
  const [agreed, setAgreed] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null); 
  const [mapHeight, setMapHeight] = useState(450); 

  useEffect(() => {
    const handleResize = () => {
      if (mapRef.current) {
        setMapHeight(mapRef.current.offsetWidth * (9 / 16)); 
      }
    };
    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };
  
    try {
      const response = await fetch('http://127.0.0.1:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        console.error('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
          Contact Sales
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Get in touch with us to discuss your ideas and work opportunities!
        </p>
      </div>

      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-12"> 
        {/* Left Side: Embedded Map with Subtle Overlay */}
        <div className="lg:w-1/2 w-full relative overflow-hidden rounded-lg shadow-md" ref={mapRef} style={{ height: mapHeight }}> {/* Set height dynamically */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097746!2d144.95592831531695!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e8d3e26e5f4b!2sMelbourne%20VIC%20Australia!5e0!3m2!1sen!2sus!4v1633378423557!5m2!1sen!2sus" // Replace with your actual map URL
            width="100%"
            height="100%" // Make iframe fill container
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Our Location"
            className="w-full h-full object-cover rounded-lg absolute inset-0" 
          />
          <div className="absolute inset-0 bg-white opacity-20 rounded-lg"></div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:w-1/2 w-full">
          <form
            onSubmit={handleContactSubmit}
            action="#"
            method="POST"
            className="bg-white rounded-lg px-8 py-10 shadow-md"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input id="name" name="name" type="text" placeholder="Enter your full name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input id="email" name="email" type="email" placeholder="Enter your email" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input id="phone" name="phone" type="tel" placeholder="Enter your phone number" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Write your message here" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <Field className="flex items-center space-x-2">
                <Switch checked={agreed} onChange={setAgreed} className={`relative inline-flex h-6 w-11 items-center rounded-full ${agreed ? 'bg-[#2C6259]' : 'bg-gray-400'}`} >
                  <span className="sr-only">Agree to privacy policy</span>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${agreed ? 'translate-x-6' : 'translate-x-1'}`} />
                </Switch>
                <Label className="text-sm text-gray-600">I agree to the <Link href="#" className="text-blue-500 underline">privacy policy</Link>.</Label>
              </Field>
              <div>
                <button type="submit" className="w-full rounded-md bg-[#2C6259] py-3 text-lg font-semibold text-white hover:bg-[#2C6257] focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" >Lets Talk</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
