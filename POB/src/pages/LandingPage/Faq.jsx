import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router';

const items = [
  {
    value: 'discover',
    trigger: 'What can I find on People of Bayelsa?',
    content:
      'Discover local events, jobs, businesses, places to stay, and useful services. It is a place to explore what is happening around Bayelsa and find the people and opportunities in your community.',
  },
  {
    value: 'getting-started',
    trigger: 'How do I get started?',
    content:
      'Open the feed to see what the community is sharing, or explore the site to browse local opportunities and places. You can also connect with others through the community section.',
  },
  {
    value: 'community',
    trigger: 'Who is People of Bayelsa for?',
    content:
      'It is for Bayelsans and anyone who wants to discover, support, and stay connected with the people, businesses, and stories of Bayelsa.',
  },
];

function Faq() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="border-y border-teal-900/5 bg-teal-50/70 py-16 dark:border-white/5 dark:bg-teal-950/30 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-16">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">
            Good to know
          </p>
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-teal-950 dark:text-white sm:text-4xl"
          >
            A few things you might be wondering.
          </h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            Learn how People of Bayelsa can help you discover and connect with
            your community.
          </p>
          <Link
            to="/explore"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-teal-800 transition-colors hover:text-teal-600 dark:text-teal-200 dark:hover:text-teal-100"
          >
            Explore the community
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="rounded-3xl border border-teal-900/10 bg-white p-5 shadow-xl shadow-teal-950/5 dark:border-white/10 dark:bg-slate-900 sm:p-8">
          <Accordion defaultValue={['discover']} className="w-full">
            {items.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border-teal-900/10 last:border-b-0 dark:border-white/10"
              >
                <AccordionTrigger className="py-5 text-base font-semibold text-teal-950 hover:no-underline dark:text-white">
                  {item.trigger}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;