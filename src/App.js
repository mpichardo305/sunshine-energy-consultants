import React from 'react';
import { Download, Sun, DollarSign, Home, Leaf, Phone } from 'lucide-react';
// import Image from 'next/image';

export default function SolarLanding() {
  return (
    <div className="min-h-screen">
      {/* Navbar - Not fixed anymore, changed color to green */}
      <nav className="bg-emerald-600 text-white w-full shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <Sun className="w-6 h-6 text-white" />
              <span className="text-lg font-semibold hidden sm:block">
                Sunshine Energy Consultants
              </span>
              <span className="text-lg font-semibold sm:hidden text-center whitespace-normal">
    Sunshine Energy <br /> Consultants
  </span>
            </div>

            {/* Call Button */}
            <a 
              href="tel:352-340-0931"
              className="inline-flex items-center px-4 py-2 bg-white text-emerald-600 rounded-full font-medium hover:bg-opacity-90 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden sm:block">Call us today: </span>
              <span>352-340-0931</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content - Adjusted padding since navbar is no longer fixed */}
      <div className="pt-4 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section with Background Image */}
          <header className="relative py-16 sm:py-24 text-center">
            <div className="absolute inset-0 z-0">
              <img 
                src="/photos/photo2.webp" 
                alt="Solar panels installation" 
                className="w-full h-full object-cover brightness-50"
              />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                We help homeowners make better energy decisions
              </h1>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Learn the lingo so you can get the best solar panel deals for your family and significantly lower your energy bills.
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all flex items-center gap-2 mx-auto">
                <Download className="w-5 h-5" />
                Download Your FREE Solar Guide
              </button>
            </div>
          </header>

          {/* Why Choose Solar Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Choose Solar Energy?
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Learn how solar panels can save you money, increase your home's value, and help the planet.
                  </p>
                  <img 
                    src="/photos/photo1.webp" 
                    alt="Solar installation process" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
                
                <div className="grid gap-8">
                  {/* Benefits cards */}
                  {/* Card 1 */}
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-100">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                      <DollarSign className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Lower Your Energy Bills
                    </h3>
                    <p className="text-gray-600">
                      Reduce monthly energy costs with affordable and efficient solar solutions.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-100">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                      <Home className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Increase Property Value
                    </h3>
                    <p className="text-gray-600">
                      Homes with solar systems sell faster and at higher prices.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-100">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                      <Leaf className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Go Green
                    </h3>
                    <p className="text-gray-600">
                      Contribute to a cleaner, greener environment by reducing carbon emissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Central Florida Section */}
          <section className="py-16 bg-emerald-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Helping 100 Families Go Solar in Central Florida
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Join the movement toward energy independence. Start saving with clean solar power.
              </p>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  What You'll Learn in Our Free Solar Guide
                </h3>
                <p className="text-gray-600 mb-8">
                  Discover how to select the best solar panels, understand financing options, and maximize your energy savings.
                </p>
                <a 
                  href="https://drive.google.com/uc?export=download&id=1QWjkvwMJ2UHqE163FpYEeLuuRYxglftS"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download Your FREE Solar Guide
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}