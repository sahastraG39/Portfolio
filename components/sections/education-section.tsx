export function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-24 bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Education</h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Academic background and professional development in Statistics, Operations Research
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Cards */}
          <div
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover-lift transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">University of Peradeniya</h4>
                <p className="text-blue-600 font-medium">
                  B.Sc. (Hons.) in Statistics and Operations Research
                </p>
                <p className="text-gray-600 text-sm">Fourth Year Student • CGPA: 3.6/4.00</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">University of Colombo</h4>
                <p className="text-blue-600 font-medium">BIT</p>
                <p className="text-gray-600 text-sm">Bachelor of Information Technology</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">SLIIT</h4>
                <p className="text-blue-600 font-medium">
                  Certificate Programming in IT Applications
                </p>
                <p className="text-gray-600 text-sm">Professional IT Programming Certification</p>
              </div>
            </div>
          </div>

          {/* Professional Development Card */}
          <div
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover-lift transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Professional Development</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">Current Role</h4>
                <p className="text-blue-600 font-medium">Software Engineering in GenAI</p>
                <p className="text-gray-600 text-sm">
                  Developing innovative software solutions using generative AI and machine learning
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">Key Certifications</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>• IBM: Introduction to Data Analytics</p>
                  <p>• Great Learning: Intro to Data Science EDA with Python</p>
                  <p>• 365DataScience: Data Preprocessing with NumPy</p>
                  <p>• DataCamp: Intro Intermediate Python for Data Analytics</p>
                  <p>• DataCamp: Supervised Learning</p>
                  <p>• DataCamp: Unsupervised Learning</p>
                  <p>• DataCamp: Deep Learning</p>
                  <p>• DataCamp: Working with HuggingFace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
