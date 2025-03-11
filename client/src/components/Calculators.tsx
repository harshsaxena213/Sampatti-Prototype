import { useState } from "react";
import { motion } from "framer-motion";
import { IndianRupee, Calculator, PieChart, ArrowRight, Download, BarChart, Percent } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export default function Calculators() {
  // Tax Calculator State
  const [taxableIncome, setTaxableIncome] = useState(500000);
  const [regime, setRegime] = useState("new");
  const [taxResults, setTaxResults] = useState({
    incomeTax: 0,
    cess: 0,
    totalTax: 0,
    effectiveRate: 0,
  });
  
  // SIP Calculator State
  const [sipAmount, setSipAmount] = useState(10000);
  const [sipYears, setSipYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [sipResults, setSipResults] = useState({
    totalInvestment: 0,
    estimatedReturns: 0,
    totalValue: 0,
  });
  
  // Loan Calculator State
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [loanInterest, setLoanInterest] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [loanResults, setLoanResults] = useState({
    emi: 0,
    totalInterest: 0,
    totalAmount: 0,
  });

  // Calculate Tax
  const calculateTax = () => {
    let tax = 0;
    let surcharge = 0;
    let cess = 0;
    
    if (regime === "new") {
      // New Tax Regime (2023-24)
      if (taxableIncome <= 300000) {
        tax = 0;
      } else if (taxableIncome <= 600000) {
        tax = (taxableIncome - 300000) * 0.05;
      } else if (taxableIncome <= 900000) {
        tax = 15000 + (taxableIncome - 600000) * 0.1;
      } else if (taxableIncome <= 1200000) {
        tax = 45000 + (taxableIncome - 900000) * 0.15;
      } else if (taxableIncome <= 1500000) {
        tax = 90000 + (taxableIncome - 1200000) * 0.2;
      } else {
        tax = 150000 + (taxableIncome - 1500000) * 0.3;
      }
    } else {
      // Old Tax Regime
      if (taxableIncome <= 250000) {
        tax = 0;
      } else if (taxableIncome <= 500000) {
        tax = (taxableIncome - 250000) * 0.05;
      } else if (taxableIncome <= 1000000) {
        tax = 12500 + (taxableIncome - 500000) * 0.2;
      } else {
        tax = 112500 + (taxableIncome - 1000000) * 0.3;
      }
    }
    
    // Calculate Health & Education Cess (4%)
    cess = tax * 0.04;
    
    // Calculate Total Tax
    const totalTax = tax + cess + surcharge;
    
    // Calculate Effective Tax Rate
    const effectiveRate = (totalTax / taxableIncome) * 100;
    
    setTaxResults({
      incomeTax: Math.round(tax),
      cess: Math.round(cess),
      totalTax: Math.round(totalTax),
      effectiveRate: Math.round(effectiveRate * 100) / 100,
    });
  };
  
  // Calculate SIP
  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 1200;
    const months = sipYears * 12;
    const totalInvestment = sipAmount * months;
    
    // Formula: P × ({[1 + i]^n - 1} / i) × (1 + i)
    const totalValue = sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const estimatedReturns = totalValue - totalInvestment;
    
    setSipResults({
      totalInvestment,
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(totalValue),
    });
  };
  
  // Calculate Loan EMI
  const calculateLoan = () => {
    const principal = loanAmount;
    const monthlyInterest = loanInterest / 1200;
    const months = loanTenure * 12;
    
    // EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
    const emi = principal * monthlyInterest * Math.pow(1 + monthlyInterest, months) / (Math.pow(1 + monthlyInterest, months) - 1);
    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;
    
    setLoanResults({
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
    });
  };
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="calculators" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Financial Tools
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Smart Calculators for Financial Planning
            </h2>
            <p className="text-lg text-gray-600">
              Plan your finances with our easy-to-use calculators. Make informed decisions about your taxes, investments, and loans.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="tax" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="tax" className="flex items-center gap-2">
                <IndianRupee className="h-4 w-4" />
                <span>Tax Calculator</span>
              </TabsTrigger>
              <TabsTrigger value="sip" className="flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                <span>SIP Calculator</span>
              </TabsTrigger>
              <TabsTrigger value="loan" className="flex items-center gap-2">
                <BarChart className="h-4 w-4" />
                <span>Loan Calculator</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Tax Calculator */}
            <TabsContent value="tax">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IndianRupee className="h-5 w-5 text-primary" />
                    Income Tax Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate your income tax liability under both the new and old tax regimes for FY 2023-24.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="taxableIncome">Taxable Income (₹)</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              type="number"
                              id="taxableIncome"
                              value={taxableIncome}
                              onChange={(e) => setTaxableIncome(Number(e.target.value))}
                              className="mt-1"
                            />
                          </div>
                          <div className="mt-2">
                            <Slider
                              value={[taxableIncome]}
                              min={0}
                              max={3000000}
                              step={10000}
                              onValueChange={(value) => setTaxableIncome(value[0])}
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>₹0</span>
                              <span>₹30,00,000</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="taxRegime">Tax Regime</Label>
                          <div className="grid grid-cols-2 gap-2 mt-1">
                            <Button
                              type="button"
                              variant={regime === "new" ? "default" : "outline"}
                              onClick={() => setRegime("new")}
                            >
                              New Regime
                            </Button>
                            <Button
                              type="button"
                              variant={regime === "old" ? "default" : "outline"}
                              onClick={() => setRegime("old")}
                            >
                              Old Regime
                            </Button>
                          </div>
                        </div>
                        
                        <Button onClick={calculateTax} className="w-full mt-4">
                          Calculate Tax
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">Tax Calculation Result</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Income Tax:</span>
                          <span className="font-medium">{formatCurrency(taxResults.incomeTax)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Health & Education Cess:</span>
                          <span className="font-medium">{formatCurrency(taxResults.cess)}</span>
                        </div>
                        <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                          <span>Total Tax Liability:</span>
                          <span className="text-primary">{formatCurrency(taxResults.totalTax)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Effective Tax Rate:</span>
                          <span className="font-medium">{taxResults.effectiveRate}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-between flex-wrap gap-2">
                  <div className="text-sm text-gray-500">
                    * This is an estimate based on basic income tax rules.
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* SIP Calculator */}
            <TabsContent value="sip">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-primary" />
                    SIP Investment Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate the future value of your Systematic Investment Plan (SIP) with compounded growth.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="sipAmount">Monthly Investment (₹)</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              type="number"
                              id="sipAmount"
                              value={sipAmount}
                              onChange={(e) => setSipAmount(Number(e.target.value))}
                              className="mt-1"
                            />
                          </div>
                          <div className="mt-2">
                            <Slider
                              value={[sipAmount]}
                              min={500}
                              max={100000}
                              step={500}
                              onValueChange={(value) => setSipAmount(value[0])}
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>₹500</span>
                              <span>₹1,00,000</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="sipYears">Investment Period (Years)</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              type="number"
                              id="sipYears"
                              value={sipYears}
                              onChange={(e) => setSipYears(Number(e.target.value))}
                              className="mt-1"
                            />
                          </div>
                          <div className="mt-2">
                            <Slider
                              value={[sipYears]}
                              min={1}
                              max={30}
                              step={1}
                              onValueChange={(value) => setSipYears(value[0])}
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>1 Year</span>
                              <span>30 Years</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="expectedReturn">Expected Return (%)</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              type="number"
                              id="expectedReturn"
                              value={expectedReturn}
                              onChange={(e) => setExpectedReturn(Number(e.target.value))}
                              className="mt-1"
                            />
                            <Percent className="h-4 w-4 text-gray-500" />
                          </div>
                          <div className="mt-2">
                            <Slider
                              value={[expectedReturn]}
                              min={5}
                              max={20}
                              step={0.5}
                              onValueChange={(value) => setExpectedReturn(value[0])}
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>5%</span>
                              <span>20%</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button onClick={calculateSIP} className="w-full mt-4">
                          Calculate Returns
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">SIP Investment Results</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Amount Invested:</span>
                          <span className="font-medium">{formatCurrency(sipResults.totalInvestment)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Estimated Returns:</span>
                          <span className="font-medium text-green-600">{formatCurrency(sipResults.estimatedReturns)}</span>
                        </div>
                        <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                          <span>Total Value:</span>
                          <span className="text-primary">{formatCurrency(sipResults.totalValue)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-between flex-wrap gap-2">
                  <div className="text-sm text-gray-500">
                    * Returns are subject to market risks. Past performance may not be sustained in the future.
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Loan Calculator */}
            <TabsContent value="loan">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-primary" />
                    Loan EMI Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate your loan EMI, total interest payable, and total payment over the entire loan tenure.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              type="number"
                              id="loanAmount"
                              value={loanAmount}
                              onChange={(e) => setLoanAmount(Number(e.target.value))}
                              className="mt-1"
                            />
                          </div>
                          <div className="mt-2">
                            <Slider
                              value={[loanAmount]}
                              min={100000}
                              max={10000000}
                              step={100000}
                              onValueChange={(value) => setLoanAmount(value[0])}
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>₹1,00,000</span>
                              <span>₹1,00,00,000</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="loanInterest">Interest Rate (%)</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              type="number"
                              id="loanInterest"
                              value={loanInterest}
                              onChange={(e) => setLoanInterest(Number(e.target.value))}
                              className="mt-1"
                            />
                            <Percent className="h-4 w-4 text-gray-500" />
                          </div>
                          <div className="mt-2">
                            <Slider
                              value={[loanInterest]}
                              min={5}
                              max={20}
                              step={0.1}
                              onValueChange={(value) => setLoanInterest(value[0])}
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>5%</span>
                              <span>20%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="loanTenure">Loan Tenure (Years)</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              type="number"
                              id="loanTenure"
                              value={loanTenure}
                              onChange={(e) => setLoanTenure(Number(e.target.value))}
                              className="mt-1"
                            />
                          </div>
                          <div className="mt-2">
                            <Slider
                              value={[loanTenure]}
                              min={1}
                              max={30}
                              step={1}
                              onValueChange={(value) => setLoanTenure(value[0])}
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>1 Year</span>
                              <span>30 Years</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button onClick={calculateLoan} className="w-full mt-4">
                          Calculate EMI
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">Loan Calculation Results</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Loan EMI:</span>
                          <span className="font-medium">{formatCurrency(loanResults.emi)}/month</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Interest Payable:</span>
                          <span className="font-medium">{formatCurrency(loanResults.totalInterest)}</span>
                        </div>
                        <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                          <span>Total Payment:</span>
                          <span className="text-primary">{formatCurrency(loanResults.totalAmount)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-between flex-wrap gap-2">
                  <div className="text-sm text-gray-500">
                    * This is an indicative calculation. Actual amounts may vary based on bank policies.
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}