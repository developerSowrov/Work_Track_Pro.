import React from "react";

const Faqs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {/* FAQ 1 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title text-lg sm:text-xl font-semibold">
            How does WorkTrackPro help in managing tasks?
          </div>
          <div className="collapse-content text-sm sm:text-base">
            WorkTrackPro streamlines task management by allowing users to create, assign, and track tasks in real time. It also provides automated reminders and progress reports.
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title text-lg sm:text-xl font-semibold">
            Can I integrate WorkTrackPro with other tools?
          </div>
          <div className="collapse-content text-sm sm:text-base">
            Yes, WorkTrackPro supports integration with tools like Slack, Google Calendar, and Trello, ensuring seamless workflow management.
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title text-lg sm:text-xl font-semibold">
            Is WorkTrackPro suitable for remote teams?
          </div>
          <div className="collapse-content text-sm sm:text-base">
            Absolutely! WorkTrackPro is designed for both in-office and remote teams, providing real-time updates and team collaboration features.
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title text-lg sm:text-xl font-semibold">
            Does WorkTrackPro offer analytics and reporting?
          </div>
          <div className="collapse-content text-sm sm:text-base">
            Yes, WorkTrackPro includes detailed analytics and reporting features that help you track team productivity, deadlines, and overall performance.
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title text-lg sm:text-xl font-semibold">
            How secure is my data on WorkTrackPro?
          </div>
          <div className="collapse-content text-sm sm:text-base">
            WorkTrackPro ensures top-notch security with end-to-end encryption, regular backups, and role-based access control.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
