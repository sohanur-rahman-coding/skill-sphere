import { CourseDetails, PopularData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { IoIosStar } from "react-icons/io";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = await PopularData();
  const course = data.find((item) => item.id === parseInt(id));
  console.log(course);
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="w-full h-[300px] relative rounded-xl overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{course.title}</h1>

          <p className="text-gray-600">
            Instructor:{" "}
            <span className="font-semibold text-black">
              {course.instructor}
            </span>
          </p>

          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <IoIosStar className="text-yellow-500" />
              {course.rating}
            </span>
            <span className="bg-gray-200 px-2 py-1 rounded">
              {course.level}
            </span>
            <span className="text-gray-500">{course.duration}</span>
          </div>

          <p className="text-gray-700">{course.description}</p>

          {/* CTA */}
          <button className="btn btn-primary mt-4">Enroll Now</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
        <p className="text-gray-600 leading-relaxed">
          This course will guide you step-by-step from beginner to advanced
          level. You will build real-world projects and gain hands-on experience
          in modern development technologies.
        </p>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
