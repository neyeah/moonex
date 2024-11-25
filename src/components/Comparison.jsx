import { motion } from 'framer-motion';
import { IconCheck, IconX } from '@tabler/icons-react';

export default function Comparison() {
  const comparisonData = [
    { point: 'Lower transaction fees', moonex: true, uniswap: false },
    { point: 'Cross-chain compatibility', moonex: true, uniswap: false },
    { point: 'Faster trade execution', moonex: true, uniswap: false },
    { point: 'Comprehensive analytics', moonex: true, uniswap: false },
    { point: 'Enhanced security protocols', moonex: true, uniswap: false },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0B1121] to-[#15192e] text-white">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Why <span className="text-yellow-400">MoonEX</span>?
        </h2>
      </div>

      {/* Animated Comparison Table */}
      <motion.div
        className="max-w-6xl mx-auto p-8 bg-[#0f172a] rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Table Header */}
        <div className="grid grid-cols-3 items-center text-center font-semibold text-lg md:text-2xl text-yellow-400 py-4 border-b border-gray-700">
          <div>Feature</div>
          <div>Moonex</div>
          <div>Uniswap</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-700">
          {comparisonData.map(({ point, moonex, uniswap }, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-3 items-center text-center py-6 text-base md:text-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Delay each row for animation
              }}
            >
              {/* Feature */}
              <div className="font-medium">{point}</div>

              {/* Moonex */}
              <div>
                {moonex ? (
                  <IconCheck className="text-green-400 mx-auto" size={28} />
                ) : (
                  <IconX className="text-red-400 mx-auto" size={28} />
                )}
              </div>

              {/* Uniswap */}
              <div>
                {uniswap ? (
                  <IconCheck className="text-green-400 mx-auto" size={28} />
                ) : (
                  <IconX className="text-red-400 mx-auto" size={28} />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
