import { useState, useEffect, useRef } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import ButtonWithArrow from '../common/ButtonWithArrow';
import gsap from 'gsap';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsHidden(scrollTop > 80 && scrollTop > lastScrollTop);
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(mobileMenuRef.current, { x: '100%' }, { x: '0%', duration: 0.5, ease: 'power3.out' });
    } else {
      gsap.to(mobileMenuRef.current, { x: '100%', duration: 0.5, ease: 'power3.in' });
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed w-full left-0 top-0 px-6 md:px-20 lg:px-36 py-5 bg-white transition-transform duration-300 ease-in-out text-sm z-50 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="./assets/logo-pigllet.png" alt="PIGLLET" className="w-8 h-8 object-cover" />
          <span className="font-extrabold text-lg">PIGLLET</span>
        </div>

        <button className="block md:hidden text-2xl focus:outline-none cursor-pointer" onClick={() => setIsMobileMenuOpen(true)}>
          <IoMenu />
        </button>

        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-red-400 transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ButtonWithArrow text="Download App" href="#" size={15} color="black" />
        </div>
      </div>

      <div ref={mobileMenuRef} className="fixed top-0 right-0 w-full h-screen bg-white flex flex-col items-center justify-center  space-y-6 text-lg md:hidden transform translate-x-full">
        <button className="absolute top-5 right-5 text-2xl cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
          <IoClose />
        </button>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-red-500 transition">
            {link.name}
          </a>
        ))}
        <ButtonWithArrow text="Download App" href="#" size={15} color="black" />
      </div>
    </nav>
  );
}
