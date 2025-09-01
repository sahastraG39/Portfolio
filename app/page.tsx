'use client';

import Image from 'next/image';
import { EducationSection } from '@/components/sections/education-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ArticlesSection } from '@/components/sections/articles-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        {/* Hero Section - Clean & Minimalist */}
        <section id="me" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Profile Photo - Subtle & Clean */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full border-4 border-blue-200 overflow-hidden shadow-lg">
                    <Image
                      src="/profile-photo.jpg.jpg"
                      alt="Sahastra Gunasegaram"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover object-center"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                  {/* Status indicator */}
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-teal-500 rounded-full border-2 border-white"></div>
                </div>
              </div>

              {/* Hero Content - Clean Typography */}
              <div className="text-center lg:text-left space-y-6">
                {/* Name */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Sahastra Gunasegaram
                </h1>

                {/* Subtitle */}
                <h2 className="text-xl sm:text-2xl font-medium text-gray-600">
                  Software Engineering in GenAI (interning)
                </h2>

                {/* About Me */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">A Bit About Me</h3>
                  <p className="text-base text-gray-600 leading-relaxed max-w-5xl">
                    Passionate software engineer with expertise in generative AI, machine learning, data science, and
                    web development. Currently interning in Software Engineering for GenAI while pursuing my final year in
                    Statistics and Operations Research. I love turning complex data into meaningful
                    insights and building innovative AI-powered solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section with subtle background */}
        <div className="relative z-10">
          <EducationSection />
        </div>

        {/* Projects Section with gradient background */}
        <div className="relative z-10 bg-gradient-to-r from-gray-50 to-blue-50">
          <ProjectsSection />
        </div>

        {/* Articles Section with subtle background */}
        <div className="relative z-10">
          <ArticlesSection />
        </div>

        {/* Skills Section with gradient background */}
        <div className="relative z-10 bg-gradient-to-r from-blue-50 to-indigo-50">
          <SkillsSection />
        </div>

        {/* Contact Section with subtle background */}
        <div className="relative z-10">
          <ContactSection />
        </div>

        {/* Footer with enhanced styling */}
        <footer className="relative z-10 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Personal Info */}
              <div className="space-y-4">
                {/* Brand */}
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-3">SG</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Statistics graduate and Software Engineering in GenAI enthusiast passionate about data science, machine
                    learning, and turning complex data into meaningful insights.
                  </p>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/sahastraG39"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-300 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sahastra-gunasegaram?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJqT4EU28R%2BOMx8Rtg1iaiw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-300 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="mailto:arthyhgunam63@gmail.com"
                      className="text-gray-400 hover:text-blue-300 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                    >
                      <span className="sr-only">Email</span>
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Expert Thoughts */}
              <div className="space-y-4">
                <div>
                  <div className="bg-gray-800 p-5 rounded-lg border border-blue-700">
                    <blockquote className="text-base italic text-gray-200 mb-3">
                      &ldquo;In God we trust, all others bring data.&rdquo;
                    </blockquote>
                    <p className="text-sm text-gray-400 mb-3">- W. Edwards Deming</p>
                    <button
                      onClick={() => {
                        const explanation = document.getElementById('quote-explanation');
                        if (explanation) {
                          explanation.style.display =
                            explanation.style.display === 'none' ? 'block' : 'none';
                        }
                      }}
                      className="text-blue-300 hover:text-blue-200 text-sm font-medium transition-colors bg-blue-900 hover:bg-blue-800 px-3 py-2 rounded-lg"
                    >
                      Read More
                    </button>
                    <div
                      id="quote-explanation"
                      className="hidden mt-3 p-3 bg-gray-700 rounded-lg border border-blue-600"
                    >
                      <p className="text-sm text-gray-200 mb-2 font-medium">What this means:</p>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Don&apos;t just say &ldquo;this model works well&rdquo;
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Show the data - accuracy scores, performance metrics, validation results
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Prove your claims with concrete evidence
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Let the numbers speak for themselves
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-blue-700 mt-8 pt-6 text-center">
              <p className="text-gray-400 text-sm">© 2025 Sahastra Gunasegaram.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
