import Image from "next/image";
import React from "react";

// Data array-ta eikhane thakbe (ba api theke asle map-e use hobe)
const instructors = [
  {
    "id": 1,
    "name": "Dr. Angela Yu",
    "role": "Lead Web Developer",
    "image": "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    "rating": 4.9,
    "courses": 12
  },
  {
    "id": 2,
    "name": "Sarah Johnson",
    "role": "UI/UX Design Expert",
    "image": "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    "rating": 4.8,
    "courses": 8
  },
  {
    "id": 3,
    "name": "David Miller",
    "role": "Data Scientist",
    "image": "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    "rating": 4.9,
    "courses": 15
  },
  {
    "id": 4,
    "name": "Elena Rodriguez",
    "role": "Creative Photographer",
    "image": "https://images.pexels.com/photos/3812739/pexels-photo-3812739.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    "rating": 4.7,
    "courses": 6
  }
];

const Mentors = () => {
  return (
    <section id="mentors" className="py-16  px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our Top Instructors
          </h2>
          <p className="text-gray-500 mt-3">Learn from industry experts and take your skills to the next level.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((teacher) => (
            <div
              key={teacher.id}
              className="group bg-white p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-5">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {teacher.name}
                </h3>
                <p className="text-blue-500 text-sm font-semibold mb-4">
                  {teacher.role}
                </p>

                {/* Footer Stats */}
                <div className="flex items-center justify-between border-t pt-4 text-sm font-medium text-gray-600">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <span>⭐</span>
                    <span className="text-gray-700">{teacher.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-blue-600">📚</span>
                    <span>{teacher.courses} Courses</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;