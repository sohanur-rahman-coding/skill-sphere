import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaMapPin,
} from "react-icons/fa";
import logo from "../../public/assests/skillsphere.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <Image src={logo} alt="logo" width={50} height={50}></Image>
                </div>
                <p className="text-2xl md:text-3xl font-black tracking-wider">
                  <span className="text-white">Skill</span>
                  <span className="text-cyan-500">Sphere</span>
                </p>
              </div>
              <p className="text-gray-400 mb-4">
                Dive into our curated selection of industry-leading programs
                designed to help you master new skills.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white mb-4">For Students</h3>
              <ul className="space-y-2">
                <li>
                  <button className="hover:text-blue-400 transition-colors">
                    Browse Classes
                  </button>
                </li>
                <li>
                  <button className="hover:text-blue-400 transition-colors">
                    Find Mentors
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-4">For Mentors</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Become a Mentor
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Mentor Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Earnings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <FaMailBulk size={18} />
                  <a
                    href="mailto:hello@littlementors.com"
                    className="hover:text-blue-400 transition-colors"
                  >
                    skillsphere@littlementors.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone size={18} />
                  <a
                    href="tel:+911234567890"
                    className="hover:text-blue-400 transition-colors"
                  >
                    +8801747744641
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <FaMapPin size={18} className="mt-1 flex-shrink-0" />
                  <span>Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">
                © 2026 Skill Sphere. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
