import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IconWallet,
  IconMenu2,
  IconX,
  IconExchange,
  IconPlant,
  IconTractor,
  IconChartBar,
  IconBook,
} from '@tabler/icons-react';
import clsx from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const navItems = [
    { name: 'Trade', icon: <IconExchange size={20} /> },
    { name: 'Stake', icon: <IconPlant size={20} /> },
    { name: 'Farm', icon: <IconTractor size={20} /> },
    { name: 'Analytics', icon: <IconChartBar size={20} /> },
    { name: 'Docs', icon: <IconBook size={20} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed w-full top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#0B1121]/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Side: Menu Icon and Logo */}
          <div className="flex items-center gap-3">
            {/* Menu Icon for Mobile */}
            <div className="flex md:hidden">
              <button onClick={() => setSideBarOpen(true)}>
                <IconMenu2 size={24} className="text-white" />
              </button>
            </div>

            {/* Logo */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: 10 }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Moonex
              </span>
            </motion.div>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item, index) => (
              <NavLink key={item.name} href="#" active={index === 0}>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Connect Wallet Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium px-6 py-2.5 rounded-xl"
          >
            <IconWallet size={20} />
            <span>Connect Wallet</span>
          </motion.button>
        </div>
      </div>

      {/* Side Bar for Mobile */}
      <AnimatePresence>
        {sideBarOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setSideBarOpen(false)}
            ></div>

            {/* Side Bar Content */}
            <motion.div
              className="relative w-64 bg-gradient-to-b from-[#1e293b] to-[#0f172a] shadow-xl"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              {/* Side Bar Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className="text-xl font-bold text-white">Menu</span>
                <button onClick={() => setSideBarOpen(false)}>
                  <IconX size={24} className="text-white" />
                </button>
              </div>

              {/* Side Bar Navigation Items */}
              <div className="px-4 py-6 space-y-6">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.name}
                    href="#"
                    active={index === 0}
                    mobile
                    onClick={() => setSideBarOpen(false)}
                  >
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                  </NavLink>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 w-full p-4">
                <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg flex flex-col items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    Join Our Community!
                  </span>
                  <button className="mt-2 px-4 py-2 bg-white text-blue-600 font-medium rounded-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ href, children, active, mobile, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={clsx(
        'relative font-medium transition-colors',
        mobile
          ? 'block text-lg text-white/80 hover:text-white'
          : 'text-base md:text-lg',
        active ? 'text-white' : 'text-white/60 hover:text-white'
      )}
    >
      {children}
      {active && !mobile && (
        <motion.div
          layoutId="activeNav"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
        />
      )}
    </a>
  );
}
