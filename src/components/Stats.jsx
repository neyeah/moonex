import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { value: 5.2, suffix: 'B+', label: '24h Volume' },
  { value: 2.1, suffix: 'M+', label: 'Total Users' },
  { value: 15, suffix: '+', label: 'Chains' },
  { value: 1.2, suffix: 'K+', label: 'Markets Supported' }, // Added new stat
];

export default function Stats() {
  return (
    <div className="max-w-4xl mx-auto mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8" // Updated for 4 columns on larger screens
      >
        {stats.map(({ value, suffix, label }) => (
          <div key={label} className="text-center">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              <CountUp
                end={value}
                duration={2.5}
                suffix={suffix}
                decimals={value % 1 !== 0 ? 1 : 0} // Handles decimal values
              />
            </div>
            <div className="mt-1 text-sm text-gray-400">{label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
