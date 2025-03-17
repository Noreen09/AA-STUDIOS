'use client';

import React, { useState } from 'react';

const OrderNow = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    message: string;
    budget: string;
    field: string;
    services: string[];
  }>({
    name: '',
    email: '',
    phone: '',
    message: '',
    budget: '',
    field: '',
    services: [],
  });

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => {
        const updatedServices = checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value);
        return { ...prev, services: updatedServices };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const toggleCategory = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  const categories = [
    {
      name: 'Brand Development',
      services: [
        'Logo Design',
        'Brand Identity',
        'Social Media Kit',
        'Social Media Post Design',
        'Catalogue Design',
        'Bill Board Design',
        'Flex and Streamers Design',
        'Streamers Motion Graphics',
      ],
    },

    {
      name: '3D Services',
      services: [
        '3D VFX/ CGI Animation',
        '3D Visualizing and 4K Rendering',
        '3D Realistic Modeling',
        '3D Cartonist Modeling',
        '3D VRC Modeling',
        '3D Metahumans',
        '3D Realistic Animation',
        '3D Cartonist Animation',
        '3D Anime Animation',
      ],
    },
    {
      name: '2D Services',
      services: [
        '2D Storyboard Panels',
        '2D Realistic Art',
        '2D Cartonist Art',
        '2D Realistic Animation',
        '2D Cartonist Animation',
        '2D Anime Animation',
        '2D Live Avatar',
        'Video Editing',
        'Motion Graphics',
      ],
    },
   
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Your order has been submitted successfully!');
      } else {
        console.error('Failed to submit order.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-[#111111] min-h-screen py-10 text-white flex justify-center">
      <div className="w-full max-w-4xl bg-[#1c1c1c] p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-700 mb-6">
          Hire Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black text-white focus:ring-2 focus:ring-[#48CAE4] focus:outline-none shadow-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black text-white focus:ring-2 focus:ring-[#48CAE4] focus:outline-none shadow-md"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black text-white focus:ring-2 focus:ring-[#48CAE4] focus:outline-none shadow-md"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block mb-2">What Work Do You Want Us to Do?</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black text-white focus:ring-2 focus:ring-[#48CAE4] focus:outline-none shadow-md"
              placeholder="Describe your requirements..."
              rows={4}
            ></textarea>
          </div>

          {/* Budget */}
          <div>
            <label className="block mb-2">Budget</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black text-white focus:ring-2 focus:ring-[#48CAE4] focus:outline-none shadow-md"
            >
              <option value="" disabled>
                Select your budget
              </option>
              <option value="Under $100">$0 - $100</option>
              <option value="$100-$500">$100 - $500</option>
              <option value="$500-$1000">$500 - $1000</option>
              <option value="$1000+">$1000+</option>
            </select>
          </div>

          {/* Services */}
          <div>
            <label className="block mb-4 text-lg font-semibold">Services</label>
            {categories.map((category) => (
              <div key={category.name} className="mb-4">
                <button
                  type="button"
                  className="w-full text-left text-md font-bold text-[#48CAE4] focus:outline-none focus:ring-2 focus:ring-[#48CAE4] bg-black py-2 px-4 rounded-lg"
                  onClick={() => toggleCategory(category.name)}
                >
                  {category.name}
                </button>
                {activeCategory === category.name && (
                  <div className="flex flex-wrap gap-4 mt-4">
                    {category.services.map((service) => (
                      <label key={service} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          onChange={handleChange}
                          className="accent-[#48CAE4] focus:ring-[#48CAE4]"
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-900 text-black font-bold py-3 px-6 rounded-lg shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderNow;
