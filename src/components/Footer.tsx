import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-light pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
             IIT Labs Private Limited
            </h3>
            <p className="text-gray-600 mb-4">
            IITLabs offers the ‘AI’ cloud for Banks, Insurers, and Financial Services (BFSI) institutions, providing access to curated AI APIs, advanced AI solutions, and robust AI governance tools to enable the deployment of trustworthy and self-learning AI engines.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-2 text-primary" />

                <span>Ayyappa Society, Madhapur, Hyderabad - 500081</span>
              </div>
             
              <div className="flex items-center text-gray-600">
                <Phone size={18} className="mr-2 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail size={18} className="mr-2 text-primary" />
                <span>info@IITLabs.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Newsletter
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Sirisha Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;