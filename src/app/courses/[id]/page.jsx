import { PopularData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import {
  IoIosStar,
  IoIosTime,
  IoIosStats,
  IoMdCheckmarkCircleOutline,
} from "react-icons/io";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = await PopularData();
  const course = data.find((item) => item.id === parseInt(id));

  if (!course)
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Course Not Found!
      </div>
    );

  // Static curriculum data for now
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
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-white min-h-screen">
      <div className="grid lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {course.category || "SkillSphere Special"}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
              {course.title}
            </h1>
            <p className="text-gray-500 text-lg mt-4 leading-relaxed italic">
              `{course.description}`
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 border-b pb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                {course.instructor?.[0]}
              </div>
              <span className="font-medium text-black">
                {course.instructor}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <IoIosStar className="text-yellow-500 text-lg" />
              <span className="font-bold text-black">{course.rating}</span>{" "}
              (1,240 Ratings)
            </div>
            <div className="flex items-center gap-1 font-medium">
              <IoIosTime className="text-blue-500 text-lg" /> {course.duration}
            </div>
            <div className="flex items-center gap-1 font-medium">
              <IoIosStats className="text-green-500 text-lg" /> {course.level}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border">
            <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Master industry-standard tools",
                "Build real-world professional projects",
                "Work with modern tech stacks",
                "Get a certificate of completion",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2 text-gray-700">
                  <IoMdCheckmarkCircleOutline className="text-green-500 text-xl flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Course Content</h2>
            <div className="space-y-4">
              {curriculum.map((module, idx) => (
                <div key={idx} className="border rounded-xl overflow-hidden">
                  <div className="bg-gray-100 px-6 py-4 font-bold flex justify-between items-center">
                    <span>{module.title}</span>
                    <span className="text-xs text-gray-500 uppercase">
                      {module.lessons.length} Lessons
                    </span>
                  </div>
                  <ul className="bg-white divide-y">
                    {module.lessons.map((lesson, i) => (
                      <li
                        key={i}
                        className="px-6 py-3 flex items-center gap-3 text-gray-600 hover:bg-blue-50 cursor-pointer transition"
                      >
                        <span className="text-blue-400">▶</span> {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Action Card */}
        <div className="lg:sticky lg:top-10 space-y-6">
          <div className="border rounded-2xl overflow-hidden shadow-2xl bg-white">
            <div className="w-full h-[220px] relative">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
                  <span className="text-blue-600 text-xl ml-1">▶</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-black text-gray-900">
                  $19.99
                </span>
                <span className="text-gray-400 line-through text-lg">
                  $99.99
                </span>
                <span className="text-red-500 font-bold text-sm">80% OFF</span>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-200 active:scale-95">
                Enroll Now
              </button>

              <button className="w-full mt-3 border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-bold py-3 rounded-xl transition-all">
                Add to Cart
              </button>

              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <p className="font-bold text-gray-900 mb-2">
                  This course includes:
                </p>
                <p className="flex items-center gap-2">
                  📱 Access on mobile and TV
                </p>
                <p className="flex items-center gap-2">
                  📄 Certificate of completion
                </p>
                <p className="flex items-center gap-2">
                  ♾️ Full lifetime access
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <p className="text-blue-800 font-medium">
              Have questions? Contact Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
