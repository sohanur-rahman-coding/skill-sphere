import { PopularData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import "animate.css";
import {
  IoIosStar,
  IoIosTime,
  IoIosStats,
  IoMdCheckmarkCircleOutline,
  IoMdInfinite,
  IoMdRibbon,
  IoIosDesktop,
} from "react-icons/io";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = await PopularData();
  const course = data.find((item) => item.id === parseInt(id));

  if (!course)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center animate__animated animate__fadeIn">
          <h1 className="text-6xl font-bold text-gray-200">404</h1>
          <p className="text-xl font-semibold text-gray-600 mt-4">
            Course Not Found!
          </p>
        </div>
      </div>
    );

  const curriculum = [
    {
      title: "Module 1: Introduction to the Course",
      lessons: ["Welcome & Setup", "Course Roadmap", "Basic Concepts"],
    },
    {
      title: "Module 2: Core Fundamentals",
      lessons: [
        "Deep Dive into Logic",
        "Building Your First Component",
        "Best Practices",
      ],
    },
    {
      title: "Module 3: Advanced Projects",
      lessons: [
        "Mastering Performance",
        "Real-world Project Implementation",
        "Deployment Guide",
      ],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Banner Accent */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />

      <div className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* LEFT COLUMN: Main Content */}
          <div className="lg:col-span-2 space-y-12 animate__animated animate__fadeInLeft">
            <section className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                {course.category || "SkillSphere Special"}
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-slate-600 text-xl leading-relaxed max-w-3xl">
                {course.description}
              </p>

              {/* Quick Stats Bar */}
              <div className="flex flex-wrap items-center gap-8 py-6 border-y border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {course.instructor?.[0]}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">
                      Instructor
                    </p>
                    <p className="font-bold text-slate-900">
                      {course.instructor}
                    </p>
                  </div>
                </div>

                <div className="h-10 w-[1px] bg-slate-200 hidden md:block" />

                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-tighter">
                    Rating
                  </span>
                  <div className="flex items-center gap-1.5">
                    <IoIosStar className="text-amber-400 text-xl" />
                    <span className="font-bold text-slate-900">
                      {course.rating}
                    </span>
                    <span className="text-slate-400 text-xs">
                      (1.2k reviews)
                    </span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-tighter">
                    Duration
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                    <IoIosTime className="text-blue-500 text-xl" />{" "}
                    {course.duration}
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-tighter">
                    Level
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                    <IoIosStats className="text-emerald-500 text-xl" />{" "}
                    {course.level}
                  </div>
                </div>
              </div>
            </section>

            {/* Learning Outcomes */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 animate__animated animate__fadeInUp animate__delay-1s">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                What you'll master
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  "Master industry-standard tools",
                  "Build real-world professional projects",
                  "Work with modern tech stacks",
                  "Get a certificate of completion",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="mt-1 bg-emerald-50 p-1 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <IoMdCheckmarkCircleOutline className="text-xl" />
                    </div>
                    <span className="text-slate-700 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Course Content
              </h2>
              <div className="space-y-4">
                {curriculum.map((module, idx) => (
                  <div
                    key={idx}
                    className="group border border-slate-200 rounded-2xl bg-white overflow-hidden hover:border-blue-300 transition-all shadow-sm"
                  >
                    <div className="bg-slate-50/50 px-6 py-4 flex justify-between items-center border-b border-slate-100">
                      <span className="font-bold text-slate-800">
                        {module.title}
                      </span>
                      <span className="px-3 py-1 bg-white border rounded-lg text-[10px] font-black text-slate-500 uppercase">
                        {module.lessons.length} Lessons
                      </span>
                    </div>
                    <ul className="divide-y divide-slate-50">
                      {module.lessons.map((lesson, i) => (
                        <li
                          key={i}
                          className="px-6 py-4 flex items-center justify-between hover:bg-blue-50/30 transition cursor-pointer group/item"
                        >
                          <div className="flex items-center gap-4 text-slate-600">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                              <span className="text-xs">▶</span>
                            </div>
                            <span className="font-medium">{lesson}</span>
                          </div>
                          <span className="text-xs text-slate-400 font-mono">
                            10:00
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Sidebar */}
          <aside className="lg:sticky lg:top-12 animate__animated animate__fadeInRight">
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
              <div className="aspect-video relative group">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 scale-90 group-hover:scale-100 transition-transform">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-4xl font-black text-slate-900">
                    $19.99
                  </span>
                  <span className="text-slate-400 line-through text-lg">
                    $99.99
                  </span>
                  <span className="ml-auto bg-red-50 text-red-600 px-2 py-1 rounded-md font-bold text-xs">
                    80% OFF
                  </span>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-blue-300 hover:-translate-y-1 active:scale-95">
                    Enroll Now
                  </button>
                  <button className="w-full border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-bold py-4 rounded-2xl transition-all">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-10 space-y-5">
                  <p className="font-bold text-slate-900 text-sm uppercase tracking-widest">
                    Premium Features
                  </p>
                  <div className="space-y-4">
                    <FeatureItem
                      icon={<IoIosDesktop />}
                      text="Access on mobile and TV"
                    />
                    <FeatureItem
                      icon={<IoMdRibbon />}
                      text="Certificate of completion"
                    />
                    <FeatureItem
                      icon={<IoMdInfinite />}
                      text="Full lifetime access"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-center text-white shadow-xl">
              <p className="text-slate-300 text-sm mb-1">
                Need corporate training?
              </p>
              <button className="text-blue-400 font-bold hover:text-blue-300 transition-colors">
                Contact Our Sales Team →
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

// Helper Sub-component
const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-slate-600 font-medium text-sm">
    <span className="text-blue-600 text-xl">{icon}</span>
    {text}
  </div>
);

export default CourseDetailsPage;
