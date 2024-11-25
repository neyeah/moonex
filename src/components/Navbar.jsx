import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconWallet } from '@tabler/icons-react';
import clsx from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed w-full top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-[#0B1121]/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Moonex
              </span>
            </motion.div>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {['Trade', 'Stake', 'Farm', 'Analytics', 'Docs'].map((item, index) => (
              <NavLink key={item} href="#" active={index === 0}>
                {item}
              </NavLink>
            ))}
          </div>

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
    </motion.nav>
  );
}

function NavLink({ href, children, active }) {
  return (
    <a
      href={href}
      className={clsx(
        'relative text-sm font-medium transition-colors',
        active ? 'text-white' : 'text-white/60 hover:text-white'
      )}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeNav"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
        />
      )}
    </a>
  );
}
