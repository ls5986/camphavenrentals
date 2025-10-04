import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Star } from "lucide-react"

interface Market {
  readonly name: string
  readonly description: string
  readonly features: readonly string[]
}

interface MarketsGridProps {
  markets: readonly Market[]
  title: string
  isPrimary?: boolean
}

export function MarketsGrid({ markets, title, isPrimary = false }: MarketsGridProps) {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        {isPrimary && (
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our primary markets where we have the most experience and success.
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {markets.map((market, index) => (
          <Card key={index} className={`h-full ${isPrimary ? 'border-amber-200 bg-amber-50/30' : ''}`}>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-amber-600" />
                <CardTitle className="text-xl">{market.name}</CardTitle>
                {isPrimary && <Star className="h-5 w-5 text-amber-500 fill-current" />}
              </div>
              <p className="text-gray-600 text-sm">{market.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                <ul className="space-y-1">
                  {market.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
