'use client';

import { useState } from "react";
import Link from "next/link";

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const services = [
    {
      category: '3D Services',
      items: [
        { name: '3D VFX/CGI Animation', description: 'High-quality 3D animations with visual effects.' },
        { name: '3D Visualizing and 4K Rendering', description: 'Stunning 3D renders with ultra-realistic quality.' },
        { name: '3D Realistic Modeling', description: 'Creating lifelike 3D models for any need.' },
        { name: '3D Cartoonist Modeling', description: 'Fun and engaging cartoon-style 3D models.' },
        { name: '3D VRC Modeling', description: 'Virtual reality-ready 3D models for immersive experiences.' },
        { name: '3D Metahumans', description: 'Highly detailed 3D avatars for virtual worlds.' },
        { name: '3D Realistic Animation', description: 'Realistic 3D animations for your creative projects.' },
        { name: '3D Cartoonist Animation', description: 'Stylized animations for cartoons and animations.' },
        { name: '3D Anime Animation', description: 'Dynamic 3D anime-inspired animation work.' },
      ],
    },
    {
      category: '2D Services',
      items: [
        { name: '2D Storyboard Panels', description: '2D visual storytelling for your scripts.' },
        { name: '2D Realistic Art', description: 'Highly detailed 2D art for any project.' },
        { name: '2D Cartoonist Art', description: 'Fun, cartoon-style illustrations and designs.' },
        { name: '2D Realistic Animation', description: 'Realistic 2D animation for storytelling.' },
        { name: '2D Cartoonist Animation', description: 'Cartoon-style 2D animations for various needs.' },
        { name: '2D Anime Animation', description: 'Anime-inspired 2D animation with captivating visuals.' },
        { name: '2D Live Avatar', description: 'Interactive live avatars for digital projects.' },
        { name: 'Video Editing', description: 'Professional video editing for all your needs.' },
        { name: 'Motion Graphics', description: 'Eye-catching motion graphics for content.' },
      ],
    },
    {
      category: 'Brand Development',
      items: [
        { name: 'Logo Design', description: 'Custom logos that represent your brand identity.' },
        { name: 'Brand Identity', description: 'Creating cohesive brand identities for businesses.' },
        { name: 'Social Media Kit', description: 'Designing engaging social media templates.' },
        { name: 'Social Media Post Design', description: 'Unique designs for impactful social media posts.' },
        { name: 'Catalogue Design', description: 'Attractive and functional catalogue designs.' },
        { name: 'Billboard Design', description: 'Striking billboard designs for your campaigns.' },
        { name: 'Flex and Streamers Design', description: 'Custom designs for streamers and events.' },
        { name: 'Streamers Motion Graphics', description: 'Dynamic motion graphics for streaming content.' },
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 lg:sticky top-20 bg-white rounded-lg shadow-lg p-6 mb-8 lg:mb-0 lg:mr-8 transition duration-300 transform hover:scale-103">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Service Categories</h2>
          <nav>
            {services.map((serviceCategory, index) => (
              <div key={index} className="mb-3">
                <button
                  onClick={() => setSelectedCategory(serviceCategory.category)}
                  className={`w-full text-left py-2 px-4 rounded-md font-medium transition duration-200 focus:outline-none ${
                    selectedCategory === serviceCategory.category
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {serviceCategory.category}
                </button>
              </div>
            ))}
          </nav>
        </aside>

        {/* Service Content */}
        <main className="w-full lg:w-3/4">
          {services.map((serviceCategory, index) => (
            selectedCategory === serviceCategory.category && (
              <div key={index} className="mb-16">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8 tracking-tight">
                  {serviceCategory.category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {serviceCategory.items.map((service, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-103 p-6 h-full flex flex-col justify-between"
                    >
                      <div> {/* Added a wrapping div */}
                        <h3 className="text-xl font-medium text-gray-800 mb-2 tracking-tight">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="mt-4">
                        <Link
                          href={`/services/${service.name
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                          className="text-blue-600 hover:underline font-medium inline-block"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </main>
      </div>

      <div className="container mx-auto text-center mt-16 px-6 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 tracking-tight">
          Let us bring your ideas to life
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
          From concept to creation, we deliver services that exceed
          expectations.
        </p>
        <Link
          href="/OrderNow"
          className="inline-block px-8 py-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Order Now
        </Link>
      </div>
    </section>
  );
};

export default ServicesPage;