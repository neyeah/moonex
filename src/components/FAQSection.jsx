import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconPlus, IconChevronDown } from '@tabler/icons-react';

const faqData = [
  {
    question: 'How do I get a Referral Code?',
    answer: 'Referral codes can be generated in your user dashboard under the "Referral" section.',
  },
  {
    question: 'Do I get rewarded in tokens or ETH when I refer buyers?',
    answer: 'You receive your rewards in ETH instantly once someone you refer makes a transaction!',
  },
  {
    question: 'How do I withdraw my earnings?',
    answer: 'Withdrawals can be processed directly to your wallet through the "Withdraw" tab.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0B1121] via-[#15192e] to-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            <span className="text-yellow-400">FAQs</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1E293B] rounded-lg overflow-hidden shadow-md"
            >
              {/* Question */}
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-[#2B3444]"
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                {activeIndex === index ? (
                  <IconChevronDown size={20} />
                ) : (
                  <IconPlus size={20} />
                )}
              </div>

              {/* Answer */}
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                }}
                className="overflow-hidden"
              >
                <p className="px-6 py-4 text-gray-400">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
