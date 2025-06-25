import { ArrowLeft, Puzzle, TrendingDown, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function AdoptionPage() {
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
            <div className="rounded-lg bg-blue-500 p-3">
              <Puzzle className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Adoption Metrics</h1>
              <p className="text-muted-foreground">Track how customers are adopting and using integrations</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customers with Integrations</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78.4%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  +5.2% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Integrations per Customer</CardTitle>
                <Puzzle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  +0.3 from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Active Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,847</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  +8.1% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Adopters (30d)</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">284</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                  -2.1% from last month
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Top Integrated Apps</CardTitle>
                <CardDescription>Most popular integrations by adoption rate</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Learnify LMS</span>
                    <span className="text-sm text-muted-foreground">89%</span>
                  </div>
                  <Progress value={89} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">PayDay Pro</span>
                    <span className="text-sm text-muted-foreground">76%</span>
                  </div>
                  <Progress value={76} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">OnboardIQ</span>
                    <span className="text-sm text-muted-foreground">64%</span>
                  </div>
                  <Progress value={64} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">TechCorp Recruit</span>
                    <span className="text-sm text-muted-foreground">58%</span>
                  </div>
                  <Progress value={58} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">TechCorp Perform</span>
                    <span className="text-sm text-muted-foreground">52%</span>
                  </div>
                  <Progress value={52} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Adoption by Customer Segment</CardTitle>
                <CardDescription>Integration usage across different customer tiers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Enterprise</span>
                    <Badge variant="secondary">94% adoption</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Avg 5.2 integrations per customer</div>
                  <Progress value={94} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Mid-Market</span>
                    <Badge variant="secondary">81% adoption</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Avg 3.7 integrations per customer</div>
                  <Progress value={81} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">SMB</span>
                    <Badge variant="secondary">67% adoption</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Avg 2.1 integrations per customer</div>
                  <Progress value={67} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Integration Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Learning & Development</span>
                  <span className="font-medium">34%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Payroll & Benefits</span>
                  <span className="font-medium">28%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Recruiting</span>
                  <span className="font-medium">22%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Performance</span>
                  <span className="font-medium">16%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Time to First Integration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">0-7 days</span>
                  <span className="font-medium">42%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">8-30 days</span>
                  <span className="font-medium">35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">31-90 days</span>
                  <span className="font-medium">18%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">90+ days</span>
                  <span className="font-medium">5%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Churn Risk Indicators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">No integrations</span>
                  <Badge variant="destructive">High Risk</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">1 integration</span>
                  <Badge variant="outline">Medium Risk</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">2+ integrations</span>
                  <Badge variant="secondary">Low Risk</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
