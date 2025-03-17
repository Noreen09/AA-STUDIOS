import React from 'react';


const Stats = () => {
  const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ];

  return (
    <section
      className="py-20 relative bg-cover bg-center bg-fixed" // Key styles for parallax
      style={{ backgroundImage: "url('/SpaceBack.jpg')" }} // Set your image path
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay for contrast */}
      <div className="container mx-auto px-6 relative z-10"> {/* z-index to bring content forward */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Stats
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 text-center hover:shadow-lg transition duration-300 border border-gray-200" // Added backdrop-blur
            >
              <dt className="text-xl font-semibold text-gray-700 mb-4">
                {stat.name}
              </dt>
              <dd className="text-4xl font-bold text-gray-800 leading-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;