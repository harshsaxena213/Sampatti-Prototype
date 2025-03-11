import { motion } from "framer-motion";
import { IndianRupee, BarChart2, Laptop, Shield, Clock, BellRing } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    name: "Tax Optimization",
    description: "Save more on taxes with AI-powered recommendations that find deductions and credits you might miss.",
    icon: <IndianRupee className="h-6 w-6" />,
    color: "bg-emerald-100 text-primary",
  },
  {
    name: "Investment Dashboard",
    description: "Track all your investments in one place with real-time updates, performance metrics, and visual analytics.",
    icon: <BarChart2 className="h-6 w-6" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Multi-platform Access",
    description: "Access your financial information anytime, anywhere with our web portal and mobile apps (coming soon).",
    icon: <Laptop className="h-6 w-6" />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Bank-level Security",
    description: "Rest easy knowing your financial data is protected with the latest encryption and security standards.",
    icon: <Shield className="h-6 w-6" />,
    color: "bg-amber-100 text-amber-600",
  },
  {
    name: "Financial Planning Tools",
    description: "Plan for major life events with our goal-based planning tools and detailed financial projections.",
    icon: <Clock className="h-6 w-6" />,
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Smart Alerts",
    description: "Receive timely notifications about tax deadlines, investment opportunities, and financial updates.",
    icon: <BellRing className="h-6 w-6" />,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Powerful Financial Tools
            </h2>
            <p className="text-lg text-gray-600">
              Sampatti provides all the features you need to manage your finances effectively, from tax planning to investment tracking and personalized guidance.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg p-2.5 text-center ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{feature.name}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">All features are part of our tiered subscription model, with enhanced capabilities in our premium plans.</p>
          <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
            View Pricing Plans
          </a>
        </motion.div>
      </div>
    </section>
  );
}