function QuickLog() {
  const features = [
    {
      title: "UK Workboat Code Compliance",
      description: "Complete SMS solution designed specifically for UK Workboat Code requirements",
      icon: "🇬🇧"
    },
    {
      title: "Crew Management",
      description: "Track crew certifications, familiarisation status, and drill eligibility",
      icon: "👥"
    },
    {
      title: "Digital Logbooks",
      description: "Comprehensive digital logging system with automated reporting",
      icon: "📋"
    },
    {
      title: "Safety Checklists",
      description: "Customizable safety checklists and inspection workflows",
      icon: "✅"
    },
    {
      title: "Defect Tracking",
      description: "Log, track, and manage vessel defects with photo documentation",
      icon: "🔧"
    },
    {
      title: "Export & Reports",
      description: "Generate compliance reports and export data for inspections",
      icon: "📊"
    }
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-maritime-dark mb-6">QuickLog Pro</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The professional SMS app for small commercial vessels. Starting with UK Workboat Code compliance, 
            expanding to larger ships and international standards.
          </p>
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Ready for Production Use
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-maritime-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-maritime-dark text-white rounded-lg p-8 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">🚀 Coming Soon</h2>
          <p className="text-xl mb-6">
            QuickLog Pro is currently in final development and testing phase. 
            Built with real maritime experience and designed for practical use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-maritime-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Join Beta Testing
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-maritime-dark transition-colors">
              Request Demo
            </button>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-maritime-dark mb-6">Technical Specifications</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-maritime-blue rounded-full mr-3"></span>
                Progressive Web App (PWA) for offline use
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-maritime-blue rounded-full mr-3"></span>
                Works on all devices - desktop, tablet, mobile
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-maritime-blue rounded-full mr-3"></span>
                Cloud sync when internet available
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-maritime-blue rounded-full mr-3"></span>
                Secure data encryption and backup
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-maritime-blue rounded-full mr-3"></span>
                Export to PDF, Excel, and CSV formats
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-maritime-dark mb-6">Compliance Coverage</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                UK Workboat Code (WBC3) - Complete coverage
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                MCA Commercial Yacht Code - Planned
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                SOLAS requirements - Future release
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                ISM Code compliance - Development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Port State Control prep - Planned
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickLog