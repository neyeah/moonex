import { motion } from 'framer-motion';
import { IconCurrencyDollar, IconShieldCheck, IconBan, IconAdjustmentsHorizontal } from '@tabler/icons-react';


const features = [
    {
      icon: IconCurrencyDollar,
      title: 'Cheapest TXs',
      description:
        'Exchange popular digital currencies at the cheapest possible transaction price.',
    },
    {
      icon: IconShieldCheck,
      title: 'CertiK Audited',
      description:
        'We are audited by CertiK, the leading security-focused ranking platform.',
    },
    {
      icon: IconBan, // Replace IconBlock with IconBan
      title: 'No Contract Sells',
      description:
        'No contract sells to fund the marketing wallets, ensuring user-first protocols.',
    },
    {
      icon: IconAdjustmentsHorizontal,
      title: 'CrossDex Support',
      description:
        'Trade seamlessly across multiple decentralized exchanges with unparalleled support.',
    },
  ];
  

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0B1121] via-[#15192e] to-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Our <span className="text-yellow-400">Features</span>
          </h2>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              className="p-8 rounded-lg bg-gradient-to-b from-[#1E293B] to-[#0F172A] hover:from-blue-500/20 hover:to-purple-500/20 transition-all shadow-lg shadow-black/40"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-6 mx-auto">
                <Icon className="w-10 h-10 text-blue-400" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-center text-lg">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
