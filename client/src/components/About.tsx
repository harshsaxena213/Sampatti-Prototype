import { motion } from "framer-motion";
import { IndianRupee, Users, Target, Globe } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Sampatti was founded with a clear mission: to democratize financial literacy and planning in India, making it accessible to everyone regardless of their financial background.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">The Sampatti Story</h3>
            <p className="text-gray-600 mb-6">
              Our journey began when our founders experienced firsthand the complexity of managing personal finances in India. With tax regulations, investment options, and financial products constantly evolving, staying informed and making the right decisions became increasingly challenging.
            </p>
            <p className="text-gray-600 mb-6">
              We realized that most Indians face similar challenges but lack access to affordable financial advice. Professional financial planners are often out of reach for the average person, while free resources may be fragmented or biased toward specific products.
            </p>
            <p className="text-gray-600">
              Sampatti was born from this realization – a comprehensive, unbiased platform that combines powerful financial tools with educational content to help Indians make better financial decisions. Our name "Sampatti," meaning "wealth" in Sanskrit, reflects our commitment to helping you build lasting financial prosperity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-50 p-6 rounded-lg flex items-start space-x-4">
              <div className="mt-1 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-primary flex-shrink-0">
                <IndianRupee className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Financial Inclusion</h4>
                <p className="text-gray-600">
                  We believe financial literacy should be accessible to everyone. Our platform is designed to serve users from diverse financial backgrounds across India.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex items-start space-x-4">
              <div className="mt-1 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-primary flex-shrink-0">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Unbiased Guidance</h4>
                <p className="text-gray-600">
                  Unlike platforms tied to specific financial institutions, we provide neutral, data-driven insights without pushing particular products or services.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex items-start space-x-4">
              <div className="mt-1 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-primary flex-shrink-0">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Empowerment Through Education</h4>
                <p className="text-gray-600">
                  We don't just offer tools – we help you understand the "why" behind financial decisions to build confidence in managing your money.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Globe className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Join us on our mission</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We're building a future where every Indian has the tools and knowledge to achieve financial wellbeing. Be part of this journey by joining our waitlist today.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            Join the Waitlist
          </a>
        </motion.div>
      </div>
    </section>
  );
}