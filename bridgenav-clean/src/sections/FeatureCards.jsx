function FeatureCards() {
  const features = [
    {
      title: "QuickLog Pro",
      description: "Comprehensive SMS app for small commercial vessels, starting with UK Workboat Code compliance.",
      icon: "📋",
      status: "Available",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Maritime Tools",
      description: "Professional logbooks, ERB toolkits, BRM resources, and downloadable compliance tools.",
      icon: "🛠️",
      status: "Coming Soon",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Training Content",
      description: "BRM courses, Chief Mate guides, port operations content, and practical maritime publications.",
      icon: "📚",
      status: "In Development",
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Safety Systems",
      description: "Onboard familiarisation systems, log auto-generators, and inspection preparation tools.",
      icon: "⚓",
      status: "Planned",
      color: "bg-orange-50 border-orange-200"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-maritime-dark mb-4">
            Maritime Solutions Built by Professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools and training designed for real-world maritime operations, 
            backed by 7 years of pilotage experience and Master Unlimited CoC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.color} border-2 rounded-lg p-6 hover:shadow-lg transition-shadow`}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-maritime-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <span className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border">
                {feature.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards