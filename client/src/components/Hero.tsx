import { motion } from "framer-motion";
import { ChevronRight, Calculator, BarChart4, TrendingUp, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-b from-emerald-50 to-white opacity-80" />
      <div className="absolute inset-y-0 right-0 -z-10 w-full origin-top-right overflow-hidden bg-white xl:w-[140%]">
        <div
          className="absolute inset-0 bg-gradient-to-tr from-white via-white to-emerald-50/70"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Hero Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-primary">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                  <IndianRupee className="h-3 w-3" />
                </span>
                Smart financial planning for every Indian
              </div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Your Complete</span>
                <span className="block bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                  Financial Companion
                </span>
              </h1>
              <p className="mb-8 max-w-md text-lg text-gray-600 sm:text-xl">
                Sampatti simplifies personal finance with powerful tax calculators, investment tracking, and personalized guidance to help you achieve financial freedom.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Get Started
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  See Pricing
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 grid grid-cols-2 gap-6"
            >
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 rounded-full bg-primary/10 p-1.5 text-primary">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Tax Calculators</h3>
                  <p className="text-sm text-gray-600">Plan your taxes efficiently with accurate calculators</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 rounded-full bg-primary/10 p-1.5 text-primary">
                  <BarChart4 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Investment Tracking</h3>
                  <p className="text-sm text-gray-600">Track all your investments in one place</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 rounded-full bg-primary/10 p-1.5 text-primary">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Financial Advisory</h3>
                  <p className="text-sm text-gray-600">Get personalized financial guidance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 rounded-full bg-primary/10 p-1.5 text-primary">
                  <IndianRupee className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Indian Tax Laws</h3>
                  <p className="text-sm text-gray-600">Updated with latest Indian tax regulations</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Image/Dashboard Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full overflow-hidden rounded-2xl bg-white shadow-2xl sm:w-auto lg:max-w-2xl">
              {/* Dashboard mockup */}
              <div className="rounded-t-xl bg-gray-800 p-3">
                <div className="flex space-x-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <div className="bg-white p-4 sm:p-8">
                <div className="mb-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-emerald-50 p-3 text-center">
                    <h4 className="text-xs font-medium text-gray-500">Total Investments</h4>
                    <p className="text-lg font-bold text-gray-900">₹12,45,000</p>
                    <p className="text-xs text-emerald-600">↑ 12.5%</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-3 text-center">
                    <h4 className="text-xs font-medium text-gray-500">Tax Saved</h4>
                    <p className="text-lg font-bold text-gray-900">₹1,24,500</p>
                    <p className="text-xs text-blue-600">↑ 8.3%</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-3 text-center">
                    <h4 className="text-xs font-medium text-gray-500">Net Worth</h4>
                    <p className="text-lg font-bold text-gray-900">₹35,67,000</p>
                    <p className="text-xs text-amber-600">↑ 15.2%</p>
                  </div>
                </div>
                
                <div className="mb-6 h-48 rounded-lg bg-gray-100">
                  <div className="flex h-full items-end justify-between p-4">
                    <div className="h-[30%] w-8 rounded bg-emerald-200 transition-all"></div>
                    <div className="h-[45%] w-8 rounded bg-emerald-300 transition-all"></div>
                    <div className="h-[65%] w-8 rounded bg-emerald-400 transition-all"></div>
                    <div className="h-[80%] w-8 rounded bg-emerald-500 transition-all"></div>
                    <div className="h-[60%] w-8 rounded bg-emerald-600 transition-all"></div>
                    <div className="h-[85%] w-8 rounded bg-emerald-700 transition-all"></div>
                    <div className="h-[75%] w-8 rounded bg-emerald-800 transition-all"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-md border p-3">
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full bg-emerald-100 p-2 text-primary">
                        <IndianRupee className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Equity</p>
                        <p className="text-xs text-gray-500">HDFC Mid Cap Fund</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">₹5,25,000</p>
                      <p className="text-xs text-emerald-600">+18.2%</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between rounded-md border p-3">
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                        <IndianRupee className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Fixed Income</p>
                        <p className="text-xs text-gray-500">PPF Account</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">₹2,50,000</p>
                      <p className="text-xs text-blue-600">+7.1%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}