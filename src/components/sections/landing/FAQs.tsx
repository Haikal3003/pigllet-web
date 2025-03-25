import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const faqs = [
  {
    question: 'What is PIGLLET, and how does it work?',
    answer: 'PIGLLET is a finance app that helps you manage your money, track expenses, and make secure transactions with ease.',
  },
  {
    question: 'Is PIGLLET safe for storing my financial data?',
    answer: 'Yes, PIGLLET uses advanced encryption and security protocols to ensure your financial data remains safe and private.',
  },
  {
    question: 'How can I add funds to my PIGLLET account?',
    answer: 'You can add funds via bank transfer, credit/debit card, or supported e-wallet services within the app.',
  },
  {
    question: 'Does PIGLLET charge any transaction fees?',
    answer: 'PIGLLET offers free transactions for standard transfers, but some services may have minimal fees. Check our pricing details for more information.',
  },
  {
    question: 'Can I set financial goals in PIGLLET?',
    answer: 'Yes, PIGLLET allows you to set savings goals, track progress, and get insights to help you reach your financial targets.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    answerRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openIndex === index) {
          gsap.to(ref, { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' });
        } else {
          gsap.to(ref, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' });
        }
      }
    });
  }, [openIndex]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-20">
      <div className="grid grid-cols-[1fr_2fr] max-md:grid-cols-1 gap-4 max-md:gap-10">
        <div id="col-1">
          <h2 className="text-slate-500 text-sm">FAQ'S</h2>
          <h1 className="text-3xl font-extrabold capitalize mb-6 ">frequently asked question</h1>
          <span className="text-xs text-slate-500">Ask any questions</span>
          <h2 className="text-red-400">support@pigllet.com</h2>
        </div>

        <div id="col-2">
          <div className="">
            {faqs.map((faq, index) => (
              <div key={index} className={`p-4 border border-transparent  border-b-slate-200 ${index === 0 ? 'border-t-slate-200' : ''}`} onClick={() => toggleFAQ(index)}>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <span className="text-xl cursor-pointer">{openIndex === index ? '−' : '+'}</span>
                </div>
                <div
                  ref={(el) => {
                    answerRefs.current[index] = el;
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
