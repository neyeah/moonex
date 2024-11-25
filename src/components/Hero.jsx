import { motion } from 'framer-motion';
import { IconArrowRight, IconWallet, IconChartBar } from '@tabler/icons-react';
import Stats from './Stats';
import Features from './Features';

export default function Hero() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/laptop.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20"
            >
              <span className="text-sm font-medium text-purple-300">✨ Now Live on 15+ Chains</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight space-y-4 text-white">
              <span className="block">Next-Gen</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                DeFi Trading
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-xl">
              Trade, earn, and build on the most advanced decentralized trading platform.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
              >
                <IconWallet size={20} />
                <span>Connect Wallet</span>
                <IconArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-4 bg-white/5 rounded-xl font-medium border border-white/10 hover:bg-white/10 transition-all"
              >
                <IconChartBar size={20} />
                <span>Start Trading</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <Stats />
        <Features />
      </div>
    </div>
  );
}
