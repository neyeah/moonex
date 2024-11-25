import { IconBrandTwitter, IconBrandFacebook, IconBrandInstagram, IconMail } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0B1121] via-[#15192e] to-[#0F172A] py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              MoonEX
            </h2>
            <p className="text-gray-400">
              Revolutionizing decentralized trading with cutting-edge technology, security, and scalability.
            </p>
            <div className="flex space-x-4">
              <IconBrandTwitter className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
              <IconBrandFacebook className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
              <IconBrandInstagram className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
              <IconMail className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Trade</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Stake</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">FAQs</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400">
              Stay updated with the latest news, features, and updates.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg bg-gray-800 border-none focus:outline-none w-full text-gray-300"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-r-lg hover:opacity-90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 MoonEX. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
