import Image from 'next/image';


const Portfolio = () => {
  return (
  <>
    <div className="bg-[#111111] py-10">
      <br/><br/><br/>
      <div className="mx-auto max-w-2xl text-center mb-6">
        <h2 className="text-4xl font-semibold tracking-tight text-[#48CAE4] sm:text-5xl">Our Work</h2>
        <p className="mt-2 text-lg text-white">A showcase of our featured projects.</p>
      </div>
      {/* Carousel Section */}
      <div className="relative overflow-hidden">
        <div className="flex space-x-4 animate-slide">
          {/* Slide 1 */}
          <div className="flex-shrink-0 w-1/3 hover:scale-105 transform transition-transform duration-300">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src="/project1.jpg" width={300} height={200} alt="Project 1" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">Project 1</h2>
                <p className="text-sm text-gray-600">Description of project 1.</p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex-shrink-0 w-1/3 hover:scale-105 transform transition-transform duration-300">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src="/project2.jpg" width={300} height={200} alt="Project 2" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">Project 2</h2>
                <p className="text-sm text-gray-600">Description of project 2.</p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="flex-shrink-0 w-1/3 hover:scale-105 transform transition-transform duration-300">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src="/project3.jpg" width={300} height={200} alt="Project 3" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">Project 3</h2>
                <p className="text-sm text-gray-600">Description of project 3.</p>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="flex-shrink-0 w-1/3 hover:scale-105 transform transition-transform duration-300">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src="/project4.jpg" width={300} height={200} alt="Project 4" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">Project 4</h2>
                <p className="text-sm text-gray-600">Description of project 4.</p>
              </div>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="flex-shrink-0 w-1/3 hover:scale-105 transform transition-transform duration-300">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src="/project5.jpg" width={300} height={200} alt="Project 5" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">Project 5</h2>
                <p className="text-sm text-gray-600">Description of project 5.</p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-1/3 hover:scale-105 transform transition-transform duration-300">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src="/project6.jpg" width={300} height={200} alt="Project 6" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">Project 6</h2>
                <p className="text-sm text-gray-600">Description of project 6.</p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-1/3 hover:scale-105 transform transition-transform duration-300">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src="/project7.jpg" width={300} height={200} alt="Project 7" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">Project 7</h2>
                <p className="text-sm text-gray-600">Description of project 7.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      

      <div className="mx-auto max-w-2xl text-center mt-10 mb-10">
          <h2 className="text-4xl font-semibold tracking-tight text-[#48CAE4] sm:text-5xl">Watch Our Work</h2>
          <p className="mt-2 text-lg text-white">A video showcasing our work in action.</p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-2/3">
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your video ID
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Portfolio Video"
            ></iframe>
          </div>
        </div>
     
    </div>
    </>
  );
};

export default Portfolio;
