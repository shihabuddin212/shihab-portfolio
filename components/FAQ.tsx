const questions = [
  {
    question: "What kind of projects can you help with?",
    answer:
      "I work on full-stack web applications, IT support, network infrastructure, and deployment projects. Share your goals and I can suggest a practical approach.",
  },
  {
    question: "How do you start a project?",
    answer:
      "We start with a conversation about the requirements, timeline, and expected outcome. I then outline the scope and technical approach before development begins.",
  },
  {
    question: "Can you help deploy or support an existing application?",
    answer:
      "Yes. I can help review an existing setup, deploy applications to a VPS, and assist with ongoing technical support.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "Email me with a short description of your project or question. I will follow up to discuss the details.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-[#0d0d1a]" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400">
            A few details about working together.
          </p>
        </div>

        <div className="space-y-4">
          {questions.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-xl border border-slate-800 bg-[#111120] p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white marker:content-none">
                {question}
                <span
                  aria-hidden="true"
                  className="text-xl text-blue-400 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-slate-400">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
