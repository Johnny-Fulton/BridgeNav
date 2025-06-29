function CTA() {
  return (
    <section className="bg-maritime-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Streamline Your Maritime Operations?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join maritime professionals who trust BridgeNav for their safety management systems, 
          training resources, and compliance tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-maritime-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            Start Free Trial
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-maritime-dark transition-colors">
            Schedule Demo
          </button>
        </div>
        <p className="text-gray-400 text-sm mt-6">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}

export default CTA