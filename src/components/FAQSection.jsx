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
    question:
      "What makes your service different from other lead generation agencies?",
    answer:
      "Unlike traditional agencies, we offer guaranteed leads, direct appointment setting, and a done-for-you system that removes all the guesswork.",
  },
  {
    question: "Do you offer refunds if I’m not satisfied?",
    answer:
      "Yes! We have a results-driven guarantee. If you don’t see measurable improvements, we offer a full refund.",
  },
  {
    question: "How do I get started with your service?",
    answer:
      "Simply book a free consultation with us, and we’ll create a customized strategy tailored to your business needs.",
  },
  {
    question: "Can I cancel the service anytime?",
    answer:
      "Yes, you can cancel at any time. However, we recommend giving our system at least 60 days to show its full potential.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-black text-white py-28 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* ✅ Sticky Heading - Stops at the bottom of the FAQ section */}
        <div className="md:w-1/3">
          <h2 className="text-4xl font-extrabold mb-6 sticky top-24">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ✅ FAQ List - Allows scrolling inside the section */}
        <div className="md:w-2/3 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center text-xl w-full py-4  font-medium hover:text-gray-300 transition-all hover:cursor-pointer"
              >
                {faq.question}
                <motion.div
                  key={index}
                  initial={{ rotate: 0, opacity: 0.6 }}
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {openIndex === index ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </motion.div>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="text-gray-400 mt-2 text-xl">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
