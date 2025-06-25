import { ArrowLeft, Clock, TrendingDown, TrendingUp, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function VelocityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/techcorp-logo.svg" alt="TechCorp Logo" width={32} height={32} className="h-8 w-8" />
              <span className="inline-block font-bold">TechCorp HRM</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-6">
            <Link
              href="/integrations"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Integrations Dashboard
            </Link>
          </div>

          <div className="mb-8 flex items-center space-x-4">
            <div className="rounded-lg bg-yellow-500 p-3">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Velocity Metrics</h1>
              <p className="text-muted-foreground">Measure the speed of integration deployment and enablement</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Time to Launch</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.2 days</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingDown className="mr-1 h-3 w-3 text-green-500" />
                  -0.8 days from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Self-Service Rate</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">73%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  +4% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Time to First Connection</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18 min</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingDown className="mr-1 h-3 w-3 text-green-500" />
                  -3 min from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Setup Completion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  +2% from last month
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Integration Setup Times</CardTitle>
                <CardDescription>Average time to complete setup by integration type</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">TechCorp Native</span>
                    <span className="text-sm text-muted-foreground">2.1 days</span>
                  </div>
                  <Progress value={21} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Certified Partners</span>
                    <span className="text-sm text-muted-foreground">3.8 days</span>
                  </div>
                  <Progress value={38} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Custom Integrations</span>
                    <span className="text-sm text-muted-foreground">8.5 days</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Legacy Systems</span>
                    <span className="text-sm text-muted-foreground">12.3 days</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support Intervention Rate</CardTitle>
                <CardDescription>Percentage requiring support assistance by integration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Learnify LMS</span>
                    <Badge variant="secondary">12% need support</Badge>
                  </div>
                  <Progress value={12} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">PayDay Pro</span>
                    <Badge variant="secondary">18% need support</Badge>
                  </div>
                  <Progress value={18} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">OnboardIQ</span>
                    <Badge variant="secondary">25% need support</Badge>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Custom APIs</span>
                    <Badge variant="destructive">67% need support</Badge>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Deployment Stages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Authentication Setup</span>
                  <span className="font-medium">8 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Data Mapping</span>
                  <span className="font-medium">24 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Testing & Validation</span>
                  <span className="font-medium">15 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Go-Live</span>
                  <span className="font-medium">3 min</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Bottlenecks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">API Key Generation</span>
                  <Badge variant="outline">Minor</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Data Schema Mapping</span>
                  <Badge variant="destructive">Major</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Permission Setup</span>
                  <Badge variant="outline">Minor</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Testing Environment</span>
                  <Badge variant="secondary">Moderate</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Automation Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Auto-discovery</span>
                  <Badge variant="secondary">Implemented</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Pre-built Templates</span>
                  <Badge variant="secondary">Implemented</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Smart Mapping</span>
                  <Badge variant="outline">In Progress</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Auto-testing</span>
                  <Badge variant="outline">Planned</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
