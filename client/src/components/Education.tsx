import { motion } from "framer-motion";
import { BookOpen, FileText, Video, GraduationCap, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const educationalResources = [
  {
    category: "guides",
    items: [
      {
        title: "Beginner's Guide to Income Tax",
        description: "Learn the basics of income tax in India, including how to file ITR and save taxes.",
        type: "PDF Guide",
        length: "23 pages",
        difficulty: "Beginner",
        premium: false,
      },
      {
        title: "Understanding Investment Options in India",
        description: "Explore different investment options - mutual funds, stocks, fixed deposits, and more.",
        type: "PDF Guide",
        length: "45 pages",
        difficulty: "Intermediate",
        premium: false,
      },
      {
        title: "Advanced Tax Planning Strategies",
        description: "Learn advanced techniques to optimize your tax planning with legal methods.",
        type: "PDF Guide",
        length: "38 pages",
        difficulty: "Advanced",
        premium: true,
      },
      {
        title: "Financial Planning for Retirement",
        description: "Plan for a secure retirement with step-by-step guidance on creating a retirement corpus.",
        type: "PDF Guide",
        length: "32 pages",
        difficulty: "Intermediate",
        premium: true,
      },
    ],
  },
  {
    category: "courses",
    items: [
      {
        title: "Personal Finance Fundamentals",
        description: "Master the basics of budgeting, saving, and debt management in this comprehensive course.",
        type: "Video Course",
        length: "12 lessons",
        difficulty: "Beginner",
        premium: false,
      },
      {
        title: "Stock Market Investing for Beginners",
        description: "Learn how to analyze stocks, understand market trends, and build a diversified portfolio.",
        type: "Video Course",
        length: "8 lessons",
        difficulty: "Beginner",
        premium: false,
      },
      {
        title: "Mutual Fund Masterclass",
        description: "Understand different types of mutual funds, NAV calculation, and portfolio management.",
        type: "Video Course",
        length: "10 lessons",
        difficulty: "Intermediate",
        premium: true,
      },
      {
        title: "Real Estate Investment Strategies",
        description: "Explore residential and commercial real estate investment opportunities and risks.",
        type: "Video Course",
        length: "6 lessons",
        difficulty: "Advanced",
        premium: true,
      },
    ],
  },
  {
    category: "articles",
    items: [
      {
        title: "How to Choose the Right Health Insurance",
        description: "Learn what factors to consider when selecting health insurance for yourself and family.",
        type: "Article",
        length: "8 min read",
        difficulty: "Beginner",
        premium: false,
      },
      {
        title: "Understanding the New Tax Regime",
        description: "Compare the old and new tax regimes to determine which is better for your financial situation.",
        type: "Article",
        length: "12 min read",
        difficulty: "Intermediate",
        premium: false,
      },
      {
        title: "SIP vs Lump Sum Investing: Which is Better?",
        description: "Analyze the pros and cons of systematic investment plans versus lump sum investing.",
        type: "Article",
        length: "10 min read",
        difficulty: "Intermediate",
        premium: false,
      },
      {
        title: "Estate Planning in India: A Complete Guide",
        description: "Learn about wills, trusts, nomination, and succession laws to protect your family's future.",
        type: "Article",
        length: "15 min read",
        difficulty: "Advanced",
        premium: true,
      },
    ],
  },
];

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Advanced: "bg-purple-100 text-purple-700",
};

const categoryIcons: Record<string, React.ReactNode> = {
  guides: <FileText className="h-5 w-5" />,
  courses: <Video className="h-5 w-5" />,
  articles: <BookOpen className="h-5 w-5" />,
};

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Financial Education
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Learn and Grow Your Financial Knowledge
            </h2>
            <p className="text-lg text-gray-600">
              Access our library of educational resources designed to help you understand personal finance, taxes, investments, and more.
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="guides" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Guides & E-Books</span>
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                <span>Video Courses</span>
              </TabsTrigger>
              <TabsTrigger value="articles" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Articles</span>
              </TabsTrigger>
            </TabsList>
            
            {educationalResources.map((resource) => (
              <TabsContent key={resource.category} value={resource.category}>
                <div className="grid gap-6 md:grid-cols-2">
                  {resource.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                            {item.premium && (
                              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">
                                Premium
                              </Badge>
                            )}
                          </div>
                          <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0 pb-4 flex-grow">
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              {categoryIcons[resource.category]}
                              {item.type}
                            </Badge>
                            <Badge variant="outline">
                              {item.length}
                            </Badge>
                            <Badge className={`${difficultyColors[item.difficulty]}`}>
                              {item.difficulty}
                            </Badge>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button 
                            variant={item.premium ? "outline" : "default"} 
                            className="w-full"
                          >
                            {item.premium ? "Premium Access" : "Read Now"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center mt-16">
            <Card className="bg-primary/5 border-0">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Want More Educational Resources?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Upgrade to our Premium or Enterprise plan to access our complete library of financial education resources,
                  including expert webinars, advanced tutorials, and personalized learning paths.
                </p>
                <Button size="lg">
                  Explore Premium Plans
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}