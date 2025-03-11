import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { waitlistFormSchema } from "@shared/schema";
import type { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Loader2, IndianRupee, Lock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type FormValues = z.infer<typeof waitlistFormSchema>;

const interestOptions = [
  { value: "tax_planning", label: "Tax Planning" },
  { value: "investment_tracking", label: "Investment Tracking" },
  { value: "retirement_planning", label: "Retirement Planning" },
  { value: "loan_calculator", label: "Loan Calculators" },
  { value: "financial_education", label: "Financial Education" },
  { value: "all", label: "All Features" }
];

export default function WaitlistForm() {
  const { toast } = useToast();
  const [interestArea, setInterestArea] = useState("");

  // Define the form
  const form = useForm<FormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      consent: false,
    },
  });

  // Define the mutation
  const mutation = useMutation({
    mutationFn: (values: FormValues) => {
      // Including interest area with the form values
      const payload = { ...values, interestArea };
      return apiRequest("POST", "/api/waitlist", payload);
    },
    onSuccess: async (response) => {
      const data = await response.json();
      toast({
        title: "Welcome to Sampatti!",
        description: data.message || "You've been added to our waitlist! We'll notify you when we launch.",
        variant: "default",
      });
      form.reset();
      setInterestArea("");
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Handle form submission
  function onSubmit(values: FormValues) {
    mutation.mutate(values);
  }

  return (
    <section id="waitlist" className="py-16 sm:py-24 bg-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Waitlist</h2>
          <p className="text-lg text-gray-600">
            Be among the first to experience Sampatti's powerful financial tools. Sign up below for early access and exclusive updates.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-primary mb-4">
                <IndianRupee className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Early Access Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-700">First access to our tax calculators and financial tools</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-700">30% discount on Premium subscription for the first year</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Exclusive financial planning resources and guides</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <p className="text-gray-700">Direct feedback channel to shape product development</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center">
              <div className="mr-3 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Your Data is Secure</h4>
                <p className="text-sm text-gray-600">We use bank-level encryption to protect your information</p>
              </div>
            </div>
          </div>
          
          <Card className="shadow-md">
            <CardHeader className="pb-4">
              <CardTitle>Sign Up for Early Access</CardTitle>
              <CardDescription>Fill out the form below to join our waitlist</CardDescription>
            </CardHeader>
            <CardContent className="pb-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-4">
                    <FormItem>
                      <FormLabel>Which feature interests you most?</FormLabel>
                      <Select value={interestArea} onValueChange={setInterestArea}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an area" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {interestOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription className="text-xs">
                        This helps us understand your needs better.
                      </FormDescription>
                    </FormItem>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company/Organization (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Where you work" {...field} />
                        </FormControl>
                        <FormMessage />
                        <FormDescription className="text-xs">
                          This helps us tailor our platform to different professional contexts.
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-gray-600">
                            I agree to receive updates about Sampatti's launch, financial tips, and exclusive offers
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full py-2.5 mt-2"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      "Join Waitlist"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="pt-0 border-t text-center flex justify-center">
              <p className="text-xs text-gray-500">By joining, you agree to our Terms of Service and Privacy Policy</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
