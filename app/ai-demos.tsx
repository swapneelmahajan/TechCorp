import React, { useState, useEffect } from "react"

// --- Data Mapping Demo ---
export function DataMappingDemo() {
  const [showMapping, setShowMapping] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  
  useEffect(() => {
    console.log("DataMappingDemo component mounted")
  }, [])
  
  const source = {
    employee_id: "EMP-2024-001",
    first_name: "John",
    last_name: "Doe",
    email_address: "john.doe@company.com",
    phone_number: "+1-555-0123",
    hire_date: "2024-01-15",
    department: "Engineering",
    job_title: "Senior Software Engineer",
    salary: 95000,
    manager_id: "EMP-2023-045",
    location: "San Francisco, CA",
    employment_status: "active"
  }
  
  const target = {
    user_id: "",
    given_name: "",
    family_name: "",
    primary_email: "",
    contact_phone: "",
    start_date: "",
    team_name: "",
    position: "",
    annual_compensation: "",
    supervisor_id: "",
    office_location: "",
    status: ""
  }
  
  // More complex mapping with transformations
  const mapping = [
    { source: "employee_id", target: "user_id", transform: "Direct mapping" },
    { source: "first_name", target: "given_name", transform: "Direct mapping" },
    { source: "last_name", target: "family_name", transform: "Direct mapping" },
    { source: "email_address", target: "primary_email", transform: "Direct mapping" },
    { source: "phone_number", target: "contact_phone", transform: "Format standardization" },
    { source: "hire_date", target: "start_date", transform: "Date format conversion" },
    { source: "department", target: "team_name", transform: "Field name mapping" },
    { source: "job_title", target: "position", transform: "Direct mapping" },
    { source: "salary", target: "annual_compensation", transform: "Currency formatting" },
    { source: "manager_id", target: "supervisor_id", transform: "Direct mapping" },
    { source: "location", target: "office_location", transform: "Location parsing" },
    { source: "employment_status", target: "status", transform: "Status normalization" }
  ]

  const handleMapFields = () => {
    console.log("Mapping fields...")
    setIsAnimating(true)
    setTimeout(() => {
      setShowMapping(true)
      setIsAnimating(false)
      console.log("Fields mapped successfully")
    }, 500)
  }

  const handleReset = () => {
    console.log("Resetting demo...")
    setShowMapping(false)
    setIsAnimating(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto border-2 border-blue-200">
      <h3 className="text-xl font-bold mb-4 text-blue-700">Automated Data Mapping Demo</h3>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
        {/* Source */}
        <div className="w-full lg:w-1/2">
          <h4 className="font-semibold mb-2 text-blue-800">Source System (HRIS)</h4>
          <pre className="bg-blue-50 rounded p-4 text-xs overflow-auto max-h-96">{JSON.stringify(source, null, 2)}</pre>
        </div>
        {/* Target */}
        <div className="w-full lg:w-1/2">
          <h4 className="font-semibold mb-2 text-green-800">Target System (CRM)</h4>
          <pre className="bg-green-50 rounded p-4 text-xs overflow-auto max-h-96">{JSON.stringify(target, null, 2)}</pre>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
          onClick={handleMapFields}
          disabled={showMapping || isAnimating}
        >
          {isAnimating ? "Mapping..." : showMapping ? "Fields Mapped!" : "Map Fields"}
        </button>
        {showMapping && (
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
            onClick={handleReset}
          >
            Reset Demo
          </button>
        )}
      </div>
      {showMapping && (
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-3">AI-Generated Field Mappings:</h4>
          <div className="grid gap-2 text-sm">
            {mapping.map((m, index) => (
              <div key={m.source} className="flex items-center justify-between p-2 bg-white rounded border">
                <div className="flex items-center gap-2">
                  <span className="font-mono bg-blue-100 px-2 py-1 rounded text-xs">{m.source}</span>
                  <span className="text-gray-500">→</span>
                  <span className="font-mono bg-green-100 px-2 py-1 rounded text-xs">{m.target}</span>
                </div>
                <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">{m.transform}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// --- Log Intelligence Demo ---
const demoLogs = `2024-06-01 12:00:01 ERROR: Database connection failed - Connection timeout after 30 seconds
2024-06-01 12:00:02 INFO: Attempting to reconnect to database cluster
2024-06-01 12:00:03 WARN: High memory usage detected: 87% of available RAM
2024-06-01 12:00:04 ERROR: Authentication failed for user 'admin' - Invalid credentials or expired token
2024-06-01 12:00:05 INFO: Rate limit exceeded for API endpoint /api/v1/users - 429 Too Many Requests
2024-06-01 12:00:06 ERROR: File upload failed - Disk space insufficient (2.1GB available, 5.0GB required)
2024-06-01 12:00:07 WARN: SSL certificate will expire in 7 days
2024-06-01 12:00:08 ERROR: Integration sync failed - Salesforce API returned 500 Internal Server Error
2024-06-01 12:00:09 INFO: Process completed with 3 errors and 2 warnings`

function explainLog(log: string) {
  const lines = log.split('\n')
  let analysis = "AI Analysis Results:\n\n"
  let errorCount = 0
  let warningCount = 0
  let criticalIssues: string[] = []

  lines.forEach((line, index) => {
    if (line.includes("ERROR:")) {
      errorCount++
      if (line.includes("Database connection failed")) {
        criticalIssues.push(`Line ${index + 1}: Critical database connectivity issue. Check network configuration and database server status.`)
      } else if (line.includes("Authentication failed")) {
        criticalIssues.push(`Line ${index + 1}: Security alert - authentication failure. Verify credentials and check for potential security breach.`)
      } else if (line.includes("File upload failed")) {
        criticalIssues.push(`Line ${index + 1}: Storage issue - insufficient disk space. Immediate action required to free up space.`)
      } else if (line.includes("Integration sync failed")) {
        criticalIssues.push(`Line ${index + 1}: Third-party integration failure. Check Salesforce API status and connection.`)
      }
    } else if (line.includes("WARN:")) {
      warningCount++
    }
  })

  analysis += `📊 Summary: ${errorCount} errors, ${warningCount} warnings detected\n\n`
  
  if (criticalIssues.length > 0) {
    analysis += "🚨 Critical Issues Requiring Immediate Attention:\n"
    criticalIssues.forEach(issue => {
      analysis += `• ${issue}\n`
    })
    analysis += "\n"
  }

  if (log.includes("Rate limit exceeded")) {
    analysis += "⚠️ Performance Issue: API rate limiting detected. Consider implementing request throttling.\n"
  }
  
  if (log.includes("SSL certificate")) {
    analysis += "🔒 Security Alert: SSL certificate expiring soon. Renew certificate immediately.\n"
  }

  if (log.includes("High memory usage")) {
    analysis += "💾 Resource Warning: High memory usage detected. Monitor system resources.\n"
  }

  return analysis
}

export function LogIntelligenceDemo() {
  const [log, setLog] = useState(demoLogs)
  const [explanation, setExplanation] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  useEffect(() => {
    console.log("LogIntelligenceDemo component mounted")
  }, [])

  const handleExplain = () => {
    console.log("Analyzing logs...")
    setIsAnalyzing(true)
    setTimeout(() => {
      setExplanation(explainLog(log))
      setIsAnalyzing(false)
      console.log("Log analysis complete")
    }, 1000)
  }

  const handleReset = () => {
    console.log("Resetting log demo...")
    setLog(demoLogs)
    setExplanation("")
    setIsAnalyzing(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto border-2 border-purple-200">
      <h3 className="text-xl font-bold mb-4 text-purple-700">Log Intelligence Demo</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          System Logs (Edit to test different scenarios):
        </label>
        <textarea
          className="w-full h-40 p-3 border rounded font-mono text-xs bg-gray-50"
          value={log}
          onChange={e => setLog(e.target.value)}
          placeholder="Enter log entries to analyze..."
        />
      </div>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition disabled:opacity-50"
          onClick={handleExplain}
          disabled={isAnalyzing}
        >
          {isAnalyzing ? "Analyzing..." : "Analyze Logs"}
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          onClick={handleReset}
        >
          Reset Demo
        </button>
      </div>
      {explanation && (
        <div className="mt-4 p-4 bg-purple-50 rounded text-purple-800 font-medium">
          <pre className="whitespace-pre-wrap text-sm">{explanation}</pre>
        </div>
      )}
    </div>
  )
} 