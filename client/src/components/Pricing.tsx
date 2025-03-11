import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, CreditCard, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
  {
    name: "Basic",
    price: 151,
    description: "Essential financial tools for individuals starting their financial journey",
    features: [
      "Tax calculators with basic reports",
      "5 financial education resources",
      "Manual investment tracking",
      "Email support",
    ],
    notIncluded: [
      "AI-powered financial recommendations",
      "Portfolio analysis tools",
      "Tax optimization strategies",
      "Custom financial planning",
    ],
    cta: "Get Started",
    popular: false,
    color: "bg-gray-100",
    textColor: "text-gray-800",
    icon: <CreditCard className="h-6 w-6 text-gray-600" />,
    yearly: true,
  },
  {
    name: "Premium",
    price: 601,
    description: "Advanced features for growing your wealth with smart insights",
    features: [
      "Everything in Basic",
      "AI-powered financial recommendations",
      "Portfolio analysis tools",
      "Investment tracking with auto-sync",
      "Unlimited financial education resources",
      "Priority email support",
      "Tax optimization strategies",
    ],
    notIncluded: [
      "Custom financial planning",
      "Personal financial advisor",
    ],
    cta: "Get Premium",
    popular: true,
    color: "bg-primary",
    textColor: "text-white",
    icon: <IndianRupee className="h-6 w-6 text-white" />,
    yearly: true,
  },
  {
    name: "Enterprise",
    price: 1101,
    description: "Comprehensive wealth management with personalized guidance",
    features: [
      "Everything in Premium",
      "Custom financial planning",
      "Personal financial advisor",
      "Advanced tax optimization",
      "Priority phone support",
      "Family account (up to 5 members)",
      "Custom PDF reports",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false,
    color: "bg-gray-800",
    textColor: "text-white",
    icon: <CreditCard className="h-6 w-6 text-white" />,
    yearly: true,
  },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState("yearly");

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Choose the Right Plan for Your Financial Journey
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Sampatti offers affordable pricing plans tailored to your financial needs, with 
              annual billing to help you save more.
            </p>
          </motion.div>

          <div className="inline-flex items-center rounded-full bg-gray-100 p-1 mb-8">
            <button
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                billingPeriod === "yearly" ? "bg-white shadow" : "text-gray-500"
              }`}
              onClick={() => setBillingPeriod("yearly")}
            >
              Annual (Save 16%)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className={`flex flex-col w-full ${plan.popular ? 'border-primary shadow-lg' : 'border-gray-200 shadow-md'}`}>
                <CardHeader className={`${plan.color} ${plan.textColor} rounded-t-lg`}>
                  {plan.popular && (
                    <Badge className="absolute right-4 top-4 bg-white text-primary">
                      Most Popular
                    </Badge>
                  )}
                  <div className="flex items-center gap-2 mb-2">
                    {plan.icon}
                    <CardTitle>{plan.name}</CardTitle>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">₹{plan.price}</span>
                    <span className="text-sm font-medium opacity-80">/year</span>
                  </div>
                  <CardDescription className={`${plan.textColor} ${plan.textColor === 'text-white' ? 'opacity-80' : 'opacity-70'}`}>
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <div className="space-y-4">
                    <p className="font-medium text-gray-900">What's included:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.notIncluded.length > 0 && (
                      <>
                        <p className="font-medium text-gray-900 mt-6">Not included:</p>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-500">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? '' : 'bg-gray-800 hover:bg-gray-700'}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Need a Custom Plan?</h3>
          <p className="text-gray-600 mb-6">
            For larger families or organizations, we offer custom enterprise plans with dedicated account managers and tailored financial solutions.
          </p>
          <Button variant="outline" size="lg">
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
}