import { ArrowLeft, Activity, TrendingDown, TrendingUp, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function PerformancePage() {
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
            <div className="rounded-lg bg-purple-500 p-3">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Performance Metrics</h1>
              <p className="text-muted-foreground">Monitor API performance, throughput, and system efficiency</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg API Response Time</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">142ms</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingDown className="mr-1 h-3 w-3 text-green-500" />
                  -8ms from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Data Sync Success Rate</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">99.2%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  +0.3% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Daily API Calls</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">847K</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  +12% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Peak Throughput</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4K/sec</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  +180/sec from last month
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>API Endpoint Performance</CardTitle>
                <CardDescription>Response times by endpoint category</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Employee Data</span>
                    <span className="text-sm text-muted-foreground">89ms</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Authentication</span>
                    <span className="text-sm text-muted-foreground">124ms</span>
                  </div>
                  <Progress value={41} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Payroll Sync</span>
                    <span className="text-sm text-muted-foreground">187ms</span>
                  </div>
                  <Progress value={62} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Reporting</span>
                    <span className="text-sm text-muted-foreground">234ms</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Bulk Operations</span>
                    <span className="text-sm text-muted-foreground">456ms</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Sync Performance</CardTitle>
                <CardDescription>Completion rates and timing by integration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Learnify LMS</span>
                    <Badge variant="secondary">99.8% success</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Avg sync time: 2.3 min</div>
                  <Progress value={99.8} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">PayDay Pro</span>
                    <Badge variant="secondary">99.1% success</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Avg sync time: 4.7 min</div>
                  <Progress value={99.1} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">OnboardIQ</span>
                    <Badge variant="secondary">98.6% success</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Avg sync time: 1.8 min</div>
                  <Progress value={98.6} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Legacy Systems</span>
                    <Badge variant="outline">94.2% success</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Avg sync time: 12.4 min</div>
                  <Progress value={94.2} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Resource Utilization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">CPU Usage</span>
                  <span className="font-medium">34%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Memory Usage</span>
                  <span className="font-medium">67%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Network I/O</span>
                  <span className="font-medium">23%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Database Connections</span>
                  <span className="font-medium">156/500</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Performance Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">High Latency</span>
                  <Badge variant="outline">2 active</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Rate Limit Warnings</span>
                  <Badge variant="secondary">0 active</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Timeout Errors</span>
                  <Badge variant="destructive">1 active</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Queue Backlog</span>
                  <Badge variant="secondary">0 active</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Optimization Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Cache Hit Rate</span>
                  <span className="font-medium text-green-600">87%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Compression Ratio</span>
                  <span className="font-medium">3.2:1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Connection Pooling</span>
                  <span className="font-medium text-green-600">Optimal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Query Optimization</span>
                  <span className="font-medium text-green-600">94%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
