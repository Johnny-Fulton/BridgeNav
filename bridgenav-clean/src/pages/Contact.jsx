function Contact() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-maritime-dark mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Have questions about our maritime solutions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-maritime-dark mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-maritime-blue focus:border-maritime-blue"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-maritime-blue focus:border-maritime-blue"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Vessel (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-maritime-blue focus:border-maritime-blue"
                  placeholder="Your company or vessel name"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-maritime-blue focus:border-maritime-blue"
                >
                  <option value="">Select a subject</option>
                  <option value="quicklog">QuickLog Pro Inquiry</option>
                  <option value="training">Training & Courses</option>
                  <option value="demo">Request Demo</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-maritime-blue focus:border-maritime-blue"
                  placeholder="Tell us about your maritime operations and how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-maritime-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-maritime-dark mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-maritime-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">👨‍✈️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-maritime-dark">Founder</h3>
                  <p className="text-gray-600">
                    Johnny - UK Marine Pilot<br />
                    Master Unlimited CoC<br />
                    7 years pilotage experience
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-maritime-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">🌐</span>
                </div>
                <div>
                  <h3 className="font-semibold text-maritime-dark">Coverage</h3>
                  <p className="text-gray-600">
                    UK and International waters<br />
                    Workboat to merchant vessel operations<br />
                    Remote support available globally
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-maritime-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">⏰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-maritime-dark">Response Time</h3>
                  <p className="text-gray-600">
                    Maritime emergencies: Within 4 hours<br />
                    General inquiries: Within 24 hours<br />
                    Training requests: Within 48 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-maritime-light rounded-lg">
              <h3 className="text-lg font-semibold text-maritime-dark mb-3">
                Maritime Emergency Support
              </h3>
              <p className="text-gray-600 mb-4">
                For urgent maritime safety or compliance issues, please contact us immediately. 
                We understand that maritime operations can't wait.
              </p>
              <button className="bg-maritime-emergency text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact