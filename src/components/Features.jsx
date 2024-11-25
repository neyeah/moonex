import { motion } from 'framer-motion';
import { IconRocket, IconChartBar, IconShieldCheck } from '@tabler/icons-react';

const features = [
  { icon: IconRocket, title: 'Lightning Fast', description: 'Execute trades instantly across chains' },
  { icon: IconChartBar, title: 'Advanced Trading', description: 'Professional-grade trading tools' },
  { icon: IconShieldCheck, title: 'Battle-tested', description: 'Secure and audited protocol' },
];

export default function Features() {
  return (
    <div className="max-w-4xl mx-auto mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <Icon className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
