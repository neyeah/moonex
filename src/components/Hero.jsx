import { motion } from 'framer-motion';
import { IconWallet } from '@tabler/icons-react';
import Stats from './Stats';
import Features from './Features';

export default function Hero() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg.jpg')" }} // Replace with your background image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-64">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-gray-500/10 border border-gray-500/20"
            >
              <span className="text-sm font-medium text-gray-300">
                ✨ Now Live on 15+ Chains
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
              <span>Trusted Multi-Chain</span>{' '}
              <span className="block lg:inline">DEX Platform</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-300 max-w-xl">
              Trade, earn, and own crypto on the all-in-one multi-chain DEX.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-xl font-medium shadow-lg hover:shadow-gray-500/40 transition-all"
              >
                <IconWallet size={20} />
                <span>Connect Wallet</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-4 border border-gray-500 text-white rounded-xl font-medium hover:bg-gray-500/10 transition-all"
              >
                <span>Trade Crypto</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Optional Additional Sections */}
        <Stats />
        <Features />
      </div>
    </div>
  );
}
