import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/site.config"

export function Timeline() {
  return (
    <div className="space-y-8">
      {siteConfig.timeline.map((step, index) => (
        <Card key={index} className="relative">
          <div className="absolute left-8 top-8 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {index + 1}
          </div>
          <CardHeader className="pl-20">
            <CardTitle className="text-xl">{step.week}</CardTitle>
            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
          </CardHeader>
          <CardContent className="pl-20">
            <p className="text-gray-600">{step.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
