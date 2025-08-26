"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is ride booking safe?",
    answer:
      "Yes, our partner networks follow strict safety protocols for both riders and drivers.",
  },
  {
    question: "How do I book a ride?",
    answer:
      "Simply log in to our app, enter your destination, and choose your preferred ride option.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "You can pay using cash, credit/debit cards, or mobile wallets.",
  },
  {
    question: "Can I cancel my ride?",
    answer:
      "Yes, you can cancel before the ride starts. A small fee may apply depending on the timing.",
  },
];

export default function SimpleAccordion() {
  return (
    <section className="w-full max-w-2xl mx-auto lg:py-32 px-4">
      <h2
        className="text-3xl font-bold text-center mb-6 
             bg-gradient-to-r from-yellow-400 to-orange-500 
             bg-clip-text text-transparent"
      >
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((item, i) => (
          <AccordionItem
            key={i}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
}

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg p-0.5 bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="bg-white rounded-md">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center p-4 text-left"
        >
          <span className="text-gray-800 font-medium">{question}</span>
          <span
            className={`transform transition-transform ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="p-4 border-t border-gray-200 text-gray-600">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
