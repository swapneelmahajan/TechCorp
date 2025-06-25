"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, ChevronRight, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const sections = [
  {
    id: "kickoff",
    title: "Kickoff",
    subtitle: "Introduction and agenda",
    subsections: ["about", "nexthour"],
  },
  {
    id: "context",
    title: "Context: The HR Ecosystem",
    subtitle: "Understanding the current landscape",
    subsections: ["context"],
  },
  {
    id: "diagnosis",
    title: "Diagnosis: Current State",
    subtitle: "Identifying the challenges",
    subsections: ["diagnosis"],
  },
  {
    id: "strategy",
    title: "Strategy & Approach",
    subtitle: "Our path forward",
    subsections: ["strategy"],
  },
  {
    id: "solution",
    title: "Solution",
    subtitle: "Technical architecture and platform design",
    subsections: ["architecture", "ai", "marketplace", "partner", "developer"],
    hasDemo: true,
  },
  {
    id: "execution",
    title: "Execution Plan",
    subtitle: "Implementation, timeline, and success metrics",
    subsections: ["execution", "roadmap", "kpis"],
    hasDemo: true,
  },
  {
    id: "closing",
    title: "Closing",
    subtitle: "Summary and next steps",
    subsections: ["summary", "questions"],
  },
]

const subsectionTitles = {
  about: "About Me",
  nexthour: "The Next Hour",
  context: "HR Ecosystem Overview",
  diagnosis: "Current State Analysis",
  strategy: "Strategic Approach",
  architecture: "Product Architecture",
  ai: "AI in Integrations",
  marketplace: "Integrations Marketplace",
  partner: "Partner Program",
  developer: "Developer Experience",
  execution: "Implementation Plan",
  roadmap: "Roadmap & Timeline",
  kpis: "KPIs & Success Metrics",
  summary: "Summary & Impact",
  questions: "Questions & Discussion",
}

