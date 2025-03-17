'use client';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-bold tracking-tight text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At AA Studios, we weave captivating narratives through the art of
            animation. From our humble beginnings to the innovative studio we are
            today, our mission is to inspire, captivate, and forge meaningful
            connections with audiences worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-start">
          {/* Our Story Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#2C6259] tracking-tight mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2020, AA Studios emerged with a clear vision: to
                redefine the animation landscape. Our passionate team of artists
                and storytellers combines technical mastery with boundless
                creativity to craft exceptional narratives that deeply resonate
                with viewers.
              </p>
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#2C6259]  tracking-tight mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our driving force is to create animations that transcend
                cultural boundaries, connecting people across the globe through
                the universal language of art and storytelling. We strive to
                inspire, evoke emotions, and leave a lasting impact on every
                viewer.
              </p>
            </div>
          </div>

        
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
            <div className="relative aspect-w-1 aspect-h-1">
              <Image
                src="/team-photo.jpg"
                alt="AA Studios Team"
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#2C6259]  tracking-tight mb-2 pt-4">Meet the Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated team of talented individuals is the heart and soul
                of AA Studios. We are passionate about our craft and committed to
                delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
