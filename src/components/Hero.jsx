import { motion } from 'framer-motion';
import { IconWallet } from '@tabler/icons-react';
import Stats from './Stats';

export default function Hero() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {/* Background Zoom Animation */}
      <motion.div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: "url('/images/bg.jpg')" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 sm:pt-40 md:pt-48 lg:pt-64">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-sm font-medium text-white/80">
                ✨ Now Live on 15+ Chains
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-5xl lg:text-6xl font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span>Trusted Multi-Chain</span>{' '}
              <span className="block lg:inline text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                DEX Platform
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg lg:text-xl text-gray-300 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Trade, earn, and own crypto on the all-in-one multi-chain DEX.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/40 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <IconWallet size={20} />
                <span>Connect Wallet</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 border border-blue-500 text-white font-medium rounded-xl hover:bg-blue-500/10 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <span>Trade Crypto</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <Stats />
      </div>
    </div>
  );
}
