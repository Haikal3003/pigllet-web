import { MdOutlineMailOutline } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'Facebook', icon: <FaFacebookF size={20} />, href: 'https://facebook.com' },
  { name: 'Twitter', icon: <FaTwitter size={20} />, href: 'https://twitter.com' },
  { name: 'Instagram', icon: <FaInstagram size={20} />, href: 'https://instagram.com' },
  { name: 'Github', icon: <FaGithub size={20} />, href: 'https://github.com' },
];

export default function Footer() {
  return (
    <footer className="w-full  pt-14 border-t border-t-slate-200">
      <div className="flex justify-between gap-8 px-36 max-sm:px-6 max-sm:flex-col">
        <div>
          <div id="logo" className="flex items-center space-x-4 w-full mb-8">
            <img src="./assets/logo-pigllet.png" alt="PIGLLET" className="w-6 h-6 object-cover" />
            <span className="font-bold">PIGLLET</span>
          </div>

          <div>
            <h2 className="text-base font-semibold">Subscribe</h2>
            <p className="mt-2 text-gray-400 text-sm mb-6">Join our newsletter to stay up to date on features and releases.</p>
            <div className="flex w-[400px] max-sm:w-full items-center space-x-2 p-2 max-sm:p-1 rounded-full border border-slate-300 ">
              <div className="p-2 rounded-full bg-slate-100">
                <MdOutlineMailOutline size={20} />
              </div>
              <input type="email" name="newsletter" id="newsletter" placeholder="Enter your email..." className="w-full text-black p-2 rounded-full text-sm" />
              <button className="text-xs py-3 px-6 bg-red-300 rounded-full text-black font-semibold hover:bg-red-400">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="flex space-x-12">
          <div className="text-left">
            <h2 className="text-sm font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-black text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-left">
            <h2 className="text-sm font-semibold">Follow Us</h2>
            <div className="flex mt-4 space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="text-gray-600 hover:text-black">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 border-t py-4 px-36 max-sm:px-6 max-sm:text-xs border-gray-200  text-center text-gray-500 text-sm">
        <span>© {new Date().getFullYear()} PIGLLET. All rights reserved.</span>
        <div className="flex space-x-4">
          <a href="/privacy-policy" className="hover:text-black text-gray-500 text-sm max-sm:text-xs">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-black text-gray-500 max-sm:text-xs">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
