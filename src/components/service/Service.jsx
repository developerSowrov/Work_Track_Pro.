import { BarChart, DollarSign, CalendarCheck, Scale } from "lucide-react";

const Service = () => {
  return (
    <section className="py-12 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Features</h2>
        <p className="text-gray-600 mt-2 w-8/12 mx-auto">
          We offer advanced tools to streamline employee management, boost
          productivity, simplify workflows, and enhance workplace collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Feature Card - HR Analytics */}
        <div className="bg-[#EEEEEE] p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center">
            <div className="bg-[#795548] p-4 rounded-full">
              <BarChart className="w-10 h-10 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#795548] mt-4">
            HR Analytics & Reporting
          </h3>
          <p className="text-gray-600 mt-2">
            We provide detailed reports and insights on key HR metrics like
            performance, turnover rates, and workforce trends.
          </p>
        </div>

        {/* Feature Card - Payroll Management */}
        <div className="bg-[#FFF6DA] p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center">
            <div className="bg-[#795548] p-4 rounded-full">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#795548] mt-4">
            Payroll Management
          </h3>
          <p className="text-gray-600 mt-2">
            Automate salary calculations, tax deductions, and payroll processing
            to ensure timely payments and compliance.
          </p>
        </div>

        {/* Feature Card - Attendance & Time Tracking */}
        <div className="bg-[#F4D793] p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center">
            <div className="bg-[#795548] p-4 rounded-full">
              <CalendarCheck className="w-10 h-10 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#795548] mt-4">
            Attendance & Time Tracking
          </h3>
          <p className="text-gray-600 mt-2">
            Track employee attendance, work hours, and overtime to improve
            workforce productivity and reduce errors.
          </p>
        </div>

        {/* Feature Card - Compliance & Legal Support */}
        <div className="bg-[#96CEB4] p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center">
            <div className="bg-[#795548] p-4 rounded-full">
              <Scale className="w-10 h-10 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#795548] mt-4">
            Compliance & Legal Support
          </h3>
          <p className="text-gray-600 mt-2">
            Ensure all employee management practices comply with labor laws and
            regulations, with document storage and audit trails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
