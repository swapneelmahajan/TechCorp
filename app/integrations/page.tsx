import { ArrowRight, BarChart3, Puzzle, Shield, TrendingUp, Users, Wrench, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const kpiCategories = [
  {
    id: "adoption",
    title: "Adoption",
    icon: Puzzle,
    color: "bg-blue-500",
    metrics: [
      "% of customers with 1+ active integrations",
      "Average integrations per customer",
      "Monthly active integration users",
    ],
  },
  {
    id: "velocity",
    title: "Velocity",
    icon: Zap,
    color: "bg-yellow-500",
    metrics: [
      "Avg. time to launch an integration",
      "% of self-service integrations enabled without support",
      "Time to first successful connection",
    ],
  },
  {
    id: "reliability",
    title: "Reliability",
    icon: Wrench,
    color: "bg-green-500",
    metrics: ["MTTR for integration failures", "Error rate by integration type", "System uptime percentage"],
  },
  {
    id: "performance",
    title: "Performance",
    icon: TrendingUp,
    color: "bg-purple-500",
    metrics: ["API response time averages", "Data sync completion rates", "Throughput by integration endpoint"],
  },
  {
    id: "marketplace-health",
    title: "Marketplace Health",
    icon: Shield,
    color: "bg-indigo-500",
    metrics: [
      "# of active integrations/listed",
      "# of new partner submissions/month",
      "% certified vs. custom integrations",
    ],
  },
  {
    id: "business-impact",
    title: "Business Impact",
    icon: BarChart3,
    color: "bg-emerald-500",
    metrics: [
      "Deals influenced by integrations",
      "Retention rate of integrated customers vs. non-integrated",
      "Revenue attributed to integrations",
    ],
  },
  {
    id: "developer-experience",
    title: "Developer Experience",
    icon: Users,
    color: "bg-orange-500",
    metrics: ["Partner NPS score", "Time to first successful API call", "Support tickets per integration type"],
  },
]

export default function IntegrationsDashboard() {
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
              <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground">
                Marketplace
              </Link>
              <Link href="/integrations" className="flex items-center text-sm font-medium text-foreground">
                Integrations
              </Link>
              <Link href="#" className="flex items-center text-sm font-medium text-muted-foreground">
                Support
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-8 pl-8 md:pl-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Integrations KPI Dashboard</h1>
            <p className="text-muted-foreground">Monitor and analyze the performance of your integration ecosystem</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {kpiCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Link key={category.id} href={`/integrations/${category.id}`}>
                  <Card className="group cursor-pointer transition-all hover:shadow-lg hover:scale-105">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`rounded-lg p-2 ${category.color}`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                            {category.title}
                          </CardTitle>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.metrics.map((metric, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Active Integrations</span>
                    <span className="font-medium">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Partner Apps</span>
                    <span className="font-medium">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Monthly API Calls</span>
                    <span className="font-medium">2.4M</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">System Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Overall Uptime</span>
                    <span className="font-medium text-green-600">99.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Avg Response Time</span>
                    <span className="font-medium">142ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Error Rate</span>
                    <span className="font-medium text-green-600">0.12%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">New Integrations (30d)</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Support Tickets</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Partner Submissions</span>
                    <span className="font-medium">5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
