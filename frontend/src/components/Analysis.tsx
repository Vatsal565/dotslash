'use client'
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Building2, Globe, MapPin, Briefcase, BarChart2, ArrowLeft } from "lucide-react";

const companyData = {
  company: {
    official_name: "Avadh Group",
    industry_type: "Real Estate and Construction",
    headquarters: "Surat, India",
    key_products_services: [
      "Development of residential and commercial projects (apartments, villas, office spaces)",
      "Property management",
      "Interior design",
      "Construction",
    ],
    website: "Not Available",
  },
  competitors: [
    {
      name: "Sangini Group",
      industry_type: "Real Estate and Construction",
      headquarters: "Surat, India",
      key_products_services: ["Residential and commercial real estate development"],
    },
    {
      name: "Rajhans Group",
      industry_type: "Real Estate and Construction",
      headquarters: "Surat, India",
      key_products_services: ["Property development", "Interior design", "Construction"],
    },
    {
      name: "JRD Group",
      industry_type: "Real Estate and Construction",
      headquarters: "Surat, India",
      key_products_services: ["Development of residential and commercial projects (apartments, villas, office spaces)"],
    },
    {
      name: "BK Jewels",
      industry_type: "Real Estate and Construction",
      headquarters: "Surat, India",
      key_products_services: ["Residential and commercial real estate development (apartments, villas, office spaces)"],
    },
  ].slice(0, 4)
};

