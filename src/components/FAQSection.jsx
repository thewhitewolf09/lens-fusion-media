import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "How does your lead generation system work?",
    answer:
      "We use AI-driven targeting and proven advertising strategies to bring in high-quality leads directly to your pipeline.",
  },
  {
    question: "What results can I expect within the first month?",
    answer:
      "You can expect 60-100 new leads, 25-40 appointments, and 4-8 new clients within the first 30 days.",
  },
  {
    question: "Do I have to pay upfront?",
    answer:
      "No! We operate on a pay-on-completion basis, ensuring you only pay for results.",
  },
  {
    question: "What makes your service different from other lead generation agencies?",
    answer:
      "Unlike traditional agencies, we offer guaranteed leads, direct appointment setting, and a done-for-you system that removes all the guesswork.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto mt-16 px-6 flex flex-col md:flex-row">
      {/* Left Section - FAQ Title */}
      <h2 className="text-4xl font-bold text-white md:w-1/3">Frequently Asked Questions</h2>

      {/* Right Section - FAQ List */}
      <div className="md:w-2/3 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 text-xl font-medium text-white"
            >
              {faq.question}
              {openIndex === index ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <p className="text-gray-400 pb-4">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
