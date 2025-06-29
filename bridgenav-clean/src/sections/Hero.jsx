function Hero() {
  return (
    <section className="bg-gradient-to-br from-maritime-light to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-maritime-dark mb-6">
            Professional Maritime
            <span className="block text-maritime-blue">Safety & Training</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Built by experienced marine pilots for the maritime industry. 
            Comprehensive SMS solutions, training resources, and safety systems 
            for workboats and merchant vessels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-maritime-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Try QuickLog Pro
            </button>
            <button className="border border-maritime-dark text-maritime-dark px-8 py-3 rounded-lg font-semibold hover:bg-maritime-dark hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero