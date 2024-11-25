import { motion } from 'framer-motion';

const stats = [
  { value: '$5.2B+', label: '24h Volume' },
  { value: '2.1M+', label: 'Total Users' },
  { value: '15+', label: 'Chains' },
];

export default function Stats() {
  return (
    <div className="max-w-4xl mx-auto mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-8"
      >
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {value}
            </div>
            <div className="mt-1 text-sm text-gray-400">{label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