export default function PresentationPage() {
  const [currentSection, setCurrentSection] = useState<string | null>(null)
  const [currentSubsection, setCurrentSubsection] = useState<string | null>(null)
  const [sectionIndex, setSectionIndex] = useState(0)
  const [subsectionIndex, setSubsectionIndex] = useState(0)

  const handleSectionClick = (sectionId: string) => {
    const section = sections.find((s) => s.id === sectionId)
    if (section) {
      const index = sections.findIndex((s) => s.id === sectionId)
      setCurrentSection(sectionId)
      setCurrentSubsection(section.subsections[0])
      setSectionIndex(index)
      setSubsectionIndex(0)
    }
  }

  const handleNext = () => {
    const currentSectionData = sections[sectionIndex]

    // If we're not at the last subsection of current section
    if (subsectionIndex < currentSectionData.subsections.length - 1) {
      const nextSubsectionIndex = subsectionIndex + 1
      setSubsectionIndex(nextSubsectionIndex)
      setCurrentSubsection(currentSectionData.subsections[nextSubsectionIndex])
    }
    // If we're at the last subsection and not at the last section
    else if (sectionIndex < sections.length - 1) {
      const nextSectionIndex = sectionIndex + 1
      const nextSection = sections[nextSectionIndex]
      setSectionIndex(nextSectionIndex)
      setSubsectionIndex(0)
      setCurrentSection(nextSection.id)
      setCurrentSubsection(nextSection.subsections[0])
    }
  }

  const handlePrevious = () => {
    // If we're not at the first subsection of current section
    if (subsectionIndex > 0) {
      const prevSubsectionIndex = subsectionIndex - 1
      setSubsectionIndex(prevSubsectionIndex)
      setCurrentSubsection(sections[sectionIndex].subsections[prevSubsectionIndex])
    }
    // If we're at the first subsection and not at the first section
    else if (sectionIndex > 0) {
      const prevSectionIndex = sectionIndex - 1
      const prevSection = sections[prevSectionIndex]
      const lastSubsectionIndex = prevSection.subsections.length - 1
      setSectionIndex(prevSectionIndex)
      setSubsectionIndex(lastSubsectionIndex)
      setCurrentSection(prevSection.id)
      setCurrentSubsection(prevSection.subsections[lastSubsectionIndex])
    }
  }

  const handleBackToOverview = () => {
    setCurrentSection(null)
    setCurrentSubsection(null)
  }

  const getTotalProgress = () => {
    let totalSubsections = 0
    let currentPosition = 0

    for (let i = 0; i < sections.length; i++) {
      if (i < sectionIndex) {
        currentPosition += sections[i].subsections.length
      } else if (i === sectionIndex) {
        currentPosition += subsectionIndex + 1
      }
      totalSubsections += sections[i].subsections.length
    }

    return { current: currentPosition, total: totalSubsections }
  }

  if (currentSection && currentSubsection) {
    const progress = getTotalProgress()
    const currentSectionData = sections[sectionIndex]

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/techcorp-logo.svg" alt="TechCorp Logo" width={32} height={32} className="h-8 w-8" />
                <span className="font-bold">TechCorp HRM</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <span className="text-sm text-muted-foreground">Integrations Roadmap Presentation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={handleBackToOverview}>
                <Home className="mr-2 h-4 w-4" />
                Overview
              </Button>
              <Badge variant="outline">
                {progress.current} of {progress.total}
              </Badge>
            </div>
          </div>
        </header>

        <main className="container py-8">
          {/* Section and Subsection Navigation */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
              <span>{currentSectionData.title}</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{subsectionTitles[currentSubsection]}</span>
            </div>
            <div className="flex items-center space-x-2">
              {currentSectionData.subsections.map((subsection, index) => (
                <div
                  key={subsection}
                  className={`h-2 rounded-full transition-colors ${
                    index === subsectionIndex
                      ? "bg-blue-600 w-8"
                      : index < subsectionIndex
                        ? "bg-blue-300 w-4"
                        : "bg-gray-300 w-4"
                  }`}
                />
              ))}
            </div>
          </div>

          <SectionContent sectionId={currentSubsection} />

          <div className="mt-12 flex items-center justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={sectionIndex === 0 && subsectionIndex === 0}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center space-x-2">
              {sections.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === sectionIndex ? "bg-blue-600" : index < sectionIndex ? "bg-blue-300" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={
                sectionIndex === sections.length - 1 && subsectionIndex === currentSectionData.subsections.length - 1
              }
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/techcorp-logo.svg" alt="TechCorp Logo" width={32} height={32} className="h-8 w-8" />
            <span className="font-bold">TechCorp HRM</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Integrations Roadmap</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive strategy for transforming TechCorp's integration ecosystem
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <Card
              key={section.id}
              className="group cursor-pointer transition-all hover:shadow-lg hover:scale-105 relative overflow-hidden"
              onClick={() => handleSectionClick(section.id)}
            >
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="text-xs">
                  {index + 1}
                </Badge>
              </div>

              {section.hasDemo && (
                <div className="absolute top-4 left-4">
                  <Badge className="text-xs bg-green-600">Live Demo</Badge>
                </div>
              )}

              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors pr-8">
                  {section.title}
                </CardTitle>
                <CardDescription className="text-sm">{section.subtitle}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-2">
                    {section.subsections.length} part{section.subsections.length > 1 ? "s" : ""}:
                  </div>
                  <div className="space-y-1">
                    {section.subsections.slice(0, 3).map((subsection) => (
                      <div key={subsection} className="text-xs text-muted-foreground">
                        • {subsectionTitles[subsection]}
                      </div>
                    ))}
                    {section.subsections.length > 3 && (
                      <div className="text-xs text-muted-foreground">• +{section.subsections.length - 3} more...</div>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Click to explore</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Presentation Navigation</CardTitle>
              <CardDescription>
                Click on any section above to dive deep, or use the quick access buttons below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button onClick={() => handleSectionClick("kickoff")}>Start Presentation</Button>
                <Button variant="outline" onClick={() => handleSectionClick("solution")}>
                  View Solution Demo
                </Button>
                <Button variant="outline" onClick={() => handleSectionClick("execution")}>
                  View KPI Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function SectionContent({ sectionId }: { sectionId: string }) {
  switch (sectionId) {
    case "about":
      return <AboutSection />
    case "nexthour":
      return <NextHourSection />
    case "context":
      return <ContextSection />
    case "diagnosis":
      return <DiagnosisSection />
    case "strategy":
      return <StrategySection />
    case "architecture":
      return <ArchitectureSection />
    case "ai":
      return <AISection />
    case "marketplace":
      return <MarketplaceSection />
    case "partner":
      return <PartnerSection />
    case "developer":
      return <DeveloperSection />
    case "execution":
      return <ExecutionSection />
    case "roadmap":
      return <RoadmapSection />
    case "kpis":
      return <KPIsSection />
    case "summary":
      return <SummarySection />
    case "questions":
      return <QuestionsSection />
    default:
      return <div>Section not found</div>
  }
}

function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground">Introduction and background</p>
      </div>

      <Card className="p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Swapneel Mahajan</h2>
          <p className="text-lg text-muted-foreground mb-6">Platforms | Integrations | Transformation</p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-semibold mb-2">Experience</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 15+ years building and scaling global platforms</li>
                <li>• Previously at 8x8, Visa, Symantec </li>
                <li>• Payments, Risk, Fraud, Subscriptions, eCommerce</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Expertise</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Integration architecture and strategy</li>
                <li>• Developer experience and API design</li>
                <li>• Partner ecosystem development</li>
                <li>• B2B marketplace platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

function NextHourSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">The Next Hour</h1>
        <p className="text-xl text-muted-foreground">What we'll cover today</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Problem & Context</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Current state of HR ecosystem fragmentation</li>
            <li>• TechCorp's integration challenges</li>
            <li>• Impact on customers and business</li>
            <li>• Competitive landscape analysis</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-green-600">Solution & Strategy</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Integration-as-a-Product approach</li>
            <li>• Technical architecture evolution</li>
            <li>• AI-powered integration capabilities</li>
            <li>• Marketplace and partner ecosystem</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-purple-600">Execution</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Detailed roadmap and timeline</li>
            <li>• Resource requirements</li>
            <li>• Success metrics and KPIs</li>
            <li>• Risk mitigation strategies</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-orange-600">Live Demos</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Interactive marketplace prototype</li>
            <li>• KPI dashboard walkthrough</li>
            <li>• Integration flow examples</li>
            <li>• Developer experience showcase</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

function ContextSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Context: The HR Ecosystem</h1>
        <p className="text-xl text-muted-foreground">Understanding the current landscape</p>
      </div>

      {/* Main HR Capabilities Diagram */}
      <Card className="p-8 mb-12">
        <div className="flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gicCwhejpZ3QzI7veqartO8EcIsYNC.png"
            alt="Core Capabilities of SaaS HR Platforms"
            className="max-w-full h-auto"
          />
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">HR Software in 2025</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-red-600 mb-2">Fragmentation:</h4>
            <p className="text-sm text-muted-foreground">
              Companies use 8–15 HR systems on average (payroll, ATS, performance, benefits, etc.)
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2">Rise of Specialization:</h4>
            <p className="text-sm text-muted-foreground">
              Best-of-breed tools like Greenhouse (ATS), Lattice (performance), Gusto (payroll), Deel (global HR)
              growing fast
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 mb-2">AI in HR:</h4>
            <p className="text-sm text-muted-foreground">
              Use of AI for recruiting, onboarding, talent management → creates more data silos, more need for
              connective tissue
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-600 mb-2">Integration = Decision Velocity:</h4>
            <p className="text-sm text-muted-foreground">
              Real-time syncs drive faster decision-making, better employee experiences
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">The Integration Imperative</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Companies use 100–300 SaaS tools. More integrations = higher engagement, increase in LTV & retention.
            End-to-End, automated workflows. Frictionless user experience.
          </p>
        </div>
      </Card>
    </div>
  )
}

function DiagnosisSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Diagnosis: Current State</h1>
        <p className="text-xl text-muted-foreground">Identifying the challenges</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 mb-12">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-red-600">Symptoms</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Badge variant="destructive" className="justify-center p-3">
              Non-Responsive Clients
            </Badge>
            <Badge variant="destructive" className="justify-center p-3">
              "Hard to sell"
            </Badge>
            <Badge variant="destructive" className="justify-center p-3">
              Long Implementation Cycles
            </Badge>
            <Badge variant="destructive" className="justify-center p-3">
              Custom Integrations
            </Badge>
            <Badge variant="destructive" className="justify-center p-3">
              Manual Processes
            </Badge>
            <Badge variant="destructive" className="justify-center p-3">
              Not Standardized
            </Badge>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-orange-600">Root Causes</h2>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded-lg">
              <h4 className="font-medium text-orange-900">Monolithic Architecture</h4>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <h4 className="font-medium text-orange-900">Cross-Functional Misalignment</h4>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <h4 className="font-medium text-orange-900">Engineering Capacity Constraints</h4>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <h4 className="font-medium text-orange-900">Lagging Competition</h4>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Implementation Timeline Comparison</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-red-600">Current State</h3>
            <div className="text-4xl font-bold text-red-600 mb-2">6-9 months</div>
            <p className="text-sm text-muted-foreground">Average integration delivery time</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-orange-600">Complex Integrations</h3>
            <div className="text-4xl font-bold text-orange-600 mb-2">12-18 months</div>
            <p className="text-sm text-muted-foreground">Enterprise custom integrations</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Assessment Framework</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-semibold">Dimension</th>
                <th className="text-left p-3 font-semibold">Assessment Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="p-3 font-medium">Internal Stakeholders</td>
                <td className="p-3 text-muted-foreground">
                  Interview Sales, CS, Support, Engineering, Partnerships to map pain points, missed handoffs, and
                  confusion around integration scope & SLAs
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Customer Feedback</td>
                <td className="p-3 text-muted-foreground">
                  Analyze top support tickets, feature requests, and churn reasons tied to integration gaps or delays
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Sales Impact Analysis</td>
                <td className="p-3 text-muted-foreground">
                  Review won/lost deal data —where integrations were cited as a deciding factor. Quantify lost revenue &
                  expansion delay due to integration gaps
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Technical Audit</td>
                <td className="p-3 text-muted-foreground">
                  Inventory current integrations: APIs, webhooks, middleware, logging, retry logic. Assess code reuse,
                  documentation quality, and observability
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Process Mapping</td>
                <td className="p-3 text-muted-foreground">
                  Document the end-to-end integration lifecycle: request → scoping → build → deploy → support. Identify
                  bottlenecks and ownership confusion
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Telemetry & Analytics</td>
                <td className="p-3 text-muted-foreground">
                  Pull metrics on time-to-integrate, error rates, failure causes, most-requested integrations, NPS delta
                  between integrated vs. non-integrated customers
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Market Benchmarking</td>
                <td className="p-3 text-muted-foreground">
                  Compare TechCorp to competitors (e.g., Workday, BambooHR, Rippling): # of integrations, public docs,
                  developer tools, marketplace presence
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

function StrategySection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Strategy & Approach</h1>
        <p className="text-xl text-muted-foreground">Our path forward</p>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Key Features of a Good Integration Platform</h2>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-semibold text-blue-600">Developer Experience</h4>
            <p className="text-muted-foreground">
              Well-documented APIs, SDKs, sandbox environments, clear error messages, auth helpers
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-600">Scalability & Resilience</h4>
            <p className="text-muted-foreground">
              Retry queues, rate limit handling, fault isolation, horizontal scaling
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600">Observability</h4>
            <p className="text-muted-foreground">
              Centralized logging, alerting, tracing, integration health dashboards
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-orange-600">Modularity & Reuse</h4>
            <p className="text-muted-foreground">
              Reusable connector framework, transformation utilities, normalized auth & config models
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-red-600">Security & Compliance</h4>
            <p className="text-muted-foreground">Tokenized auth, RBAC, audit trails, customer-specific isolation</p>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-600">Customer Self-Service</h4>
            <p className="text-muted-foreground">
              Easy UI for activation, configuration, status monitoring, versioning
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-8 mb-8 bg-gradient-to-r from-green-50 to-blue-50">
        <h2 className="text-2xl font-semibold mb-6 text-center">Rebranding Integrations as a Product</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2">
                <th className="text-left p-4 font-semibold"></th>
                <th className="text-left p-4 font-semibold text-red-600">Service Mindset</th>
                <th className="text-left p-4 font-semibold text-green-600">Product Mindset</th>
                <th className="text-left p-4 font-semibold text-blue-600">Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">Approach</td>
                <td className="p-4 text-muted-foreground">Case-by-case, reactive</td>
                <td className="p-4 text-muted-foreground">Roadmapped, repeatable</td>
                <td className="p-4 text-blue-600">Faster Time-to-Value – Pre-scoped, pre-built = faster go-lives</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Scope</td>
                <td className="p-4 text-muted-foreground">Defined during sales or fire drills</td>
                <td className="p-4 text-muted-foreground">Pre-scoped, documented</td>
                <td className="p-4 text-blue-600">
                  Lower TCO – Shared code, shared infra, observability, and fewer one-offs
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Success Metric</td>
                <td className="p-4 text-muted-foreground">Delivered on request</td>
                <td className="p-4 text-muted-foreground">Customer adoption, retention impact</td>
                <td className="p-4 text-blue-600">Higher Retention & LTV – Sticky workflows, end-to-end automation</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Engineering</td>
                <td className="p-4 text-muted-foreground">High touch, inefficient reuse</td>
                <td className="p-4 text-muted-foreground">Framework-driven, telemetry-enabled</td>
                <td className="p-4 text-blue-600">
                  Accelerated Innovation – Platform teams can deliver features instead of tickets
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">GTM</td>
                <td className="p-4 text-muted-foreground">Hard to sell, no pricing model</td>
                <td className="p-4 text-muted-foreground">Packaged, priceable, discoverable</td>
                <td className="p-4 text-blue-600">
                  Scalable GTM – Sales and CS can confidently talk about what's available
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Customer</td>
                <td className="p-4 text-muted-foreground">Surprised by complexity</td>
                <td className="p-4 text-muted-foreground">Empowered with transparency and self-service</td>
                <td className="p-4 text-blue-600">From Delivery Bottleneck to Key Product Differentiator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Assessment Framework and Decision Framework as single column, enlarged */}
      <div className="flex flex-col gap-8 mb-8">
        <Card className="p-10 text-lg">
          <h2 className="text-3xl font-semibold mb-8">Assessment Framework</h2>
          <div className="space-y-6">
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                1
              </div>
              <div>
                <h4 className="font-medium text-blue-900 text-lg">Internal Stakeholders</h4>
                <p className="text-base text-blue-700">Interview Sales, CS, Support, Engineering</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-green-50 rounded-lg">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                2
              </div>
              <div>
                <h4 className="font-medium text-green-900 text-lg">Customer Feedback</h4>
                <p className="text-base text-green-700">Analyze support tickets & churn reasons</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-purple-50 rounded-lg">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                3
              </div>
              <div>
                <h4 className="font-medium text-purple-900 text-lg">Sales Impact Analysis</h4>
                <p className="text-base text-purple-700">Review won/lost deals & revenue impact</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-orange-50 rounded-lg">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                4
              </div>
              <div>
                <h4 className="font-medium text-orange-900 text-lg">Technical Audit</h4>
                <p className="text-base text-orange-700">Inventory APIs, code reuse, documentation</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-red-50 rounded-lg">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                5
              </div>
              <div>
                <h4 className="font-medium text-red-900 text-lg">Process Mapping</h4>
                <p className="text-base text-red-700">Document integration lifecycle & bottlenecks</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                6
              </div>
              <div>
                <h4 className="font-medium text-yellow-900 text-lg">Market Benchmarking</h4>
                <p className="text-base text-yellow-700">Compare to competitors & best practices</p>
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-10 text-lg">
          <h2 className="text-3xl font-semibold mb-8">Decision Framework</h2>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 h-72">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 flex flex-col items-center justify-center">
                <h4 className="font-semibold text-green-800 text-xl mb-2">Build</h4>
                <p className="text-base text-green-600 text-center font-medium">Core Differentiators</p>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 flex flex-col items-center justify-center">
                <h4 className="font-semibold text-blue-800 text-xl mb-2">Buy</h4>
                <p className="text-base text-blue-600 text-center font-medium">Proven Solutions</p>
              </div>
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 flex flex-col items-center justify-center">
                <h4 className="font-semibold text-yellow-800 text-xl mb-2">Partner</h4>
                <p className="text-base text-yellow-600 text-center font-medium">Commodity Integrations</p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 flex flex-col items-center justify-center">
                <h4 className="font-semibold text-red-800 text-xl mb-2">Defer</h4>
                <p className="text-base text-red-600 text-center font-medium">Avoid These</p>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-base text-muted-foreground">
              Technical Complexity →
            </div>
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 -rotate-90 text-base text-muted-foreground">
              Strategic Value →
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

function ArchitectureSection() {
  const [activeView, setActiveView] = useState<"monolithic" | "microservices">("monolithic")

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Product Architecture</h1>
        <p className="text-xl text-muted-foreground">Technical foundation for scalable integrations</p>
      </div>

      {/* Architecture Toggle */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveView("monolithic")}
            className={`px-6 py-3 rounded-md font-medium transition-all ${
              activeView === "monolithic" ? "bg-white text-red-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Monolithic Architecture
          </button>
          <button
            onClick={() => setActiveView("microservices")}
            className={`px-6 py-3 rounded-md font-medium transition-all ${
              activeView === "microservices" ? "bg-white text-green-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Microservices Architecture
          </button>
        </div>
      </div>

      {/* Monolithic View */}
      {activeView === "monolithic" && (
        <Card className="p-8 mb-8 transition-all duration-500 ease-in-out">
          <h2 className="text-2xl font-semibold mb-6 text-center text-red-600">Monolithic HR Platform</h2>
          <div className="flex justify-center items-center mb-8">
            <div className="w-80 h-96 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex flex-col justify-around items-center text-white font-semibold shadow-xl transform hover:scale-105 transition-transform">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 m-2 w-4/5 text-center">
                Employee Management
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 m-2 w-4/5 text-center">
                Payroll Processing
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 m-2 w-4/5 text-center">
                Recruitment System
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 m-2 w-4/5 text-center">
                Performance Reviews
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 m-2 w-4/5 text-center">Time Tracking</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 m-2 w-4/5 text-center">
                Benefits Administration
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <h4 className="font-semibold text-red-800 mb-2">⚠️ Deployment Complexity</h4>
              <p className="text-sm text-red-600">Entire application must be deployed together, making updates risky</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <h4 className="font-semibold text-red-800 mb-2">🔧 Technology Lock-in</h4>
              <p className="text-sm text-red-600">Single technology stack limits flexibility and innovation</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <h4 className="font-semibold text-red-800 mb-2">📈 Scaling Challenges</h4>
              <p className="text-sm text-red-600">
                Must scale entire application even if only one module needs resources
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <h4 className="font-semibold text-red-800 mb-2">🚫 Single Point of Failure</h4>
              <p className="text-sm text-red-600">If one component fails, entire system becomes unavailable</p>
            </div>
          </div>
        </Card>
      )}

      {/* Microservices View */}
      {activeView === "microservices" && (
        <Card className="p-8 mb-8 transition-all duration-500 ease-in-out">
          <h2 className="text-2xl font-semibold mb-6 text-center text-green-600">Microservices HR Platform</h2>

          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-4 text-white text-center transform hover:scale-105 transition-all cursor-pointer">
              <h3 className="font-semibold mb-2">👥 Employee Service</h3>
              <p className="text-sm opacity-90">Manages employee profiles, onboarding, and organizational structure</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-4 text-white text-center transform hover:scale-105 transition-all cursor-pointer">
              <h3 className="font-semibold mb-2">💰 Payroll Service</h3>
              <p className="text-sm opacity-90">Handles salary calculations, tax deductions, and payment processing</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-4 text-white text-center transform hover:scale-105 transition-all cursor-pointer">
              <h3 className="font-semibold mb-2">🎯 Recruitment Service</h3>
              <p className="text-sm opacity-90">Job postings, candidate management, and hiring workflows</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-4 text-white text-center transform hover:scale-105 transition-all cursor-pointer">
              <h3 className="font-semibold mb-2">📊 Performance Service</h3>
              <p className="text-sm opacity-90">Goal setting, performance reviews, and feedback management</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-4 text-white text-center transform hover:scale-105 transition-all cursor-pointer">
              <h3 className="font-semibold mb-2">⏰ Time Service</h3>
              <p className="text-sm opacity-90">Time tracking, attendance, and leave management</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-4 text-white text-center transform hover:scale-105 transition-all cursor-pointer">
              <h3 className="font-semibold mb-2">🏥 Benefits Service</h3>
              <p className="text-sm opacity-90">Health insurance, retirement plans, and employee perks</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white text-center mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            <h3 className="font-semibold mb-2">🔄 Event Bus / Message Queue</h3>
            <p className="text-sm opacity-90">
              Asynchronous communication between services using events like EmployeeHired, PayrollProcessed,
              PerformanceReviewCompleted
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <h4 className="font-semibold text-green-800 mb-2">🚀 Independent Deployment</h4>
              <p className="text-sm text-green-600">Deploy services independently, enabling faster releases</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <h4 className="font-semibold text-green-800 mb-2">⚡ Technology Diversity</h4>
              <p className="text-sm text-green-600">Choose optimal technologies for each service</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <h4 className="font-semibold text-green-800 mb-2">📈 Granular Scaling</h4>
              <p className="text-sm text-green-600">Scale individual services based on demand</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <h4 className="font-semibold text-green-800 mb-2">🛡️ Fault Isolation</h4>
              <p className="text-sm text-green-600">Service failures don't bring down entire system</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <h4 className="font-semibold text-green-800 mb-2">👥 Team Autonomy</h4>
              <p className="text-sm text-green-600">Different teams can own and develop services independently</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <h4 className="font-semibold text-green-800 mb-2">🔄 Event-Driven Benefits</h4>
              <p className="text-sm text-green-600">Loose coupling, better data consistency, improved resilience</p>
            </div>
          </div>
        </Card>
      )}

      {/* Comparison Table */}
      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Architecture Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2">
                <th className="text-left p-4 font-semibold">Aspect</th>
                <th className="text-left p-4 font-semibold text-red-600">Monolithic</th>
                <th className="text-left p-4 font-semibold text-green-600">Microservices + Events</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">Deployment Time</td>
                <td className="p-4 text-muted-foreground">30-60 minutes (full system)</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    5-10 minutes (per service)
                  </span>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">Development Speed</td>
                <td className="p-4 text-muted-foreground">Slower (coordination overhead)</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    Faster (parallel development)
                  </span>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">Scalability</td>
                <td className="p-4 text-muted-foreground">Scale entire application</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    Scale individual services
                  </span>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">Availability</td>
                <td className="p-4 text-muted-foreground">99.0% (single point of failure)</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    99.9% (fault isolation)
                  </span>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">Technology Stack</td>
                <td className="p-4 text-muted-foreground">Single stack (e.g., Java)</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    Multiple stacks optimized per service
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium">Data Consistency</td>
                <td className="p-4 text-muted-foreground">ACID transactions</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    Eventual consistency via events
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

function AISection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">AI in Integrations</h1>
        <p className="text-xl text-muted-foreground">Leveraging AI to enhance integration capabilities</p>
      </div>

      <Card className="p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">AI-Powered Integration Scenarios</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <h4 className="font-semibold text-blue-800 mb-2">Intelligent Data Mapping</h4>
            <p className="text-sm text-blue-600">
              Automatically map data fields between different systems using machine learning
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <h4 className="font-semibold text-green-800 mb-2">Automated Error Handling</h4>
            <p className="text-sm text-green-600">
              Use AI to detect and resolve integration errors, reducing manual intervention
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <h4 className="font-semibold text-purple-800 mb-2">Predictive Integration Performance</h4>
            <p className="text-sm text-purple-600">
              Predict integration performance bottlenecks and optimize resource allocation
            </p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg text-center">
            <h4 className="font-semibold text-orange-800 mb-2">Natural Language Integration</h4>
            <p className="text-sm text-orange-600">
              Enable users to define integrations using natural language commands
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg text-center">
            <h4 className="font-semibold text-red-800 mb-2">AI-Driven Security</h4>
            <p className="text-sm text-red-600">Use AI to detect and prevent security threats in integration flows</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg text-center">
            <h4 className="font-semibold text-yellow-800 mb-2">Smart Integration Recommendations</h4>
            <p className="text-sm text-yellow-600">
              Recommend relevant integrations based on user behavior and system data
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">AI Integration Architecture</h2>
        <div className="flex justify-center">
          <img
            src="https://i.imgur.com/your-ai-integration-architecture-image.png"
            alt="AI Integration Architecture"
            className="max-w-full h-auto"
          />
        </div>
      </Card>

      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Benefits of AI in Integrations</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <h4 className="font-semibold text-blue-800 mb-2">Increased Efficiency</h4>
            <p className="text-sm text-blue-600">Automate integration tasks and reduce manual effort</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <h4 className="font-semibold text-green-800 mb-2">Improved Accuracy</h4>
            <p className="text-sm text-green-600">Reduce errors and ensure data consistency</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <h4 className="font-semibold text-purple-800 mb-2">Enhanced Security</h4>
            <p className="text-sm text-purple-600">Detect and prevent security threats</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg text-center">
            <h4 className="font-semibold text-orange-800 mb-2">Faster Time-to-Market</h4>
            <p className="text-sm text-orange-600">Accelerate integration projects and deliver value quickly</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg text-center">
            <h4 className="font-semibold text-red-800 mb-2">Reduced Costs</h4>
            <p className="text-sm text-red-600">Lower integration costs and improve ROI</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg text-center">
            <h4 className="font-semibold text-yellow-800 mb-2">Better Decision-Making</h4>
            <p className="text-sm text-yellow-600">Gain insights from integrated data and make informed decisions</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function MarketplaceSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Integrations Marketplace</h1>
        <p className="text-xl text-muted-foreground">A central hub for discovering and deploying integrations</p>
      </div>

      <Card className="p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Key Features of the Marketplace</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <h4 className="font-semibold text-blue-800 mb-2">Integration Discovery</h4>
            <p className="text-sm text-blue-600">Easily find integrations for your favorite apps and services</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <h4 className="font-semibold text-green-800 mb-2">One-Click Deployment</h4>
            <p className="text-sm text-green-600">Deploy integrations with a single click</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <h4 className="font-semibold text-purple-800 mb-2">Automated Configuration</h4>
            <p className="text-sm text-purple-600">Automatically configure integrations with minimal manual setup</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg text-center">
            <h4 className="font-semibold text-orange-800 mb-2">Integration Monitoring</h4>
            <p className="text-sm text-orange-600">Monitor the health and performance of your integrations</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg text-center">
            <h4 className="font-semibold text-red-800 mb-2">Integration Management</h4>
            <p className="text-sm text-red-600">Manage your integrations from a central dashboard</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg text-center">
            <h4 className="font-semibold text-yellow-800 mb-2">Integration Support</h4>
            <p className="text-sm text-yellow-600">Get support for your integrations from our team of experts</p>
          </div>
        </div>
      </Card>

      <Card className="p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Marketplace Architecture</h2>
        <div className="flex justify-center">
          <img
            src="https://i.imgur.com/your-marketplace-architecture-image.png"
            alt="Marketplace Architecture"
            className="max-w-full h-auto"
          />
        </div>
      </Card>

      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Benefits of the Marketplace</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <h4 className="font-semibold text-blue-800 mb-2">Increased Integration Adoption</h4>
            <p className="text-sm text-blue-600">Make it easy for users to discover and deploy integrations</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <h4 className="font-semibold text-green-800 mb-2">Reduced Integration Costs</h4>
            <p className="text-sm text-green-600">Lower integration costs and improve ROI</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <h4 className="font-semibold text-purple-800 mb-2">Faster Time-to-Market</h4>
            <p className="text-sm text-purple-600">Accelerate integration projects and deliver value quickly</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg text-center">
            <h4 className="font-semibold text-orange-800 mb-2">Improved Customer Satisfaction</h4>
            <p className="text-sm text-orange-600">Provide a seamless integration experience for your customers</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg text-center">
            <h4 className="font-semibold text-red-800 mb-2">Increased Revenue</h4>
            <p className="text-sm text-red-600">Generate revenue from integration sales</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg text-center">
            <h4 className="font-semibold text-yellow-800 mb-2">Better Ecosystem Engagement</h4>
            <p className="text-sm text-yellow-600">Engage with your ecosystem of partners and developers</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function PartnerSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Partner Program</h1>
        <p className="text-xl text-muted-foreground">A program to enable partners to build and sell integrations</p>
      </div>

      <Card className="p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Key Features of the Partner Program</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <h4 className="font-semibold text-blue-800 mb-2">Integration Development Tools</h4>
            <p className="text-sm text-blue-600">Provide partners with the tools they need to build integrations</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <h4 className="font-semibold text-green-800 mb-2">Integration Marketing Support</h4>
            <p className="text-sm text-green-600">Help partners market their integrations to our customers</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <h4 className="font-semibold text-purple-800 mb-2">Integration Sales Support</h4>
            <p className="text-sm text-purple-600">Help partners sell their integrations to our customers</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg text-center">
            <h4 className="font-semibold text-orange-800 mb-2">Integration Technical Support</h4>
            <p className="text-sm text-orange-600">Provide partners with technical support for their integrations</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg text-center">
            <h4 className="font-semibold text-red-800 mb-2">Integration Training</h4>
            <p className="text-sm text-red-600">Provide partners with training on how to build and sell integrations</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg text-center">
            <h4 className="font-semibold text-yellow-800 mb-2">Integration Certification</h4>
            <p className="text-sm text-yellow-600">
              Certify partners who have demonstrated expertise in building and selling integrations
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Partner Program Architecture</h2>
        <div className="flex justify-center">
          <img
            src="https://i.imgur.com/your-partner-program-architecture-image.png"
            alt="Partner Program Architecture"
            className="max-w-full h-auto"
          />
        </div>
      </Card>

      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Benefits of the Partner Program</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <h4 className="font-semibold text-blue-800 mb-2">Increased Integration Revenue</h4>
            <p className="text-sm text-blue-600">Generate revenue from integration sales</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <h4 className="font-semibold text-green-800 mb-2">Reduced Integration Costs</h4>
            <p className="text-sm text-green-600">Lower integration costs and improve ROI</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <h4 className="font-semibold text-purple-800 mb-2">Faster Time-to-Market</h4>
            <p className="text-sm text-purple-600">Accelerate integration projects and deliver value quickly</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg text-center">
            <h4 className="font-semibold text-orange-800 mb-2">Improved Customer Satisfaction</h4>
            <p className="text-sm text-orange-600">Provide a seamless integration experience for your customers</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg text-center">
            <h4 className="font-semibold text-red-800 mb-2">Increased Ecosystem Engagement</h4>
            <p className="text-sm text-red-600">Engage with your ecosystem of partners and developers</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg text-center">
            <h4 className="font-semibold text-yellow-800 mb-2">Better Brand Awareness</h4>
            <p className="text-sm text-yellow-600">Increase brand awareness and reach new customers</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function DeveloperSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Developer Experience</h1>
        <p className="text-xl text-muted-foreground">
          A great developer experience is key to building successful integrations
        </p>
      </div>

      <Card className="p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Key Features of a Great Developer Experience</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <h4 className="font-semibold text-blue-800 mb-2">Well-Documented APIs</h4>
            <p className="text-sm text-blue-600">Provide developers with clear and concise API documentation</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <h4 className="font-semibold text-green-800 mb-2">Easy-to-Use SDKs</h4>
            <p className="text-sm text-green-600">
              Provide developers with easy-to-use SDKs for their favorite languages
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <h4 className="font-semibold text-purple-800 mb-2">Sandbox Environments</h4>
            <p className="text-sm text-purple-600">
              Provide developers with sandbox environments to test their integrations
            </p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg text-center">
            <h4 className="font-semibold text-orange-800 mb-2">Clear Error Messages</h4>
            <p className="text-sm text-orange-600">Provide developers with clear and concise error messages</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg text-center">
            <h4 className="font-semibold text-red-800 mb-2">Authentication Helpers</h4>
            <p className="text-sm text-red-600">
              Provide developers with authentication helpers to simplify the authentication process
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg text-center">
            <h4 className="font-semibold text-yellow-800 mb-2">Support for Webhooks</h4>
            <p className="text-sm text-yellow-600">Provide developers with support for webhooks</p>
          </div>
        </div>
      </Card>

      <Card className="p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Developer Experience Architecture</h2>
        <div className="flex justify-center">
          <img
            src="https://i.imgur.com/your-developer-experience-architecture-image.png"
            alt="Developer Experience Architecture"
            className="max-w-full h-auto"
          />
        </div>
      </Card>

      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Benefits of a Great Developer Experience</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <h4 className="font-semibold text-blue-800 mb-2">Increased Integration Adoption</h4>
            <p className="text-sm text-blue-600">Make it easy for developers to build and deploy integrations</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <h4 className="font-semibold text-green-800 mb-2">Reduced Integration Costs</h4>
            <p className="text-sm text-green-600">Lower integration costs and improve ROI</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <h4 className="font-semibold text-purple-800 mb-2">Faster Time-to-Market</h4>
            <p className="text-sm text-purple-600">Accelerate integration projects and deliver value quickly</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg text-center">
            <h4 className="font-semibold text-orange-800 mb-2">Improved Customer Satisfaction</h4>
            <p className="text-sm text-orange-600">Provide a seamless integration experience for your customers</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg text-center">
            <h4 className="font-semibold text-red-800 mb-2">Increased Ecosystem Engagement</h4>
            <p className="text-sm text-red-600">Engage with your ecosystem of partners and developers</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg text-center">
            <h4 className="font-semibold text-yellow-800 mb-2">Better Brand Awareness</h4>
            <p className="text-sm text-yellow-600">Increase brand awareness and reach new customers</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function ExecutionSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Execution Plan</h1>
        <p className="text-xl text-muted-foreground">Implementation, timeline, and success metrics</p>
      </div>

      <Card className="p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Implementation Timeline</h2>
        <div className="flex justify-center">
          <img
            src="https://i.imgur.com/your-implementation-timeline-image.png"
            alt="Implementation Timeline"
            className="max-w-full h-auto"
          />
        </div>
      </Card>

      <Card className="p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Success Metrics</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <h4 className="font-semibold text-blue-800 mb-2">Integration Adoption Rate</h4>
            <p className="text-sm text-blue-600">Measure the percentage of customers who are using integrations</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <h4 className="font-semibold text-green-800 mb-2">Integration Usage Rate</h4>
            <p className="text-sm text-green-600">Measure the frequency with which customers are using integrations</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <h4 className="font-semibold text-purple-800 mb-2">Integration Satisfaction Rate</h4>
            <p className="text-sm text-purple-600">Measure the satisfaction of customers with integrations</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg text-center">
            <h4 className="font-semibold text-orange-800 mb-2">Integration Revenue</h4>
            <p className="text-sm text-orange-600">Measure the revenue generated from integrations</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg text-center">
            <h4 className="font-semibold text-red-800 mb-2">Integration Cost Savings</h4>
            <p className="text-sm text-red-600">Measure the cost savings from integrations</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg text-center">
            <h4 className="font-semibold text-yellow-800 mb-2">Integration Time-to-Market</h4>
            <p className="text-sm text-yellow-600">Measure the time-to-market for integrations</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function RoadmapSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Roadmap & Timeline</h1>
        <p className="text-xl text-muted-foreground">A detailed roadmap and timeline for integration development</p>
      </div>

      <Card className="p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Integration Roadmap</h2>
        <div className="flex justify-center">
          <img
            src="https://i.imgur.com/your-integration-roadmap-image.png"
            alt="Integration Roadmap"
            className="max-w-full h-auto"
          />
        </div>
      </Card>

      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Integration Timeline</h2>
        <div className="flex justify-center">
          <img
            src="https://i.imgur.com/your-integration-timeline-image.png"
            alt="Integration Timeline"
            className="max-w-full h-auto"
          />
        </div>
      </Card>
    </div>
  )
}

function KPIsSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">KPIs & Success Metrics</h1>
        <p className="text-xl text-muted-foreground">Key performance indicators and success metrics for integrations</p>
      </div>

      <Card className="p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Key Performance Indicators</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <h4 className="font-semibold text-blue-800 mb-2">Integration Adoption Rate</h4>
            <p className="text-sm text-blue-600">Measure the percentage of customers who are using integrations</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <h4 className="font-semibold text-green-800 mb-2">Integration Usage Rate</h4>
            <p className="text-sm text-green-600">Measure the frequency with which customers are using integrations</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <h4 className="font-semibold text-purple-800 mb-2">Integration Satisfaction Rate</h4>
            <p className="text-sm text-purple-600">Measure the satisfaction of customers with integrations</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg text-center">
            <h4 className="font-semibold text-orange-800 mb-2">Integration Revenue</h4>
            <p className="text-sm text-orange-600">Measure the revenue generated from integrations</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg text-center">
            <h4 className="font-semibold text-red-800 mb-2">Integration Cost Savings</h4>
            <p className="text-sm text-red-600">Measure the cost savings from integrations</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg text-center">
            <h4 className="font-semibold text-yellow-800 mb-2">Integration Time-to-Market</h4>
            <p className="text-sm text-yellow-600">Measure the time-to-market for integrations</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function SummarySection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Summary & Impact</h1>
        <p className="text-xl text-muted-foreground">Recap of our integration strategy and its potential impact</p>
      </div>

      <Card className="p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Integrations are critical for customer success and business growth</li>
            <li>• Our new integration strategy will transform our integration ecosystem</li>
            <li>• We have a clear roadmap and timeline for integration development</li>
            <li>• We will measure our success using key performance indicators</li>
          </ul>
        </div>
      </Card>

      <Card className="p-8 mt-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">The Integration Imperative</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            By investing in integrations, we can create a more seamless and valuable experience for our customers, drive
            business growth, and stay ahead of the competition.
          </p>
        </div>
      </Card>
    </div>
  )
}

function QuestionsSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Questions & Discussion</h1>
        <p className="text-xl text-muted-foreground">Open forum for questions and discussion</p>
      </div>

      <Card className="p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">We're Here to Help</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Do you have any questions about our integration strategy or roadmap? We're here to help.
          </p>
          <Button>Contact Us</Button>
        </div>
      </Card>
    </div>
  )
}
