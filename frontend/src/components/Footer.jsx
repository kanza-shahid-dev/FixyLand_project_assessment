import {
  FaFacebookF,
  FaInstagram,
  FaBehance,
  FaXTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  const year = new Date().getFullYear();
  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaXTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaBehance />, href: "#" },
  ];
  const explore = [
    "About Hotel",
    "Pricing",
    "Hotel Staff",
    "Latest News",
    "Contact Us",
  ];

  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-12 px-6 md:px-20 lg:px-40 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12 mb-10">
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">Fixyland</h2>
          <p className="text-sm leading-relaxed mb-6 text-gray-500 max-w-xs">
            Nam libero tempore cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus maxime placeat facere.
          </p>
          <div className="flex gap-4 text-white text-lg ">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:text-green-500 bg-gray-900 p-3 transition-colors duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-3 text-sm">
            {explore.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-green-500 text-gray-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm mb-3 text-gray-500">
            7631 Sabina Park, 115 Devon Isle,
            <br />
            Louisiana, USA
          </p>
          <p className="text-sm mb-2">(+1) 987 654 3210</p>
          <p className="text-sm">info@domain.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <div className="bg-[#1b1b1b] p-6 sm:p-8 rounded-xl text-left">
            <h3 className="text-white text-lg font-semibold mb-6">
              Newsletter
            </h3>
            <div className="flex items-center border-b border-gray-600 pb-2 mb-3">
              <input
                type="email"
                placeholder="info@domain.com"
                className="bg-transparent flex-1 text-sm focus:outline-none placeholder-gray-400"
              />
            </div>
            <div className="flex items-center gap-2 text-xs">
              <input type="checkbox" id="agree" className="accent-green-600" />
              <label htmlFor="agree">I agree to all terms and policies</label>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p className="text-center md:text-left">
          © Copyright {year} Fixyland. All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-green-500">
            Terms and Conditions
          </a>
          <a href="#" className="hover:text-green-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
