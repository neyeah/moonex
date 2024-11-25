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
          duration: 6,
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 animate__animated animate__fadeIn animate__delay-1s"
            >
              <span className="text-sm font-medium text-white/80">
                ✨ Now Live on 15+ Chains
              </span>
            </motion.div>

            {/* Heading */}
            <div className="animate__animated animate__fadeIn">
  <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
    <span>Trusted Multi-Chain</span>{' '}
    <span className="block lg:inline text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
      DEX Platform
    </span>
  </h1>
</div>


            {/* Subheading */}
            <p className="text-lg lg:text-xl text-gray-300 max-w-xl animate__animated animate__fadeInUp animate__delay-3s">
              Trade, earn, and own crypto on the all-in-one multi-chain DEX.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/40 transition-all animate__animated animate__fadeInUp animate__delay-4s"
              >
                <IconWallet size={20} />
                <span>Connect Wallet</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 border border-blue-500 text-white font-medium rounded-xl hover:bg-blue-500/10 transition-all animate__animated animate__fadeInUp animate__delay-4s"
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
