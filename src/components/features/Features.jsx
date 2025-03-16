import React from "react";

const Features = () => {
  return (
    <div>
      <section className="features bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Key Features</h2>
          <div className="grid grid-cols-3 gap-12 mt-8">
            <div className="feature-card">
              <h3 className="text-xl font-semibold text-gray-700">
                Task Management
              </h3>
              <p className="text-gray-600 mt-4">
                Easily track and manage tasks assigned to employees.
              </p>
              <button className="btn-primary mt-6">Explore</button>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-semibold text-gray-700">
                Time Tracking
              </h3>
              <p className="text-gray-600 mt-4">
                Monitor employee working hours with accuracy.
              </p>
              <button className="btn-primary mt-6">Explore</button>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-semibold text-gray-700">
                Reports & Analytics
              </h3>
              <p className="text-gray-600 mt-4">
                Generate insightful reports to analyze productivity trends.
              </p>
              <button className="btn-primary mt-6">Explore</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
