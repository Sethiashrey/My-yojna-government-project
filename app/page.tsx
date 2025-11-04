"use client";
import Image from "next/image";
import Link from "next/link";
import {
  languages,
  stats,
  howItWorks,
  faqs,
  categories,
  features,
} from "./constants";
import IconComponent from "./components/iconComponent";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    const userInfo = sessionStorage.getItem("userDisplayInfo");
    setUser(userInfo);
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[600px]">
        <Image
          src="/family.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center brightness-100 "
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-24 sm:py-32 lg:py-40">
          <div className="max-w-4xl">
            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              <span className="text-white">Find Government</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Schemes Made Simple
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl mb-10 text-slate-300 leading-relaxed max-w-2xl font-light">
              MyYojana helps you discover relevant government schemes and
              benefits in your preferred language. Start your journey to better
              opportunities today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/schemes"
                className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Explore Schemes
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              {user && (
                <Link
                  href="/profile"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  Create Profile
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
              Browse by Category
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Explore schemes based on your interests and needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 group-hover:from-white/20 group-hover:to-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-blue-100 group-hover:border-white/20">
                    <IconComponent
                      name={category.icon}
                      className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-white transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed group-hover:text-blue-50 transition-colors">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Why Choose MyYojana?
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Simplifying access to government benefits for every Indian
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Language Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
              Available in Multiple Languages
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Access information in your preferred language
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className="group p-4 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 flex items-center gap-3 hover:scale-105 hover:shadow-md"
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors text-sm">
                  {lang.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
              How It Works
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Four simple steps to access government schemes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Connector Line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
                )}

                <div className="text-center group">
                  {/* Step Number */}
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all"></div>
                    <div className="relative text-6xl bg-gradient-to-br from-blue-50 to-cyan-50 w-24 h-24 rounded-2xl flex items-center justify-center border-2 border-blue-200 group-hover:border-blue-400 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Everything you need to know about MyYojana
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="flex-1">{faq.question}</span>
                </h3>
                <p className="text-slate-600 leading-relaxed pl-11">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-12 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                MyYojana
              </h3>
              <p className="text-slate-400 text-sm">
                Empowering citizens through accessible government schemes
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700/50 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} MyYojana. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
