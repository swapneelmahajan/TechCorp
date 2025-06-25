import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketplacePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/techcorp-logo.svg" alt="TechCorp Logo" width={32} height={32} className="h-8 w-8" />
              <span className="inline-block font-bold">TechCorp HRM</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground">
                Presentation
              </Link>
              <Link href="/marketplace" className="flex items-center text-sm font-medium text-foreground">
                Marketplace
              </Link>
              <Link href="/integrations" className="flex items-center text-sm font-medium text-muted-foreground">
                Integrations
              </Link>
              <Link href="#" className="flex items-center text-sm font-medium text-muted-foreground">
                Support
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0 md:max-w-md">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search marketplace..." className="pl-8 md:w-[300px] lg:w-[320px]" />
              </div>
            </div>
            <Button variant="outline" className="hidden md:flex">
              Partner Login
            </Button>
            <Button>My Account</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  TechCorp HRM Marketplace
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Discover apps and integrations to enhance your HR management experience
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <Tabs defaultValue="all" className="w-full md:w-auto">
                  <TabsList>
                    <TabsTrigger value="all">All Apps</TabsTrigger>
                    <TabsTrigger value="techcorp">TechCorp Apps</TabsTrigger>
                    <TabsTrigger value="partner">Partner Apps</TabsTrigger>
                  </TabsList>
                </Tabs>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="recruiting">Recruiting</SelectItem>
                      <SelectItem value="onboarding">Onboarding</SelectItem>
                      <SelectItem value="performance">Performance</SelectItem>
                      <SelectItem value="payroll">Payroll</SelectItem>
                      <SelectItem value="learning">Learning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* TechCorp App 1 */}
                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full bg-gradient-to-r from-blue-600 to-blue-700">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src="/techcorp-recruit.svg"
                          alt="TechCorp Recruit"
                          width={120}
                          height={120}
                          className="h-24 w-24"
                        />
                      </div>
                      <Badge className="absolute right-2 top-2 bg-blue-700">TechCorp</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <CardTitle>TechCorp Recruit</CardTitle>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="h-4 w-4 fill-current text-yellow-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-gray-500">(124)</span>
                      </div>
                    </div>
                    <CardDescription className="mt-2 line-clamp-3">
                      Streamline your recruiting process with AI-powered candidate matching, automated screening, and
                      collaborative hiring workflows.
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">Recruiting</Badge>
                      <Badge variant="outline">AI-Powered</Badge>
                      <Badge variant="outline">Core</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-6">
                    <div className="text-sm font-medium">Starting at $29/month</div>
                    <Button>View Details</Button>
                  </CardFooter>
                </Card>

                {/* TechCorp App 2 */}
                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full bg-gradient-to-r from-blue-600 to-blue-700">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src="/techcorp-perform.svg"
                          alt="TechCorp Perform"
                          width={120}
                          height={120}
                          className="h-24 w-24"
                        />
                      </div>
                      <Badge className="absolute right-2 top-2 bg-blue-700">TechCorp</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <CardTitle>TechCorp Perform</CardTitle>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="h-4 w-4 fill-current text-yellow-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-gray-500">(98)</span>
                      </div>
                    </div>
                    <CardDescription className="mt-2 line-clamp-3">
                      Comprehensive performance management solution with continuous feedback, goal tracking, and
                      data-driven insights to develop your talent.
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">Performance</Badge>
                      <Badge variant="outline">Analytics</Badge>
                      <Badge variant="outline">Core</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-6">
                    <div className="text-sm font-medium">Starting at $19/month</div>
                    <Button>View Details</Button>
                  </CardFooter>
                </Card>

                {/* Partner App 1 */}
                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full bg-gradient-to-r from-purple-600 to-purple-700">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src="/learnify-logo.svg"
                          alt="Learnify LMS"
                          width={120}
                          height={120}
                          className="h-24 w-24"
                        />
                      </div>
                      <Badge className="absolute right-2 top-2 bg-purple-700">Partner</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <CardTitle>Learnify LMS</CardTitle>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <svg
                              key={star}
                              className="h-4 w-4 fill-current text-yellow-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <svg
                          className="h-4 w-4 fill-current text-gray-300"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <span className="ml-1 text-xs text-gray-500">(76)</span>
                      </div>
                    </div>
                    <CardDescription className="mt-2 line-clamp-3">
                      Powerful learning management system with customizable courses, skill assessments, and
                      certification tracking fully integrated with TechCorp HRM.
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">Learning</Badge>
                      <Badge variant="outline">Development</Badge>
                      <Badge variant="outline">Certification</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-6">
                    <div className="text-sm font-medium">Starting at $15/month</div>
                    <Link href="/apps/learnify-lms">
                      <Button>View Details</Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Partner App 2 */}
                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full bg-gradient-to-r from-green-600 to-green-700">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image src="/payday-logo.svg" alt="PayDay Pro" width={120} height={120} className="h-24 w-24" />
                      </div>
                      <Badge className="absolute right-2 top-2 bg-green-700">Partner</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <CardTitle>PayDay Pro</CardTitle>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="h-4 w-4 fill-current text-yellow-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-gray-500">(142)</span>
                      </div>
                    </div>
                    <CardDescription className="mt-2 line-clamp-3">
                      Comprehensive payroll solution with multi-country support, tax compliance, and direct deposit
                      capabilities that seamlessly integrates with TechCorp HRM.
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">Payroll</Badge>
                      <Badge variant="outline">Compliance</Badge>
                      <Badge variant="outline">Global</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-6">
                    <div className="text-sm font-medium">Starting at $25/month</div>
                    <Button>View Details</Button>
                  </CardFooter>
                </Card>

                {/* Partner App 3 */}
                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full bg-gradient-to-r from-orange-500 to-orange-600">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image src="/onboard-logo.svg" alt="OnboardIQ" width={120} height={120} className="h-24 w-24" />
                      </div>
                      <Badge className="absolute right-2 top-2 bg-orange-600">Partner</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <CardTitle>OnboardIQ</CardTitle>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <svg
                              key={star}
                              className="h-4 w-4 fill-current text-yellow-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <svg
                          className="h-4 w-4 fill-current text-gray-300"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <span className="ml-1 text-xs text-gray-500">(89)</span>
                      </div>
                    </div>
                    <CardDescription className="mt-2 line-clamp-3">
                      Automate and personalize your employee onboarding process with customizable workflows, document
                      management, and progress tracking.
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">Onboarding</Badge>
                      <Badge variant="outline">Automation</Badge>
                      <Badge variant="outline">Compliance</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-6">
                    <div className="text-sm font-medium">Starting at $12/month</div>
                    <Button>View Details</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 TechCorp HRM. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Partner Program</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
