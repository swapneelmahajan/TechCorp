"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, ChevronRight, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DataMappingDemo, LogIntelligenceDemo } from "./ai-demos"

const sections = [
  {
    id: "kickoff",
    title: "Kickoff",
    subtitle: "Introduction and agenda",
    subsections: ["about", "nexthour"],
    color: "from-blue-500 to-blue-600",
    icon: "🚀",
  },
  {
    id: "context",
    title: "Context: The HR Ecosystem",
    subtitle: "Understanding the current landscape",
    subsections: ["context"],
    color: "from-purple-500 to-purple-600",
    icon: "🌐",
  },
  {
    id: "diagnosis",
    title: "Diagnosis: Current State",
    subtitle: "Identifying the challenges",
    subsections: ["diagnosis"],
    color: "from-red-500 to-red-600",
    icon: "🔍",
  },
  {
    id: "strategy",
    title: "Strategy & Approach",
    subtitle: "Our path forward",
    subsections: ["strategy"],
    color: "from-green-500 to-green-600",
    icon: "🎯",
  },
  {
    id: "solution",
    title: "Solution",
    subtitle: "Technical architecture and platform design",
    subsections: ["architecture", "ai", "marketplace", "partner", "developer"],
    hasDemo: true,
    color: "from-indigo-500 to-indigo-600",
    icon: "⚡",
  },
  {
    id: "execution",
    title: "Execution Plan",
    subtitle: "Implementation, timeline, and success metrics",
    subsections: ["execution", "kpis"],
    hasDemo: true,
    color: "from-orange-500 to-orange-600",
    icon: "📋",
  },
  {
    id: "closing",
    title: "Closing",
    subtitle: "Summary and next steps",
    subsections: ["summary", "questions"],
    color: "from-teal-500 to-teal-600",
    icon: "✅",
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

        <main className="container py-8 max-w-8xl mx-auto">
          {/* Section and Subsection Navigation */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
              <span>{currentSectionData.title}</span>
              <Home className="h-4 w-4" />
              <span className="text-foreground">{subsectionTitles[currentSubsection as keyof typeof subsectionTitles] || currentSubsection}</span>
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
        </div>
      </header>

      <main className="container py-16 ml-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold tracking-tight mb-6">Integrations Roadmap</h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
            A comprehensive strategy for transforming TechCorp's integration ecosystem
          </p>
        </div>

        {/* Progressive Agenda Flow */}
        <div className="max-w-8xl mx-auto ml-12">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-red-200 via-green-200 via-indigo-200 via-orange-200 to-teal-200 transform -translate-y-1/2 z-0"></div>

            {/* Section Cards */}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-8 relative z-10">
              {sections.map((section, index) => (
                <Card
                  key={section.id}
                  className="group cursor-pointer transition-all hover:shadow-xl hover:scale-105 relative overflow-hidden bg-white min-h-[280px]"
                  onClick={() => handleSectionClick(section.id)}
                >
                  {/* Demo Badge - Fixed positioning */}
                  {section.hasDemo && (
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="text-base bg-green-600 text-white">Live Demo</Badge>
                    </div>
                  )}

                  {/* Section Number */}
                  <div className="absolute top-4 right-4 z-10">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center text-white text-base font-bold`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <CardHeader className="pb-6 pt-16">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-4">{section.icon}</div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors text-center leading-tight">
                      {section.title}
                    </CardTitle>
                    <CardDescription className="text-base text-center">{section.subtitle}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="text-center">
                      {/* Remove the ChevronRight icon here */}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
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
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h1 className="text-8xl font-bold mb-8">About Me</h1>
        <p className="text-4xl text-muted-foreground">Introduction and background</p>
      </div>

      <Card className="p-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8">Swapneel Mahajan</h2>
        </div>

        {/* Simple, elegant layout */}
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-8 py-4 rounded-full text-2xl font-semibold mb-8">
              15+ years building and scaling global platforms
            </div>
      </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-xl">Payments, Risk, Fraud, Subscriptions, eCommerce</span>
            </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xl">Previously at 8x8, Visa, Symantec</span>
            </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xl">API-first, microservices architecture</span>
          </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-xl">Integration architecture and strategy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-xl">Developer experience and API design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-xl">Partner ecosystem development</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-xl">B2B marketplace platforms</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-xl">Collaboration, mentoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-xl">Gen AI curiosity</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-xl">Girl dad</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                <span className="text-xl">Harry Potter, LOTR fan</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-xl">#dadjokesrule</span>
              </div>
            </div>
          </div>


        </div>
      </Card>
    </div>
  )
}

function NextHourSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h1 className="text-8xl font-bold mb-8">The Next Hour</h1>
        <p className="text-4xl text-muted-foreground">What we'll cover today</p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <Card className="p-12">
          <h3 className="text-3xl font-semibold mb-6 text-blue-600">Problem & Context</h3>
          <ul className="space-y-3 text-xl text-muted-foreground">
            <li>• Current state of HR ecosystem fragmentation</li>
            <li>• TechCorp's integration challenges</li>
            <li>• Impact on customers and business</li>
            <li>• Competitive landscape analysis</li>
          </ul>
        </Card>

        <Card className="p-12">
          <h3 className="text-3xl font-semibold mb-6 text-green-600">Strategy & Solution</h3>
          <ul className="space-y-3 text-xl text-muted-foreground">
            <li>• Integration-as-a-Product approach</li>
            <li>• Technical architecture evolution</li>
            <li>• AI-powered integration capabilities</li>
            <li>• Marketplace and partner ecosystem</li>
          </ul>
        </Card>

        <Card className="p-12">
          <h3 className="text-3xl font-semibold mb-6 text-purple-600">Execution</h3>
          <ul className="space-y-3 text-xl text-muted-foreground">
            <li>• Detailed roadmap and timeline</li>
            <li>• Resource requirements</li>
            <li>• Success metrics and KPIs</li>
            <li>• Risk mitigation strategies</li>
          </ul>
        </Card>

        <Card className="p-12">
          <h3 className="text-3xl font-semibold mb-6 text-orange-600">Live Demos</h3>
          <ul className="space-y-3 text-xl text-muted-foreground">
            <li>• Interactive marketplace prototype</li>
            <li>• KPI dashboard walkthrough</li>
            <li>• AI Acceleration examples</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

function ContextSection() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    // Step 0: Overview (diagram)
    (
      <Card className="p-12 mb-16">
        <div className="flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gicCwhejpZ3QzI7veqartO8EcIsYNC.png"
            alt="Core Capabilities of SaaS HR Platforms"
            className="max-w-full h-auto"
          />
        </div>
      </Card>
    ),
    // Step 1: HR Software in 2025 (scaled down)
    (
      <Card className="p-12 mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center">HR Software in 2025</h2>
        <div className="grid gap-8 md:grid-cols-2 text-lg">
          <div>
            <h4 className="font-semibold text-red-600 mb-2 text-xl">Fragmentation:</h4>
            <p className="text-muted-foreground mb-4">
              Companies use 8–15 HR systems on average (payroll, ATS, performance, benefits, etc.)
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2 text-xl">Rise of Specialization:</h4>
            <p className="text-muted-foreground mb-4">
              Best-of-breed tools like Greenhouse (ATS), Lattice (performance), Gusto (payroll), Deel (global HR)
              growing fast
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 mb-2 text-xl">AI in HR:</h4>
            <p className="text-muted-foreground mb-4">
              Use of AI for recruiting, onboarding, talent management
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-orange-600 mb-2 text-xl">HR is Strategic:</h4>
            <p className="text-muted-foreground mb-4">
              Human Resource Management → Human Capital Management
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-600 mb-2 text-xl">Integration = Decision Velocity:</h4>
            <p className="text-muted-foreground mb-4">
              Real-time syncs drive faster decision-making, better employee experiences
            </p>
          </div>
        </div>
      </Card>
    ),
  ]

  return (
    <div className="max-w-8xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6">Context: The HR Ecosystem</h1>
        <p className="text-2xl text-muted-foreground">Understanding the current landscape</p>
      </div>
      {steps[currentStep]}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button
          onClick={() => setCurrentStep((s) => Math.min(steps.length - 1, s + 1))}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

function DiagnosisSection() {
  const [currentStep, setCurrentStep] = useState<"challenges" | "maturity" | "assessment">("challenges")
  const [animationStep, setAnimationStep] = useState(0)

  // Combined data for Challenges step
  const symptoms = [
    "Lagging Competition",
    "Non-Responsive Clients",
    '"Hard to sell"',
    "Long Implementation Cycles",
    "Custom Integrations",
  ]

  const rootCauses = [
    "Monolithic Architecture",
    "X-Functional Misalignment",
    "Engineering Capacity Constraints",
    "Manual Processes",
    "Not Standardized",
  ]

  // New connections as specified (1-based to 0-based)
  const connections = [
    { from: 0, to: 1 }, { from: 0, to: 2 }, // 1 → 2, 3
    { from: 1, to: 1 }, { from: 1, to: 3 }, // 2 → 2, 4
    { from: 2, to: 1 }, { from: 2, to: 3 }, // 3 → 2, 4
    { from: 3, to: 0 }, { from: 3, to: 2 }, { from: 3, to: 4 }, // 4 → 1, 3, 5
    { from: 4, to: 0 }, { from: 4, to: 4 }, // 5 → 1, 5
  ]

  // Box layout constants
  const boxWidth = 320 // px, wide enough for longest label
  const boxHeight = 64
  const colGap = 200 // px, increased gap between columns
  const startX = 0
  const startY = 80
  const yStep = 90
  const connectorOffset = 8 // px, offset for connector lines to avoid overlapping box borders

  const handleNext = () => {
    if (currentStep === "challenges") setCurrentStep("maturity")
    else if (currentStep === "maturity") setCurrentStep("assessment")
  }
  const handlePrevious = () => {
    if (currentStep === "assessment") setCurrentStep("maturity")
    else if (currentStep === "maturity") setCurrentStep("challenges")
  }

  return (
    <div className="max-w-8xl mx-auto">
      <div className="text-center mb-24">
        <h1 className="text-8xl font-bold mb-8">Diagnosis: Current State</h1>
        <p className="text-4xl text-muted-foreground">Identifying the challenges</p>
      </div>

      {/* Step Navigation */}
      <div className="flex justify-center mb-16">
        <div className="flex bg-gray-100 rounded-lg p-2">
          <button
            onClick={() => setCurrentStep("challenges")}
            className={`px-8 py-4 rounded-md font-medium transition-all text-lg ${currentStep === "challenges" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"}`}
          >
            1. Challenges
          </button>
          <button
            onClick={() => setCurrentStep("maturity")}
            className={`px-8 py-4 rounded-md font-medium transition-all text-lg ${currentStep === "maturity" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"}`}
          >
            2. Maturity Journey
          </button>
          <button
            onClick={() => setCurrentStep("assessment")}
            className={`px-8 py-4 rounded-md font-medium transition-all text-lg ${currentStep === "assessment" ? "bg-white text-green-600 shadow-sm" : "text-gray-600 hover:text-gray-900"}`}
          >
            3. Assessment Framework
          </button>
        </div>
      </div>

      {/* Challenges Step: Combined Symptoms, Root Causes, Connections */}
      {currentStep === "challenges" && (
        <div style={{ overflowX: 'auto', width: '100%' }}>
          <Card className="p-8 mb-8 transition-all duration-500 ease-in-out" style={{ minWidth: '1200px', width: '1200px', maxWidth: 'none' }}>
            <div className="relative z-10 grid grid-cols-2 gap-[200px] h-full w-full" style={{ gridTemplateColumns: `320px 320px` }}>
              {/* Symptoms Column */}
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">SYMPTOMS</h2>
                <div className="flex-1 flex flex-col justify-around">
                  {symptoms.map((symptom, index) => (
                    <div
                      key={index}
                      className="p-4 border-2 border-blue-500 bg-blue-50 rounded-lg text-center font-medium transition-all duration-500 w-80 mx-auto"
                      style={{ width: boxWidth }}
                    >
                      {symptom}
                    </div>
                  ))}
                </div>
              </div>
              {/* Root Causes Column */}
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-center mb-8 text-red-600">ROOT CAUSES</h2>
                <div className="flex-1 flex flex-col justify-around">
                  {rootCauses.map((cause, index) => (
                    <div
                      key={index}
                      className="p-4 border-2 border-red-500 bg-red-50 rounded-lg text-center font-medium transition-all duration-500 w-80 mx-auto"
                      style={{ width: boxWidth }}
                    >
                      {cause}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
          </div>
      )}

      {/* Maturity Journey Step */}
      {currentStep === "maturity" && (
        <Card className="p-8 mb-8 transition-all duration-500 ease-in-out">
          <h2 className="text-2xl font-semibold mb-6 text-center">TechCorp's Integration Maturity Journey</h2>
          <div className="flex justify-center mb-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E6ShDsBmUce9dlw6cSz46j65tvIrK0.png"
              alt="Gartner Integration Maturity Model showing TechCorp's current state and future progression"
              className="max-w-full h-auto"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <h4 className="font-semibold text-red-800 mb-2">Current: Ad Hoc</h4>
              <p className="text-sm text-red-600">Case-by-case sourcing, ungoverned project-by-project approach</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <h4 className="font-semibold text-green-800 mb-2">Target: Collaborative (6-9 months)</h4>
              <p className="text-sm text-green-600">Standardized processes, centralized competency, hybrid platform</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <h4 className="font-semibold text-blue-800 mb-2">Vision: Self-Service (12-18 months)</h4>
              <p className="text-sm text-blue-600">Business utility, democratized delivery, citizen integrators</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" onClick={handleNext}>
              Next
            </Button>
          </div>
        </Card>
      )}

      {/* Assessment Framework Step */}
      {currentStep === "assessment" && (
        <Card className="p-16 transition-all duration-500 ease-in-out">
          <h2 className="text-5xl font-semibold mb-12 text-center">Assessment Framework</h2>
          <div className="space-y-8">
            <div className="flex items-center p-8 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                1
              </div>
              <div>
                <h4 className="text-2xl font-medium text-blue-900 mb-2">Internal Stakeholders</h4>
                <p className="text-lg text-blue-700">Interview Sales, CS, Support, Engineering, Partnerships</p>
              </div>
            </div>
            <div className="flex items-center p-8 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                2
              </div>
              <div>
                <h4 className="text-2xl font-medium text-green-900 mb-2">Customer Feedback</h4>
                <p className="text-lg text-green-700">Analyze support tickets, feature requests, and churn reasons</p>
              </div>
            </div>
            <div className="flex items-center p-8 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                3
              </div>
              <div>
                <h4 className="text-2xl font-medium text-purple-900 mb-2">Sales Impact Analysis</h4>
                <p className="text-lg text-purple-700">
                  Review won/lost deals where integrations were deciding factors
                </p>
              </div>
            </div>
            <div className="flex items-center p-8 bg-orange-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                4
              </div>
              <div>
                <h4 className="text-2xl font-medium text-orange-900 mb-2">Technical Audit</h4>
                <p className="text-lg text-orange-700">Inventory APIs, webhooks, middleware, logging, retry logic</p>
              </div>
            </div>
            <div className="flex items-center p-8 bg-red-50 rounded-lg">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                5
              </div>
              <div>
                <h4 className="text-2xl font-medium text-red-900 mb-2">Process Mapping</h4>
                <p className="text-lg text-red-700">
                  Document integration lifecycle: request → scoping → build → deploy → support
                </p>
              </div>
            </div>
            <div className="flex items-center p-8 bg-yellow-50 rounded-lg">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                6
              </div>
              <div>
                <h4 className="text-2xl font-medium text-yellow-900 mb-2">Market Benchmarking</h4>
                <p className="text-lg text-yellow-700">Compare to competitors: # integrations, docs, developer tools</p>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-12">
        <Button variant="outline" onClick={handlePrevious} disabled={currentStep === "challenges"}>
          Previous
        </Button>
        <Button variant="outline" onClick={handleNext} disabled={currentStep === "assessment"}>
          Next
        </Button>
      </div>
    </div>
  )
}

function StrategySection() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    // Step 0: Rebranding Integrations as a Product (table)
    (
      <Card className="p-12 mb-12 bg-gradient-to-r from-green-50 to-blue-50">
        <h2 className="text-3xl font-semibold mb-8 text-center">Rebranding Integrations as a Product</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-base">
            <thead>
              <tr className="border-b-4">
                <th className="text-left p-4 font-semibold text-lg"></th>
                <th className="text-left p-4 font-semibold text-lg text-red-600">Service Mindset</th>
                <th className="text-left p-4 font-semibold text-lg text-green-600">Product Mindset</th>
                <th className="text-left p-4 font-semibold text-lg text-blue-600">Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="p-4 font-medium text-base">Approach</td>
                <td className="p-4 text-muted-foreground text-base">Case-by-case, reactive</td>
                <td className="p-4 text-muted-foreground text-base">Roadmapped, repeatable</td>
                <td className="p-4 text-blue-600 text-base">Faster Time-to-Value – Pre-scoped, pre-built = faster go-lives</td>
              </tr>
              <tr className="border-b-2">
                <td className="p-4 font-medium text-base">Scope</td>
                <td className="p-4 text-muted-foreground text-base">Defined during sales or fire drills</td>
                <td className="p-4 text-muted-foreground text-base">Pre-scoped, documented</td>
                <td className="p-4 text-blue-600 text-base">
                  Lower TCO – Shared code, shared infra, observability, and fewer one-offs
                </td>
              </tr>
              <tr className="border-b-2">
                <td className="p-4 font-medium text-base">Success Metric</td>
                <td className="p-4 text-muted-foreground text-base">Delivered on request</td>
                <td className="p-4 text-muted-foreground text-base">Customer adoption, retention impact</td>
                <td className="p-4 text-blue-600 text-base">Higher Retention & LTV – Sticky workflows, end-to-end automation</td>
              </tr>
              <tr className="border-b-2">
                <td className="p-4 font-medium text-base">Engineering</td>
                <td className="p-4 text-muted-foreground text-base">High touch, inefficient reuse</td>
                <td className="p-4 text-muted-foreground text-base">Framework-driven, telemetry-enabled</td>
                <td className="p-4 text-blue-600 text-base">
                  Accelerated Innovation – Platform teams can deliver features instead of tickets
                </td>
              </tr>
              <tr className="border-b-2">
                <td className="p-4 font-medium text-base">GTM</td>
                <td className="p-4 text-muted-foreground text-base">Hard to sell, no pricing model</td>
                <td className="p-4 text-muted-foreground text-base">Packaged, priceable, discoverable</td>
                <td className="p-4 text-blue-600 text-base">
                  Scalable GTM – Sales and CS can confidently talk about what's available
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-base">Customer</td>
                <td className="p-4 text-muted-foreground text-base">Surprised by complexity</td>
                <td className="p-4 text-muted-foreground text-base">Empowered with transparency and self-service</td>
                <td className="p-4 text-blue-600 text-base">From Delivery Bottleneck to Key Product Differentiator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    ),
    // Step 1: Key Features of a Good Integration Platform
    (
      <Card className="p-12 mb-12">
        <h2 className="text-3xl font-bold mb-8">Key Features of a Good Integration Platform</h2>
        <div className="space-y-6 text-lg">
          <div>
            <h4 className="font-semibold text-blue-600 text-xl mb-2">Developer Experience</h4>
            <p className="text-muted-foreground text-base">
              Well-documented APIs, SDKs, sandbox environments, clear error messages, auth helpers
            </p>
              </div>
          <div>
            <h4 className="font-semibold text-green-600 text-xl mb-2">Scalability & Resilience</h4>
            <p className="text-muted-foreground text-base">
              Retry queues, rate limit handling, fault isolation, horizontal scaling
            </p>
              </div>
          <div>
            <h4 className="font-semibold text-purple-600 text-xl mb-2">Observability</h4>
            <p className="text-muted-foreground text-base">
              Centralized logging, alerting, tracing, integration health dashboards
            </p>
              </div>
          <div>
            <h4 className="font-semibold text-orange-600 text-xl mb-2">Modularity & Reuse</h4>
            <p className="text-muted-foreground text-base">
              Reusable connector framework, transformation utilities, normalized auth & config models
            </p>
              </div>
          <div>
            <h4 className="font-semibold text-red-600 text-xl mb-2">Security & Compliance</h4>
            <p className="text-muted-foreground text-base">Tokenized auth, RBAC, audit trails, customer-specific isolation</p>
            </div>
          <div>
            <h4 className="font-semibold text-yellow-600 text-xl mb-2">Customer Self-Service</h4>
            <p className="text-muted-foreground text-base">
              Easy UI for activation, configuration, status monitoring, versioning
            </p>
            </div>
          </div>
        </Card>
    ),
    // Step 2: Assessment Framework
    (
        <Card className="p-12">
          <h2 className="text-3xl font-semibold mb-8">Assessment Framework</h2>
          <div className="space-y-6">
            <div className="flex items-center p-6 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                1
              </div>
              <div>
                <h4 className="text-lg font-medium text-blue-900 mb-1">Internal Stakeholders</h4>
                <p className="text-sm text-blue-700">Interview Sales, CS, Support, Engineering</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                2
              </div>
              <div>
                <h4 className="text-lg font-medium text-green-900 mb-1">Customer Feedback</h4>
                <p className="text-sm text-green-700">Analyze support tickets & churn reasons</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-purple-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                3
              </div>
              <div>
                <h4 className="text-lg font-medium text-purple-900 mb-1">Sales Impact Analysis</h4>
                <p className="text-sm text-purple-700">Review won/lost deals & revenue impact</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-orange-50 rounded-lg">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                4
              </div>
              <div>
                <h4 className="text-lg font-medium text-orange-900 mb-1">Technical Audit</h4>
                <p className="text-sm text-orange-700">Inventory APIs, code reuse, documentation</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-red-50 rounded-lg">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                5
              </div>
              <div>
                <h4 className="text-lg font-medium text-red-900 mb-1">Process Mapping</h4>
                <p className="text-sm text-red-700">Document integration lifecycle & bottlenecks</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-yellow-50 rounded-lg">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                6
              </div>
              <div>
                <h4 className="text-lg font-medium text-yellow-900 mb-1">Market Benchmarking</h4>
                <p className="text-sm text-yellow-700">Compare to competitors & best practices</p>
              </div>
            </div>
          </div>
        </Card>
    ),
    // Step 3: Decision Framework (image)
    (
      <Card className="p-12">
        <h2 className="text-3xl font-semibold mb-8">Decision Framework</h2>
        <div className="flex justify-center items-center w-full">
          <img
            src="/decision-framework.png"
            alt="Decision Framework"
            className="max-w-full h-auto object-contain"
            style={{ maxHeight: '600px', width: '100%' }}
          />
      </div>
      </Card>
    ),
  ]

  return (
    <div className="max-w-8xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6">Strategy & Approach</h1>
        <p className="text-2xl text-muted-foreground">Our path forward</p>
          </div>
      {steps[currentStep]}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button
          onClick={() => setCurrentStep((s) => Math.min(steps.length - 1, s + 1))}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </Button>
          </div>
    </div>
  )
}

function ArchitectureSection() {
  const [activeView, setActiveView] = useState<"monolithic" | "microservices">("monolithic")

  return (
    <div className="max-w-8xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6">Product Architecture</h1>
        <p className="text-2xl text-muted-foreground">Technical foundation for scalable integrations</p>
      </div>

      {/* Architecture Toggle */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-gray-100 rounded-lg p-2">
          <button
            onClick={() => setActiveView("monolithic")}
            className={`px-8 py-4 rounded-md font-medium transition-all text-lg ${
              activeView === "monolithic" ? "bg-white text-red-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Monolithic Architecture
          </button>
          <button
            onClick={() => setActiveView("microservices")}
            className={`px-8 py-4 rounded-md font-medium transition-all text-lg ${
              activeView === "microservices" ? "bg-white text-green-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Microservices Architecture
          </button>
        </div>
      </div>

      {/* Monolithic View */}
      {activeView === "monolithic" && (
        <Card className="p-12 mb-12 transition-all duration-500 ease-in-out">
          <h2 className="text-3xl font-semibold mb-8 text-center text-red-600">Monolithic HR Platform</h2>
          <div className="flex justify-center items-center mb-12">
            <div className="w-80 h-[500px] bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex flex-col justify-around items-center text-white font-semibold shadow-xl transform hover:scale-105 transition-transform">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 m-2 w-4/5 text-center text-lg">
                Employee Management
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 m-2 w-4/5 text-center text-lg">
                Payroll Processing
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 m-2 w-4/5 text-center text-lg">
                Recruitment System
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 m-2 w-4/5 text-center text-lg">
                Performance Reviews
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 m-2 w-4/5 text-center text-lg">Time Tracking</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 m-2 w-4/5 text-center text-lg">
                Benefits Administration
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-red-50 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-red-800 mb-2">⚠️ Deployment Complexity</h4>
              <p className="text-sm text-red-600">Entire application must be deployed together, making updates risky</p>
            </div>
            <div className="p-6 bg-red-50 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-red-800 mb-2">🔧 Technology Lock-in</h4>
              <p className="text-sm text-red-600">Single technology stack limits flexibility and innovation</p>
            </div>
            <div className="p-6 bg-red-50 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-red-800 mb-2">📈 Scaling Challenges</h4>
              <p className="text-sm text-red-600">
                Must scale entire application even if only one module needs resources
              </p>
            </div>
            <div className="p-6 bg-red-50 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-red-800 mb-2">🚫 Single Point of Failure</h4>
              <p className="text-sm text-red-600">If one component fails, entire system becomes unavailable</p>
            </div>
          </div>
        </Card>
      )}

      {/* Microservices View */}
      {activeView === "microservices" && (
        <Card className="p-12 mb-12 transition-all duration-500 ease-in-out">
          <h2 className="text-3xl font-semibold mb-8 text-center text-green-600">Microservices HR Platform</h2>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-white text-center transform hover:scale-105 transition-all cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">👥 Employee Service</h3>
              <p className="text-sm opacity-90">Manages employee profiles, onboarding, and organizational structure</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-white text-center transform hover:scale-105 transition-all cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">💰 Payroll Service</h3>
              <p className="text-sm opacity-90">Handles salary calculations, tax deductions, and payment processing</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-white text-center transform hover:scale-105 transition-all cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">🎯 Recruitment Service</h3>
              <p className="text-sm opacity-90">Job postings, candidate management, and hiring workflows</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-white text-center transform hover:scale-105 transition-all cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">📊 Performance Service</h3>
              <p className="text-sm opacity-90">Goal setting, performance reviews, and feedback management</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-white text-center transform hover:scale-105 transition-all cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">⏰ Time Service</h3>
              <p className="text-sm opacity-90">Time tracking, attendance, and leave management</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-white text-center transform hover:scale-105 transition-all cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">🏥 Benefits Service</h3>
              <p className="text-sm opacity-90">Health insurance, retirement plans, and employee perks</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white text-center mb-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            <h3 className="text-xl font-semibold mb-2">🔄 Event Bus / Message Queue</h3>
            <p className="text-sm opacity-90">
              Asynchronous communication between services using events like EmployeeHired, PayrollProcessed,
              PerformanceReviewCompleted
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-3 bg-green-50 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-green-800 mb-1">🚀 Independent Deployment</h4>
              <p className="text-sm text-green-600">Deploy services independently, enabling faster releases</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-green-800 mb-1">⚡ Technology Diversity</h4>
              <p className="text-sm text-green-600">Choose optimal technologies for each service</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-green-800 mb-1">📈 Granular Scaling</h4>
              <p className="text-sm text-green-600">Scale individual services based on demand</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-green-800 mb-1">🛡️ Fault Isolation</h4>
              <p className="text-sm text-green-600">Service failures don't bring down entire system</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-green-800 mb-1">👥 Team Autonomy</h4>
              <p className="text-sm text-green-600">Different teams can own and develop services independently</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-green-800 mb-1">🔄 Event-Driven Benefits</h4>
              <p className="text-sm text-green-600">Loose coupling, better data consistency, improved resilience</p>
            </div>
          </div>
        </Card>
      )}

      {/* Comparison Table */}
      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Architecture Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2">
                <th className="text-left p-3 font-semibold">Aspect</th>
                <th className="text-left p-3 font-semibold text-red-600">Monolithic</th>
                <th className="text-left p-3 font-semibold text-green-600">Microservices + Events</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">Deployment Time</td>
                <td className="p-3 text-muted-foreground">30-60 minutes (full system)</td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    5-10 minutes (per service)
                  </span>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">Development Speed</td>
                <td className="p-3 text-muted-foreground">Slower (coordination overhead)</td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Faster (parallel development)
                  </span>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">Scalability</td>
                <td className="p-3 text-muted-foreground">Scale entire application</td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Scale individual services
                  </span>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">Availability</td>
                <td className="p-3 text-muted-foreground">99.0% (single point of failure)</td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    99.9% (fault isolation)
                  </span>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">Technology Stack</td>
                <td className="p-3 text-muted-foreground">Single stack (e.g., Java)</td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Multiple stacks optimized per service
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-medium">Data Consistency</td>
                <td className="p-3 text-muted-foreground">ACID transactions</td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
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
    <div className="max-w-8xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6">AI in Integrations</h1>
        <p className="text-2xl text-muted-foreground">Leveraging AI to enhance integration capabilities</p>
      </div>

      <Card className="p-12 mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">AI-Powered Integration Scenarios</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-blue-50 rounded-lg text-center">
            <img src="/ai-datamapping.png" alt="Intelligent Data Mapping" className="mx-auto mb-4 h-24 w-24 object-contain" />
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Intelligent Data Mapping</h4>
            <p className="text-sm text-blue-600">
              Automatically map data fields between different systems using machine learning.
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg text-center">
            <img src="/ai-errorhandling.png" alt="Automated Error Handling" className="mx-auto mb-4 h-24 w-24 object-contain" />
            <h4 className="text-lg font-semibold text-green-800 mb-2">Anomaly Detection</h4>
            <p className="text-sm text-green-600">
            Flags integration failures or unusual latency patterns before they become visible.
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg text-center">
            <img src="/ai-predictive.png" alt="Predictive Integration Performance" className="mx-auto mb-4 h-24 w-24 object-contain" />
            <h4 className="text-lg font-semibold text-purple-800 mb-2">Log Intelligence</h4>
            <p className="text-sm text-purple-600">
            Parses logs and explains errors in plain language for support or end-users.
            </p>
          </div>
          <div className="p-6 bg-orange-50 rounded-lg text-center">
            <img src="/ai-naturallanguage.png" alt="Natural Language Integration" className="mx-auto mb-4 h-24 w-24 object-contain" />
            <h4 className="text-lg font-semibold text-orange-800 mb-2">Copilot</h4>
            <p className="text-sm text-orange-600">
              Enable users to define integrations using natural language commands.
            </p>
          </div>
          <div className="p-6 bg-red-50 rounded-lg text-center">
            <img src="/ai-security.png" alt="AI-Driven Security" className="mx-auto mb-4 h-24 w-24 object-contain" />
            <h4 className="text-lg font-semibold text-red-800 mb-2">Chat Interfaces</h4>
            <p className="text-sm text-red-600">Enables users to ask questions about APIs, integrations, or create flows via chatbot.</p>
          </div>
          <div className="p-6 bg-yellow-50 rounded-lg text-center">
            <img src="/ai-recommendations.png" alt="Smart Integration Recommendations" className="mx-auto mb-4 h-24 w-24 object-contain" />
            <h4 className="text-lg font-semibold text-yellow-800 mb-2">Smart Integration Recommendations</h4>
            <p className="text-sm text-yellow-600">
              Recommend relevant integrations based on user behavior and system data.
            </p>
          </div>
        </div>
      </Card>
      <div className="my-16">
        <h3 className="text-2xl font-bold mb-6 text-center">See AI in action:</h3>
        <Card className="p-8 mb-12">
          <h4 className="text-xl font-semibold mb-6 text-center text-blue-600">Data Mapping Demo</h4>
          <DataMappingDemo />
        </Card>
        <div className="my-12 border-t-4 border-gray-200" />
        <Card className="p-8">
          <h4 className="text-xl font-semibold mb-6 text-center text-purple-600">Log Intelligence Demo</h4>
          <LogIntelligenceDemo />
        </Card>
      </div>
    </div>
  )
}

function MarketplaceSection() {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="text-center mb-24">
        <h1 className="text-8xl font-bold mb-8">Integrations Marketplace</h1>
        <p className="text-4xl text-muted-foreground">A central hub for discovering and deploying integrations</p>
      </div>

      {/* Marketplace Demo Link */}
      <div className="flex justify-center mb-16">
        <Link href="/marketplace" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg" className="text-xl px-8 py-4">Marketplace Demo</Button>
        </Link>
      </div>

      <Card className="p-16">
        <h2 className="text-5xl font-semibold mb-12 text-center">Key Features and Benefits</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 bg-blue-50 rounded-lg text-center">
            <h4 className="text-2xl font-semibold text-blue-800 mb-4">Visibility and Discoverability</h4>
            <p className="text-lg text-blue-600">Makes it easy for customers to discover and explore integrations.</p>
          </div>
          <div className="p-8 bg-green-50 rounded-lg text-center">
            <h4 className="text-2xl font-semibold text-green-800 mb-4">Self-service</h4>
            <p className="text-lg text-green-600">Customers can easily deploy integrations with a few clicks or request support.</p>
          </div>
          <div className="p-8 bg-purple-50 rounded-lg text-center">
            <h4 className="text-2xl font-semibold text-purple-800 mb-4">Centralized Management</h4>
            <p className="text-lg text-purple-600">Manage and monitor integrations from a central dashboard.</p>
          </div>
          <div className="p-8 bg-orange-50 rounded-lg text-center">
            <h4 className="text-2xl font-semibold text-orange-800 mb-4">Improved Support</h4>
            <p className="text-lg text-orange-600">Faster, contextual support through chatbots, partners, community.</p>
          </div>
          <div className="p-8 bg-red-50 rounded-lg text-center">
            <h4 className="text-2xl font-semibold text-red-800 mb-4">Improved Business KPIs</h4>
            <p className="text-lg text-red-600">
              Revenue <span className="text-green-600">↑</span>, CSAT <span className="text-green-600">↑</span>, Integration costs <span className="text-red-600">↓</span>.
            </p>
          </div>
          <div className="p-8 bg-yellow-50 rounded-lg text-center">
            <h4 className="text-2xl font-semibold text-yellow-800 mb-4">Ecosystem Engagement</h4>
            <p className="text-lg text-yellow-600">Ecosystem of TechCorp teams, partners, developers, and customers.</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function PartnerSection() {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6">Partner Program</h1>
        <p className="text-2xl text-muted-foreground">Strategic business outcomes enabled through our partner ecosystem</p>
      </div>

      <Card className="p-12 mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Business Outcomes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Faster Customer Value</h4>
            <p className="text-sm text-blue-600">Niche and regional integrations available without internal lift</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg">
            <h4 className="text-lg font-semibold text-green-800 mb-2">More Integrations, Less Cost</h4>
            <p className="text-sm text-green-600">Partners scale horizontally while internal team focuses on core use cases</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <h4 className="text-lg font-semibold text-purple-800 mb-2">Stickier Ecosystem</h4>
            <p className="text-sm text-purple-600">Deep integrations increase customer retention and create switching friction</p>
          </div>
          <div className="p-6 bg-orange-50 rounded-lg">
            <h4 className="text-lg font-semibold text-orange-800 mb-2">Platform Positioning</h4>
            <p className="text-sm text-orange-600">Reinforces TechCorp as a hub, not a tool — a system of record with gravity</p>
          </div>
          <div className="p-6 bg-red-50 rounded-lg">
            <h4 className="text-lg font-semibold text-red-800 mb-2">GTM Leverage</h4>
            <p className="text-sm text-red-600">Co-marketing, referrals, channel leads from integration partners</p>
          </div>
        </div>
      </Card>

      <Card className="p-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Partner Program Enablers</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Technical Enablement</h4>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>• Partner portal with docs, SDKs, sandbox</li>
              <li>• Linting/testing tools for submissions</li>
            </ul>
          </div>
          <div className="p-6 bg-green-50 rounded-lg">
            <h4 className="text-lg font-semibold text-green-800 mb-2">Certification</h4>
            <ul className="text-sm text-green-600 space-y-1">
              <li>• Tiered integration quality standards</li>
              <li>• Bronze, Silver, Gold certification levels</li>
            </ul>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <h4 className="text-lg font-semibold text-purple-800 mb-2">GTM Enablement</h4>
            <ul className="text-sm text-purple-600 space-y-1">
              <li>• Marketplace listings</li>
              <li>• Co-branded assets, launch playbooks</li>
            </ul>
          </div>
          <div className="p-6 bg-orange-50 rounded-lg">
            <h4 className="text-lg font-semibold text-orange-800 mb-2">Support Structure</h4>
            <ul className="text-sm text-orange-600 space-y-1">
              <li>• Dedicated partner success manager</li>
              <li>• Escalation workflows</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}

function DeveloperSection() {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6">Developer Experience</h1>
        <p className="text-2xl text-muted-foreground">
          Technical capabilities that accelerate integration development and reduce friction
        </p>
      </div>

      <Card className="p-12 mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Developer Experience Capabilities</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Self-Serve Developer Portal</h4>
            <p className="text-sm text-blue-600">One-stop shop for docs, API keys, SDKs, changelogs, status updates</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg">
            <h4 className="text-lg font-semibold text-green-800 mb-2">Robust Documentation</h4>
            <p className="text-sm text-green-600">Clear API definitions, real-world examples, edge case handling</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <h4 className="text-lg font-semibold text-purple-800 mb-2">Sandbox Environment</h4>
            <p className="text-sm text-purple-600">Safe space to test integrations without affecting production</p>
          </div>
          <div className="p-6 bg-orange-50 rounded-lg">
            <h4 className="text-lg font-semibold text-orange-800 mb-2">Pre-Built SDKs & CLI Tools</h4>
            <p className="text-sm text-orange-600">Reduce integration lift for partners; speed up delivery</p>
          </div>
          <div className="p-6 bg-red-50 rounded-lg">
            <h4 className="text-lg font-semibold text-red-800 mb-2">Linting / Validator Tools</h4>
            <p className="text-sm text-red-600">Catch errors early and enforce standards for marketplace certification</p>
          </div>
          <div className="p-6 bg-yellow-50 rounded-lg">
            <h4 className="text-lg font-semibold text-yellow-800 mb-2">Webhooks & Event Simulators</h4>
            <p className="text-sm text-yellow-600">Let devs test async workflows without full system access</p>
          </div>
        </div>
      </Card>

      <Card className="p-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Why Developer Experience Matters</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Accelerated Development</h4>
            <p className="text-sm text-blue-600">Self-serve tools reduce time from idea to working integration</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg">
            <h4 className="text-lg font-semibold text-green-800 mb-2">Higher Quality Integrations</h4>
            <p className="text-sm text-green-600">Testing tools and validation catch issues before production</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <h4 className="text-lg font-semibold text-purple-800 mb-2">Reduced Support Burden</h4>
            <p className="text-sm text-purple-600">Clear docs and error messages minimize developer confusion</p>
          </div>
          <div className="p-6 bg-orange-50 rounded-lg">
            <h4 className="text-lg font-semibold text-orange-800 mb-2">Partner Success</h4>
            <p className="text-sm text-orange-600">Better tools lead to more successful partner integrations</p>
          </div>
          <div className="p-6 bg-red-50 rounded-lg">
            <h4 className="text-lg font-semibold text-red-800 mb-2">Ecosystem Growth</h4>
            <p className="text-sm text-red-600">Great DX attracts more developers to build on the platform</p>
          </div>
          <div className="p-6 bg-yellow-50 rounded-lg">
            <h4 className="text-lg font-semibold text-yellow-800 mb-2">Telemetry & Debug Logs</h4>
            <p className="text-sm text-yellow-600">Developers can see logs, error messages, and health status</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function ExecutionSection() {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="text-center mb-24">
        <h1 className="text-8xl font-bold mb-8">Implementation Plan</h1>
        <p className="text-4xl text-muted-foreground">Detailed execution strategy and timeline</p>
      </div>

      <Card className="p-16 mb-16">
        <h2 className="text-5xl font-semibold mb-12 text-center">Phase 1: Foundation (Months 1-3)</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 bg-blue-50 rounded-lg">
            <h4 className="text-2xl font-semibold text-blue-800 mb-4">Assessment & Planning</h4>
            <ul className="text-lg text-blue-600 space-y-2">
              <li>• Complete stakeholder interviews</li>
              <li>• Technical architecture audit</li>
              <li>• Competitive analysis</li>
              <li>• Resource planning</li>
            </ul>
          </div>
          <div className="p-8 bg-green-50 rounded-lg">
            <h4 className="text-2xl font-semibold text-green-800 mb-4">Team Formation</h4>
            <ul className="text-lg text-green-600 space-y-2">
              <li>• Hire integration platform lead</li>
              <li>• Form cross-functional team</li>
              <li>• Define roles & responsibilities</li>
              <li>• Establish governance model</li>
            </ul>
          </div>
          <div className="p-8 bg-purple-50 rounded-lg">
            <h4 className="text-2xl font-semibold text-purple-800 mb-4">Quick Wins</h4>
            <ul className="text-lg text-purple-600 space-y-2">
              <li>• Standardize existing APIs</li>
              <li>• Improve documentation</li>
              <li>• Implement basic telemetry</li>
              <li>• Create integration catalog</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-16 mb-16">
        <h2 className="text-5xl font-semibold mb-12 text-center">Phase 2: Platform Development (Months 4-9)</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 bg-orange-50 rounded-lg">
            <h4 className="text-2xl font-semibold text-orange-800 mb-4">Core Platform</h4>
            <ul className="text-lg text-orange-600 space-y-2">
              <li>• Build integration framework</li>
              <li>• Implement connector SDK</li>
              <li>• Create developer portal</li>
              <li>• Set up CI/CD pipelines</li>
            </ul>
          </div>
          <div className="p-8 bg-red-50 rounded-lg">
            <h4 className="text-2xl font-semibold text-red-800 mb-4">First Integrations</h4>
            <ul className="text-lg text-red-600 space-y-2">
              <li>• Migrate 3 key integrations</li>
              <li>• Build 2 new partner integrations</li>
              <li>• Implement monitoring & alerting</li>
              <li>• Create support processes</li>
            </ul>
          </div>
          <div className="p-8 bg-yellow-50 rounded-lg">
            <h4 className="text-2xl font-semibold text-yellow-800 mb-4">Marketplace MVP</h4>
            <ul className="text-lg text-yellow-600 space-y-2">
              <li>• Build marketplace UI</li>
              <li>• Implement app discovery</li>
              <li>• Create installation flows</li>
              <li>• Add basic analytics</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-16 mb-16">
        <h2 className="text-5xl font-semibold mb-12 text-center">Phase 3: Scale & Optimize (Months 10-18)</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 bg-indigo-50 rounded-lg">
            <h4 className="text-2xl font-semibold text-indigo-800 mb-4">AI Integration</h4>
            <ul className="text-lg text-indigo-600 space-y-2">
              <li>• Implement smart data mapping</li>
              <li>• Add predictive analytics</li>
              <li>• Create recommendation engine</li>
              <li>• Build automated testing</li>
            </ul>
          </div>
          <div className="p-8 bg-pink-50 rounded-lg">
            <h4 className="text-2xl font-semibold text-pink-800 mb-4">Partner Ecosystem</h4>
            <ul className="text-lg text-pink-600 space-y-2">
              <li>• Launch partner program</li>
              <li>• Onboard 10+ partners</li>
              <li>• Create certification process</li>
              <li>• Implement revenue sharing</li>
            </ul>
          </div>
          <div className="p-8 bg-teal-50 rounded-lg">
            <h4 className="text-2xl font-semibold text-teal-800 mb-4">Self-Service</h4>
            <ul className="text-lg text-teal-600 space-y-2">
              <li>• Enable customer self-service</li>
              <li>• Add no-code integration builder</li>
              <li>• Implement usage analytics</li>
              <li>• Create success metrics dashboard</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Key Milestones card moved from RoadmapSection */}
      <Card className="p-16 mt-24">
        <h2 className="text-5xl font-semibold mb-12 text-center">Key Milestones</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center p-8 bg-blue-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-600 mb-4">Month 3</div>
            <p className="text-xl text-blue-700">Foundation Complete</p>
          </div>
          <div className="text-center p-8 bg-green-50 rounded-lg">
            <div className="text-4xl font-bold text-green-600 mb-4">Month 9</div>
            <p className="text-xl text-green-700">Platform MVP Live</p>
          </div>
          <div className="text-center p-8 bg-purple-50 rounded-lg">
            <div className="text-4xl font-bold text-purple-600 mb-4">Month 15</div>
            <p className="text-xl text-purple-700">AI Features Deployed</p>
          </div>
          <div className="text-center p-8 bg-orange-50 rounded-lg">
            <div className="text-4xl font-bold text-orange-600 mb-4">Month 18</div>
            <p className="text-xl text-orange-700">Self-Service Ready</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function KPIsSection() {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="text-center mb-24">
        <h1 className="text-8xl font-bold mb-8">KPIs & Success Metrics</h1>
        <p className="text-4xl text-muted-foreground">Measuring our progress and impact</p>
      </div>
    
      {/* Embedded KPI Dashboard at the top */}
      <iframe
        src="/integrations"
        title="KPI Dashboard"
        className="w-full h-[1000px] rounded-lg border shadow-lg mb-16"
        style={{ minHeight: '1000px' }}
      />

      <div className="grid gap-12 lg:grid-cols-2 mb-16">
        <Card className="p-12">
          <h2 className="text-4xl font-semibold mb-8 text-blue-600">Business Impact KPIs</h2>
          <div className="space-y-8">
            <div className="flex justify-between items-center p-8 bg-blue-50 rounded-lg">
              <div>
                <h4 className="text-2xl font-semibold">Integration Adoption Rate</h4>
                <p className="text-lg text-muted-foreground">% of customers with active integrations</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">80%</div>
                <div className="text-sm text-green-600">Target by Month 12</div>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <div>
                <h4 className="font-semibold">Time to Integrate</h4>
                <p className="text-sm text-muted-foreground">Average time from request to go-live</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">2-4 weeks</div>
                <div className="text-sm text-green-600">Reduce from 6-9 months</div>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
              <div>
                <h4 className="font-semibold">Customer Satisfaction</h4>
                <p className="text-sm text-muted-foreground">Average rating from customer surveys</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-600">4.5+</div>
                <div className="text-sm text-purple-600">Target rating</div>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
              <div>
                <h4 className="font-semibold">Revenue Impact</h4>
                <p className="text-sm text-muted-foreground">Additional ARR generated from integrations</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-orange-600">$2M+</div>
                <div className="text-sm text-orange-600">Target ARR</div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-green-600">Technical Performance KPIs</h2>
          <div className="space-y-6">
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
              <div>
                <h4 className="font-semibold">API Response Time</h4>
                <p className="text-sm text-muted-foreground">Average response time for API calls</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">&lt;200ms</div>
                <div className="text-sm text-green-600">Target average</div>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <div>
                <h4 className="font-semibold">System Uptime</h4>
                <p className="text-sm text-muted-foreground">Percentage of time the system is available</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-green-600">Target uptime</div>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
              <div>
                <h4 className="font-semibold">Error Rate</h4>
                <p className="text-sm text-muted-foreground">Percentage of API calls that result in errors</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-600">&lt;0.1%</div>
                <div className="text-sm text-purple-600">Target error rate</div>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
              <div>
                <h4 className="font-semibold">Developer Onboarding</h4>
                <p className="text-sm text-muted-foreground">Time to first successful API call</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-orange-600">&lt;1 day</div>
                <div className="text-sm text-orange-600">Target onboarding time</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

function SummarySection() {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6">Summary & Impact</h1>
        <p className="text-2xl text-muted-foreground">Recap of our integration strategy and its benefits</p>
      </div>

      <Card className="p-12 mb-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <h2 className="text-3xl font-semibold mb-8 text-center">The Integration Imperative</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-blue-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Complexity of SaaS Ecosystem</h4>
            <p className="text-sm text-blue-600">Companies use 100–300 SaaS tools, creating integration challenges and data silos</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-green-800 mb-2">User Experience</h4>
            <p className="text-sm text-green-600">End-to-end automated workflows deliver frictionless user experiences</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-purple-800 mb-2">Customer Engagement & Satisfaction</h4>
            <p className="text-sm text-purple-600">More integrations = higher engagement, increase in LTV & retention</p>
          </div>
        </div>
      </Card>

      <Card className="p-12 mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Key Takeaways</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-blue-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Integration as a Product</h4>
            <p className="text-sm text-blue-600">Rebranding integrations as a core product offering</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-green-800 mb-2">Microservices Architecture</h4>
            <p className="text-sm text-green-600">Adopting a microservices architecture for scalable integrations</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-purple-800 mb-2">AI-Powered Integrations</h4>
            <p className="text-sm text-purple-600">Leveraging AI to enhance integration capabilities</p>
          </div>
          <div className="p-6 bg-orange-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-orange-800 mb-2">Integrations Marketplace</h4>
            <p className="text-sm text-orange-600">Creating a central hub for discovering and deploying integrations</p>
          </div>
          <div className="p-6 bg-red-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-red-800 mb-2">Partner Program</h4>
            <p className="text-sm text-red-600">Enabling partners to build and sell integrations</p>
          </div>
          <div className="p-6 bg-yellow-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-yellow-800 mb-2">Developer Experience</h4>
            <p className="text-sm text-yellow-600">Providing a great developer experience for building integrations</p>
          </div>
        </div>
      </Card>

      <Card className="p-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Expected Impact</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-blue-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Increased Revenue</h4>
            <p className="text-sm text-blue-600">Generate additional revenue from integration sales</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-green-800 mb-2">Reduced Costs</h4>
            <p className="text-sm text-green-600">Lower integration costs and improve ROI</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-purple-800 mb-2">Faster Time-to-Market</h4>
            <p className="text-sm text-purple-600">Accelerate integration projects and deliver value quickly</p>
          </div>
          <div className="p-6 bg-orange-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-orange-800 mb-2">Improved Customer Satisfaction</h4>
            <p className="text-sm text-orange-600">Provide a seamless integration experience for our customers</p>
          </div>
          <div className="p-6 bg-red-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-red-800 mb-2">Increased Ecosystem Engagement</h4>
            <p className="text-sm text-red-600">Engage with our ecosystem of partners and developers</p>
          </div>
          <div className="p-6 bg-yellow-50 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-yellow-800 mb-2">Better Brand Awareness</h4>
            <p className="text-sm text-yellow-600">Increase brand awareness and reach new customers</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function QuestionsSection() {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="text-center mb-24">
        <h1 className="text-8xl font-bold mb-8">Questions & Discussion</h1>
        <p className="text-4xl text-muted-foreground">Open forum for questions and discussion</p>
      </div>

      <Card className="p-16">
        <div className="text-center">
          <h2 className="text-6xl font-bold mb-8">Thank You</h2>
          <p className="text-3xl text-muted-foreground mb-12">I appreciate your time and attention.</p>
          <p className="text-3xl text-muted-foreground mb-12">Let's open the floor for any questions or discussion.</p>
        </div>
      </Card>
    </div>
  )
}
