import React from "react";
import Image from "next/image";

interface ServiceProps {
  params: { serviceName: string };
}

const ServicePage = ({ params }: ServiceProps) => {
  const { serviceName } = params;

  const formattedServiceName = serviceName
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <section className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-24 min-h-screen">
      <div className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-lg max-w-3xl"> {/* Added container styling */}
        <div className="mb-12"> {/* Added margin bottom */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            {formattedServiceName}
          </h1>
          <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full w-24 mb-6"></div> {/* Added separator */}
          <p className="text-lg text-gray-700 leading-relaxed">
            Detailed information about{" "}
            <strong className="font-semibold text-gray-800">
              {formattedServiceName}
            </strong>{" "}
            goes here. You can provide more information, images, videos, or any
            other content to elaborate on this service.
          </p>
        </div>

        {/* Example of adding an image */}
        <div className="mb-12">
          <Image
            width="100" height="100"
            src="/placeholder-image.jpg" // Replace with your image URL
            alt={formattedServiceName}
            className="rounded-lg shadow-md w-full object-cover aspect-video" // Added styling for image
          />
        </div>

        {/* Example of a bulleted list of benefits/features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Benefits
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Benefit 1: Briefly describe the benefit.</li>
            <li>Benefit 2: Briefly describe the benefit.</li>
            <li>Benefit 3: Briefly describe the benefit.</li>
          </ul>
        </div>
        {/* Example of a call to action with improved styling */}
        <div className="mt-8 text-center">
          <button className="px-8 py-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Contact Us for More Information
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;