const SWOTAnalysis = () => (
  <div className="lg:w-2/3 w-full animate-slide-in-right">
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { 
          title: 'Strengths', 
          color: 'from-green-50 to-green-100', 
          textColor: 'text-green-800', 
          items: [
            'Strong local market presence in Surat',
            'Diversified service portfolio',
            'Established brand reputation',
            'Integrated construction capabilities'
          ]
        },
        { 
          title: 'Weaknesses', 
          color: 'from-red-50 to-red-100', 
          textColor: 'text-red-800', 
          items: [
            'Limited geographical presence',
            'High dependence on local market',
            'Resource intensive operations',
            'Market volatility sensitivity'
          ]
        },
        { 
          title: 'Opportunities', 
          color: 'from-blue-50 to-blue-100', 
          textColor: 'text-blue-800', 
          items: [
            'Expanding to new regions',
            'Growing demand for premium housing',
            'Technology integration potential',
            'Green building initiatives'
          ]
        },
        { 
          title: 'Threats', 
          color: 'from-yellow-50 to-yellow-100', 
          textColor: 'text-yellow-800', 
          items: [
            'Increasing competition',
            'Regulatory changes',
            'Economic fluctuations',
            'Rising construction costs'
          ]
        }
      ].map((section, index) => (
        <Card 
          key={index}
          className={`transform hover:scale-105 transition-all duration-300 shadow-lg bg-gradient-to-br ${section.color} hover:shadow-xl`}
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <CardHeader className="p-4">
            <CardTitle className={`text-xl font-bold flex items-center gap-3 ${section.textColor}`}>
              {section.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-2 group">
                  <div className={`w-2 h-2 rounded-full bg-${section.textColor.split('-')[1]}-500`}></div>
                  <span className={`${section.textColor} transform group-hover:translate-x-2 transition-transform`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const CompetitorCards = () => (
  <div className="lg:w-2/3 w-full animate-slide-in-right">
    <div className="flex flex-col">
      <div className="grid md:grid-cols-2 gap-6 flex-grow">
        {companyData.competitors.map((competitor, index) => {
          const isLevel2 = index % 1 === 0;
          
          return (
            <Card 
              key={index} 
              className={`transform hover:scale-102 transition-all duration-300 shadow-lg animate-fade-in ${
                isLevel2 
                  ? 'bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-orange-200' 
                  : 'bg-gradient-to-br from-gray-900 to-black hover:shadow-gray-800'
              }`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <CardHeader className="p-4">
                <CardTitle className={`text-xl font-bold flex items-center gap-3 ${
                  isLevel2 ? 'text-orange-800' : 'text-white'
                }`}>
                  <Building2 className={isLevel2 ? 'text-orange-500' : 'text-white'} />
                  {competitor.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="">
                <div className="space-y-4">
                  <div className="group">
                    <h3 className={`font-semibold text-lg mb-1 ${
                      isLevel2 ? 'text-orange-800' : 'text-gray-200'
                    }`}>
                      Industry Type
                    </h3>
                    <p className={`transform group-hover:translate-x-2 transition-transform ${
                      isLevel2 ? 'text-orange-700' : 'text-gray-300'
                    }`}>
                      {competitor.industry_type}
                    </p>
                  </div>
                  <div className="group">
                    <h3 className={`font-semibold text-lg mb-1 ${
                      isLevel2 ? 'text-orange-800' : 'text-gray-200'
                    }`}>
                      Headquarters
                    </h3>
                    <p className={`transform group-hover:translate-x-2 transition-transform ${
                      isLevel2 ? 'text-orange-700' : 'text-gray-300'
                    }`}>
                      {competitor.headquarters}
                    </p>
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg mb-1 ${
                      isLevel2 ? 'text-orange-800' : 'text-gray-200'
                    }`}>
                      Key Products & Services
                    </h3>
                    <ul className="space-y-2">
                      {competitor.key_products_services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className={`flex items-center gap-2 group ${
                          isLevel2 ? 'text-orange-700' : 'text-gray-300'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            isLevel2 ? 'bg-orange-500' : 'bg-white'
                          }`}></div>
                          <span className="transform group-hover:translate-x-2 transition-transform">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </div>
);

export default function CompanyInfoDisplay() {
  const [showSWOT, setShowSWOT] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          <div className="lg:w-1/3 w-full animate-slide-in-left h-full">
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white p-6 border-b">
                <CardTitle className="text-3xl font-bold flex items-center gap-4">
                  <Building2 className="h-8 w-8 text-orange-500" />
                  {companyData.company.official_name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 h-full">
                <div className="grid gap-6 h-full">
                  <div className="flex items-start gap-4 group">
                    <Briefcase className="h-6 w-6 text-gray-700 mt-1 group-hover:text-orange-500 transition-colors" />
                    <div className="transform group-hover:translate-x-2 transition-transform">
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">Industry Type</h3>
                      <p className="text-gray-600">{companyData.company.industry_type}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <MapPin className="h-6 w-6 text-gray-700 mt-1 group-hover:text-orange-500 transition-colors" />
                    <div className="transform group-hover:translate-x-2 transition-transform">
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">Headquarters</h3>
                      <p className="text-gray-600">{companyData.company.headquarters}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group flex-grow">
                    <Building2 className="h-6 w-6 text-gray-700 mt-1 group-hover:text-orange-500 transition-colors" />
                    <div className="transform group-hover:translate-x-2 transition-transform">
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">Key Products & Services</h3>
                      <ul className="space-y-2 text-gray-600">
                        {companyData.company.key_products_services.map((service, index) => (
                          <li key={index} className="flex items-center gap-2 group/item">
                            <div className="w-2 h-2 bg-orange-500 rounded-full group-hover/item:scale-125 transition-transform"></div>
                            <span className="group-hover/item:translate-x-1 transition-transform">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setShowSWOT(!showSWOT)}
                    className="mt-0 w-full group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg px-4 py-3 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-3"
                  >
                    {showSWOT ? (
                      <>
                        <ArrowLeft className="w-6 h-6 transition-transform group-hover:scale-110 mr-2" />
                        <span className="font-semibold">Back to Competitors</span>
                      </>
                    ) : (
                      <>
                        <BarChart2 className="w-6 h-6 transition-transform group-hover:scale-110 mr-2" />
                        <span className="font-semibold">View SWOT Analysis</span>
                        <div className="ml-2 bg-white/20 rounded-full px-2 py-0.5 text-sm">
                          Get It Now
                        </div>
                      </>
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {showSWOT ? <SWOTAnalysis /> : <CompetitorCards />}
        </div>
      </div>
    </div>
  );
}