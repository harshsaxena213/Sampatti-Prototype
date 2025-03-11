import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Have questions about Sampatti and our financial tools? Here are answers to the most common questions. If you don't see what you're looking for, please reach out to our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What is Sampatti and how can it help me with my finances?
              </AccordionTrigger>
              <AccordionContent>
                Sampatti is a comprehensive financial platform designed to help individuals and families manage their finances effectively. We provide tools for tax calculation, investment tracking, financial planning, and educational resources. Our goal is to simplify complex financial concepts and empower you to make informed decisions about your money.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                When will Sampatti be available to the public?
              </AccordionTrigger>
              <AccordionContent>
                We're currently in development and plan to launch in phases. Phase 1, featuring our calculators and educational content, will be available in Q2 2023. Phase 2 with user accounts and investment tracking will follow in Q3 2023, and Phase 3 with AI-powered features will launch in Q1 2024. Join our waitlist to be notified when each phase goes live.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                How accurate are your tax calculators?
              </AccordionTrigger>
              <AccordionContent>
                Our tax calculators are designed to provide accurate estimates based on the latest tax laws and regulations in India. We update our calculators whenever there are changes to tax rules. However, for final tax filing, we recommend consulting with a tax professional for advice specific to your situation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                How does the subscription model work?
              </AccordionTrigger>
              <AccordionContent>
                Sampatti offers three subscription tiers: Basic (₹151/year), Premium (₹601/year), and Enterprise (₹1101/year). Each tier provides different levels of access to our tools and features. The Basic plan includes essential calculators and educational resources, Premium adds investment tracking and detailed reports, while Enterprise includes AI advisory and custom planning. All subscriptions are billed annually.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                How secure is my financial data with Sampatti?
              </AccordionTrigger>
              <AccordionContent>
                We take security very seriously. All financial data is encrypted using bank-level encryption standards both in transit and at rest. We implement strict access controls, regular security audits, and follow industry best practices for data protection. We never sell your data to third parties, and you maintain full control over your information at all times.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                Can I import data from my bank accounts and investment platforms?
              </AccordionTrigger>
              <AccordionContent>
                Yes, in Phase 2 and Phase 3 of our platform. Premium and Enterprise subscribers will be able to connect their bank accounts, investment platforms, and other financial services for automated data import and analysis. This will be done through secure API connections that don't store your banking credentials on our servers.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                Is there a mobile app available?
              </AccordionTrigger>
              <AccordionContent>
                We're planning to release mobile apps for Android and iOS in Phase 3 of our development. Until then, our web application is fully responsive and works smoothly on mobile browsers, providing a seamless experience across all devices.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">
                Do you provide personalized financial advice?
              </AccordionTrigger>
              <AccordionContent>
                Our Enterprise tier will include AI-powered financial advisory services in Phase 3. This will offer personalized recommendations based on your financial situation, goals, and risk profile. For specific investment or tax advice, we recommend consulting with a certified financial planner or tax professional.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}