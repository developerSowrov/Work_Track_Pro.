import React from "react";

const Features = () => {
  return (
    <div>
      <section className="features bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            
            {/* Task Management */}
            <div className="feature-card p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-700">
                Task Management
              </h3>
              <p className="text-gray-600 mt-4">
                Easily track and manage tasks assigned to employees.
              </p>
              <a
                href="/features/task-management"
                className="mt-6 inline-block px-5 py-2 bg-[#795548] text-white font-semibold rounded-lg hover:bg-[#5d4037] transition duration-300"
              >
                Explore
              </a>
            </div>

            {/* Time Tracking */}
            <div className="feature-card p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-700">
                Time Tracking
              </h3>
              <p className="text-gray-600 mt-4">
                Monitor employee working hours with accuracy.
              </p>
              <a
                href="/features/time-tracking"
                className="mt-6 inline-block px-5 py-2 bg-[#795548] text-white font-semibold rounded-lg hover:bg-[#5d4037] transition duration-300"
              >
                Explore
              </a>
            </div>

            {/* Reports & Analytics */}
            <div className="feature-card p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-700">
                Reports & Analytics
              </h3>
              <p className="text-gray-600 mt-4">
                Generate insightful reports to analyze productivity trends.
              </p>
              <a
                href="/features/reports-analytics"
                className="mt-6 inline-block px-5 py-2 bg-[#795548] text-white font-semibold rounded-lg hover:bg-[#5d4037] transition duration-300"
              >
                Explore
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
