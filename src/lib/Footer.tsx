import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlay, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcStripe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* Subscribe Section */}
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            Subscribe for Ride Updates 🚖
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg mx-auto">
              <label className="sr-only" htmlFor="email"> Email </label>
              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="your@email.com"
              />
              <button
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-orange-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* About + Social */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              <span className="font-bold">Ride Share Bd</span> — A fast and secure ride booking
              application. Book rides anytime, track drivers in real-time, and enjoy safe journeys across Bangladesh.
            </p>

            <p className="mt-3 text-center lg:text-left text-gray-600">
              📧 Email:
              <a
                href="mailto:mdhakimshorkar123@gmail.com"
                className="ml-1 underline hover:text-orange-600"
              >
                mdhakimshorkar123@gmail.com
              </a>
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex justify-center gap-4 lg:justify-start text-gray-600">
              <a href="#" className="hover:text-orange-600"><FaFacebookF size={22} /></a>
              <a href="#" className="hover:text-orange-600"><FaInstagram size={22} /></a>
              <a href="#" className="hover:text-orange-600"><FaTwitter size={22} /></a>
            </div>

            {/* App Download */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800"
              >
                <FaGooglePlay size={22} />
                <span>
                  <small className="block text-xs">Get it on</small>
                  <span className="text-sm">Google Play</span>
                </span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900"> Services </strong>
              <ul className="mt-6 space-y-1">
                <li><a className="text-gray-700 hover:text-orange-600" href="#"> Ride Booking </a></li>
                <li><a className="text-gray-700 hover:text-orange-600" href="#"> Driver Dashboard </a></li>
                <li><a className="text-gray-700 hover:text-orange-600" href="#"> Admin Panel </a></li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> About </strong>
              <ul className="mt-6 space-y-1">
                <li><a className="text-gray-700 hover:text-orange-600" href="#"> About Us </a></li>
                <li><a className="text-gray-700 hover:text-orange-600" href="#"> Careers </a></li>
                <li><a className="text-gray-700 hover:text-orange-600" href="#"> Our Team </a></li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Support </strong>
              <ul className="mt-6 space-y-1">
                <li><a className="text-gray-700 hover:text-orange-600" href="#"> FAQs </a></li>
                <li><a className="text-gray-700 hover:text-orange-600" href="#"> Contact </a></li>
                <li><a className="text-gray-700 hover:text-orange-600" href="#"> Live Chat </a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-600">
          <FaCcVisa size={40} />
          <FaCcMastercard size={40} />
          <FaCcPaypal size={40} />
          <FaCcStripe size={40} />
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} <span className="font-bold">Ride Share Bd</span>. All rights reserved.
            <br />
            Developed & Copyright by <span className="font-semibold">Md Abdul Hakim</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
