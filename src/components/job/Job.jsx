
import pic from "../../assets/2333362_310830-P8R3OL-35.jpg";
const Job = () => {
  return (
    <div>
      <div className="bg-gray-100 px-6 py-12 md:px-16">
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={pic}
              alt="Team working together"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              JOB FOR EVERYONE
            </h1>
            <p className="text-gray-600 leading-relaxed">
              In an ideal world, everyone deserves an opportunity to work, grow,
              and contribute to society. Job for Everyone is not just a
              phrase—it’s a vision where employment opportunities are accessible
              to all, regardless of background, skills, or experience. By
              embracing inclusivity, innovation, and skill development, we can
              create a future where every individual has a chance to succeed,
              earn a living, and build a better life. Whether through
              traditional jobs, freelancing, or entrepreneurship, there should
              always be a path for everyone to find meaningful work.Job for
              Everyone is not just a phrase—it’s a vision where employment
              opportunities are accessible to all, regardless of background,
              skills, or experience. By embracing inclusivity, innovation, and
              skill development, we can create a future where every individual
              has a chance to succeed, earn a living, and build a better life.
              Whether through traditional jobs, freelancing, or
              entrepreneurship, there should always be a path for everyone to
              find meaningful work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
