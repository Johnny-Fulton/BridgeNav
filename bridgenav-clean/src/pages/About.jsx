function About() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-maritime-dark mb-6">About BridgeNav</h1>
          <p className="text-xl text-gray-600">
            Professional maritime solutions built by experienced mariners for the industry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-maritime-dark mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              BridgeNav was founded by Johnny, a UK marine pilot with a Master Unlimited Certificate of Competency 
              and 7 years of specialized pilotage experience. Before pilotage, Johnny worked at sea in various 
              deck officer roles, including Master, primarily on large passenger ferries.
            </p>
            <p className="text-gray-600 mb-4">
              Drawing from real-world maritime experience and identifying regulatory gaps, BridgeNav develops 
              practical solutions that address the actual pain points faced by maritime professionals daily.
            </p>
            <p className="text-gray-600">
              Our platform serves both workboat operators and large merchant vessel crews, providing the tools 
              and training necessary for safe, compliant maritime operations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-maritime-dark mb-6">Our Mission</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-maritime-blue rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Provide professional-grade safety management systems for commercial vessels
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-maritime-blue rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Deliver practical maritime training based on real-world experience
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-maritime-blue rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Bridge the gap between regulatory requirements and operational reality
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-maritime-blue rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Support maritime professionals with tools that work in the real world
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-maritime-light rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-maritime-dark mb-4">
            Built by Maritime Professionals, for Maritime Professionals
          </h3>
          <p className="text-gray-600 mb-6">
            Every feature, every tool, and every training resource is designed with practical maritime 
            experience in mind. We understand the challenges because we've lived them.
          </p>
          <button className="bg-maritime-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  )
}

export default About