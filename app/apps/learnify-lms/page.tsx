import { ArrowLeft, Check, Download, ExternalLink, Globe, Mail, Phone, Shield, Star, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LearnifyDetailsPage() {
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
                Dashboard
              </Link>
              <Link href="/" className="flex items-center text-sm font-medium text-foreground">
                Marketplace
              </Link>
              <Link href="#" className="flex items-center text-sm font-medium text-muted-foreground">
                Integrations
              </Link>
              <Link href="#" className="flex items-center text-sm font-medium text-muted-foreground">
                Support
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <Button variant="outline" className="hidden md:flex">
              Partner Login
            </Button>
            <Button>My Account</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-6">
          <div className="mb-6">
            <Link href="/marketplace" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Marketplace
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {/* App Header */}
              <div className="mb-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="relative h-24 w-24 flex-shrink-0 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 p-4">
                    <Image
                      src="/learnify-logo.svg"
                      alt="Learnify LMS"
                      width={64}
                      height={64}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h1 className="text-3xl font-bold">Learnify LMS</h1>
                        <p className="text-muted-foreground">by Learnify Solutions</p>
                      </div>
                      <Badge className="w-fit bg-purple-100 text-purple-800">Partner App</Badge>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                        <span className="ml-2 text-sm text-muted-foreground">4.2 (76 reviews)</span>
                      </div>
                      <Separator orientation="vertical" className="h-4" />
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        2,400+ installs
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Screenshots */}
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-semibold">Screenshots</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 p-8">
                    <div className="h-full w-full rounded bg-white p-4 shadow-sm">
                      <div className="mb-4 h-4 w-3/4 rounded bg-purple-200"></div>
                      <div className="space-y-2">
                        <div className="h-3 w-full rounded bg-gray-200"></div>
                        <div className="h-3 w-5/6 rounded bg-gray-200"></div>
                        <div className="h-3 w-4/6 rounded bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 p-8">
                    <div className="h-full w-full rounded bg-white p-4 shadow-sm">
                      <div className="mb-4 flex justify-between">
                        <div className="h-4 w-1/3 rounded bg-purple-200"></div>
                        <div className="h-4 w-1/4 rounded bg-green-200"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="aspect-square rounded bg-gray-200"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="support">Support</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-3 text-lg font-semibold">About Learnify LMS</h3>
                      <p className="text-muted-foreground">
                        Learnify LMS is a comprehensive learning management system designed specifically for enterprise
                        HR teams. With seamless integration into TechCorp HRM, it provides a unified platform for
                        employee development, skill tracking, and certification management.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-3 text-lg font-semibold">Key Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-4 w-4 text-green-600" />
                          <span className="text-sm">
                            Seamless integration with TechCorp HRM employee profiles and organizational structure
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-4 w-4 text-green-600" />
                          <span className="text-sm">
                            AI-powered course recommendations based on role, skills gaps, and career paths
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-4 w-4 text-green-600" />
                          <span className="text-sm">Automated compliance tracking and certification management</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-4 w-4 text-green-600" />
                          <span className="text-sm">Advanced analytics and reporting on learning outcomes and ROI</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-lg font-semibold">Integration Details</h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        Learnify LMS integrates with the following TechCorp HRM modules:
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="flex items-center rounded-lg border p-3">
                          <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                          <span className="text-sm">Employee Profiles</span>
                        </div>
                        <div className="flex items-center rounded-lg border p-3">
                          <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                          <span className="text-sm">Performance Management</span>
                        </div>
                        <div className="flex items-center rounded-lg border p-3">
                          <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                          <span className="text-sm">Career Development</span>
                        </div>
                        <div className="flex items-center rounded-lg border p-3">
                          <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                          <span className="text-sm">Reporting & Analytics</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="features" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Course Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Custom course creation tools</li>
                          <li>• SCORM and xAPI compliance</li>
                          <li>• Multi-format content support</li>
                          <li>• Automated course assignments</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Assessment & Certification</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Customizable assessments</li>
                          <li>• Digital certificates</li>
                          <li>• Compliance tracking</li>
                          <li>• Skill verification</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Analytics & Reporting</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Learning progress tracking</li>
                          <li>• ROI measurement</li>
                          <li>• Custom dashboards</li>
                          <li>• Automated reports</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Mobile Learning</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Native mobile apps</li>
                          <li>• Offline content access</li>
                          <li>• Push notifications</li>
                          <li>• Responsive design</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Customer Reviews</h3>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                        <span className="ml-2 text-sm text-muted-foreground">4.2 out of 5</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                                <span className="ml-2 font-medium">Sarah Johnson</span>
                              </div>
                              <p className="text-xs text-muted-foreground">HR Director at TechStart Inc.</p>
                            </div>
                            <span className="text-xs text-muted-foreground">2 weeks ago</span>
                          </div>
                          <p className="mt-3 text-sm">
                            "Excellent integration with TechCorp HRM. The automated course assignments based on employee
                            roles have saved us countless hours. The reporting features are comprehensive and help us
                            track learning ROI effectively."
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center">
                                <div className="flex">
                                  {[1, 2, 3, 4].map((star) => (
                                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                  <Star className="h-4 w-4 text-gray-300" />
                                </div>
                                <span className="ml-2 font-medium">Michael Chen</span>
                              </div>
                              <p className="text-xs text-muted-foreground">L&D Manager at Global Corp</p>
                            </div>
                            <span className="text-xs text-muted-foreground">1 month ago</span>
                          </div>
                          <p className="mt-3 text-sm">
                            "Great platform overall. The mobile app works well and employees love the offline access.
                            Setup was straightforward with good support from the Learnify team. Would recommend for
                            mid-to-large organizations."
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="support" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Documentation</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Link href="#" className="flex items-center text-sm text-blue-600 hover:underline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Installation Guide
                        </Link>
                        <Link href="#" className="flex items-center text-sm text-blue-600 hover:underline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          API Documentation
                        </Link>
                        <Link href="#" className="flex items-center text-sm text-blue-600 hover:underline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          User Manual
                        </Link>
                        <Link href="#" className="flex items-center text-sm text-blue-600 hover:underline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Video Tutorials
                        </Link>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Contact Support</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center text-sm">
                          <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                          support@learnify.com
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                          +1 (555) 123-4567
                        </div>
                        <div className="flex items-center text-sm">
                          <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                          help.learnify.com
                        </div>
                        <p className="text-xs text-muted-foreground">Support hours: Mon-Fri 9AM-6PM EST</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Install Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Install Learnify LMS</CardTitle>
                  <CardDescription>Add this app to your TechCorp HRM instance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold">Starting at $15/month</div>
                  <p className="text-sm text-muted-foreground">per user, billed annually</p>
                  <Button className="w-full" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Install App
                  </Button>
                  <Button variant="outline" className="w-full">
                    Start Free Trial
                  </Button>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Shield className="mr-1 h-3 w-3" />
                    30-day money-back guarantee
                  </div>
                </CardContent>
              </Card>

              {/* App Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">App Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Version</span>
                    <span>2.4.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated</span>
                    <span>Dec 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span>Learning & Development</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Languages</span>
                    <span>English, Spanish, French</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Compliance</span>
                    <span>SOC 2, GDPR</span>
                  </div>
                </CardContent>
              </Card>

              {/* Developer Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Developer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <div className="mr-3 h-10 w-10 rounded-full bg-purple-100 p-2">
                      <div className="h-full w-full rounded-full bg-purple-600"></div>
                    </div>
                    <div>
                      <div className="font-medium">Learnify Solutions</div>
                      <div className="text-xs text-muted-foreground">TechCorp Partner since 2022</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Learnify Solutions specializes in enterprise learning management systems with over 8 years of
                    experience serving Fortune 500 companies.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View All Apps
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
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
