"use client ";
import Image from "next/image";
import React from "react";
import { Search, Users, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <section className="relative py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 overflow-hidden animate__animated animate__fadeInUp">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
                Mentor-Based Learning Platform
              </div>

              <h1 className="text-5xl sm:text-6xl text-gray-900">
                Learn from
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Industry Experts
                </span>
              </h1>

              <p className="text-xl text-gray-600">
                Learn from expert mentors through interactive live sessions.
                Explore structured courses crafted by top performers who excel
                in their fields.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                  Book Free Demo
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors">
                  Find a Mentor
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Users size={20} />
                    <span className="text-2xl text-gray-900">500+</span>
                  </div>
                  <p className="text-gray-600">Active Mentors</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-purple-600 mb-2">
                    <BookOpen size={20} />
                    <span className="text-2xl text-gray-900">1200+</span>
                  </div>
                  <p className="text-gray-600">Classes</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-green-600 mb-2">
                    <Search size={20} />
                    <span className="text-2xl text-gray-900">98%</span>
                  </div>
                  <p className="text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Students learning together"
                  width={200}
                  height={200}
                  className="rounded-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white">
                      ✓
                    </div>
                    <div>
                      <p className="text-gray-500">Newly joined course</p>
                      <p className="text-gray-900">Full Stack Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
