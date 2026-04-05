import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    question: "What is 5points Academy?",
    answer:
      "5points Academy is an online & offline coaching center that give tutions students with experienced mentors for personalized learning and guidance.",
  },
  {
    id: 2,
    question: "What is 5points Academy?",
    answer:
      "5points Academy is an online & offline coaching center that give tutions students with experienced mentors for personalized learning and guidance.",
  },
  {
    id: 3,
    question: "What is 5points Academy?",
    answer:
      "5points Academy is an online & offline coaching center that give tutions students with experienced mentors for personalized learning and guidance.",
  },
  {
    id: 4,
    question: "What is 5points Academy?",
    answer:
      "5points Academy is an online & offline coaching center that give tutions students with experienced mentors for personalized learning and guidance.",
  },
  {
    id: 5,
    question: "What is 5points Academy?",
    answer:
      "5points Academy is an online & offline coaching center that give tutions students with experienced mentors for personalized learning and guidance.",
  },
];

export default function FAQ() {
  return (
    <div>
      <h1 className="text-white text-2xl md:text-4xl font-bold pb-10 pt-5 md:py-15 text-center">
        Frequently Asked Questions
      </h1>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="bg-[#111717] border border-[#1d2322] rounded-xl overflow-hidden"
            >
              <AccordionTrigger className="text-white px-6 py-5 hover:no-underline cursor-pointer">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-[#94a3b8] px-6 pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
