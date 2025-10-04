import { Shield, CheckCircle, FileText, Users } from "lucide-react"

export function StatsStrip() {
  const stats = [
    {
      icon: Shield,
      label: "Licensed & Insured",
      description: "Full compliance coverage"
    },
    {
      icon: CheckCircle,
      label: "Guaranteed Rent",
      description: "Fixed monthly income"
    },
    {
      icon: FileText,
      label: "Documented Inspections",
      description: "Before & after each stay"
    },
    {
      icon: Users,
      label: "Owner-Friendly Terms",
      description: "1-3 year leases with break clause"
    }
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            &ldquo;Licensed, insured, compliance-first. We handle it all — rent, repairs, and risk.&rdquo;
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <stat.icon className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
