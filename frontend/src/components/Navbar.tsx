// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, Home, Star, MessageCircle, User, Settings } from 'lucide-react';

interface NavLinkProps {
  href: string;
  label: string;
  icon: React.ElementType;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, icon: Icon }: NavLinkProps) => {
    const isActive = pathname === href;
    
    return (
      <Link href={href}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
            isActive ? 'bg-level-3 text-white shadow-lg' : 'text-level-3 hover:bg-level-2'
          }`}
        >
          <Icon className="w-5 h-5" />
          <span className="font-medium">{label}</span>
        </motion.div>
      </Link>
    );
  };

  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/explore', label: 'Explore', icon: Star },
    { href: '/chat', label: 'Chat', icon: MessageCircle },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-level-1/80 backdrop-blur-md shadow-lg' : 'bg-level-1'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center gap-3" 
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-10 w-10 rounded-xl bg-level-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-level-4">AstroVeda</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-4">
            {links.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
           <Link href="/signin"> 
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 rounded-xl bg-level-4 text-white font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              <User className="w-5 h-5" />
              Sign In
            </motion.button>
            </Link> 
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-level-4" />
            ) : (
              <Menu className="w-6 h-6 text-level-4" />
            )}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-level-2"
          >
            <div className="space-y-2">
              {links.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-level-4 text-white font-medium shadow-lg"
              >
                <User className="w-5 h-5" />
                Sign In
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}