import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { StatsStrip } from "@/components/StatsStrip";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/site.config";
import { DollarSign, Shield, Camera, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const iconMap = {
  DollarSign,
  Shield,
  Camera,
  FileText,
};

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Value Props Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Camp Haven Rentals?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in off-grid and hard-to-rent properties, providing guaranteed income with boutique-level care.
            </p>
          </div>
          
          {/* Photo Showcase */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/Joshua-Tree-Airbnb-Photographer.jpg.jpg"
                  alt="Professional Staging"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white font-medium text-lg">Professional Staging</span>
                </div>
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/3c267e60-7c19-40f0-92c6-960144107e6c.png"
                  alt="Maintenance Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white font-medium text-lg">Maintenance Team</span>
                </div>
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/Moroccan-Sol-Airbnb-Joshua-Tree-Mikeal-Beland-10-3.webp"
                  alt="Guest Experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white font-medium text-lg">Guest Experience</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.valueProps.map((prop, index) => {
              const IconComponent = iconMap[prop.icon as keyof typeof iconMap];
              return (
                <FeatureCard
                  key={index}
                  title={prop.title}
                  description={prop.description}
                  icon={IconComponent}
                />
              );
            })}
          </div>
        </div>
      </section>

      <StatsStrip />
      
      {/* Owner Portal Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Owner Portal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access your property dashboard, payments, contracts, and documentation all in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rent Payments</h3>
              <p className="text-gray-600">View monthly statements, payment history, and profit share bonuses</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Property Dashboard</h3>
              <p className="text-gray-600">Real-time occupancy rates, performance metrics, and property status</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contract Management</h3>
              <p className="text-gray-600">Sign contracts, view lease terms, and manage documentation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication</h3>
              <p className="text-gray-600">Direct messaging with our team and maintenance request tracking</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/owner-portal/login">
              <Button size="lg" className="text-lg px-8 py-6">
                Access Owner Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
}
