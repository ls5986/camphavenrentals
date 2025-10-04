import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/site.config"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20 lg:py-32">
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-200/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {siteConfig.tagline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">Email Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/guarantee">Our Guarantee</Link>
              </Button>
            </div>
          </div>
          
          {/* Property Photos */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Joshua-Tree-Airbnb-Photographer.jpg.jpg"
                    alt="Joshua Tree Property"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/DJI_0600_16a842189fab06b69ec8ba68d296d776.jpg"
                    alt="Desert View"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Moroccan-Sol-Airbnb-Joshua-Tree-Mikeal-Beland-10-3.webp"
                    alt="Moroccan Sol Property"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/C8E386CA-E68F-E483-2C9C8C50BA8B4DEE.jpg"
                    alt="Mountain Retreat"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
