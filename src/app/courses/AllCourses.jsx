"use client";
import { PopularData } from "@/lib/data";
import Cart from "../../components/Cart";
import { Search } from "lucide-react";
import { useState } from "react";
import "animate.css"; // Ensure this is installed via npm install animate.css

const AllCourses = ({ data }) => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const filterData = data.filter((course) =>
    course.title.toLowerCase().includes(value?.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 my-2 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8 animate__animated animate__fadeInDown">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Explore Our <span className="text-blue-600">World-Class</span> Courses
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Dive into our curated selection of industry-leading programs. 
          Master new skills at your own pace with top-tier instructors.
        </p>
      </div>

      {/* Search Bar Section */}
      <div className="mb-8 animate__animated animate__fadeIn animate__delay-1s">
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            onChange={handleInput}
            value={value}
            type="text"
            className="block w-full pl-12 pr-24 py-4 border-2 border-slate-100 rounded-2xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-50/50 focus:border-blue-500 text-lg transition-all shadow-xl shadow-slate-100/50"
            placeholder="Search for courses (e.g. React, UI/UX)..."
          />
          <div className="absolute inset-y-2 right-2 flex items-center">
             <span className="hidden md:block text-xs font-bold text-slate-400 px-3 border-r mr-2">
                {filterData.length} Results
             </span>
             <button className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition-all active:scale-95 shadow-lg">
                Search
             </button>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      {filterData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterData.map((item, index) => (
            <div 
              key={item.id} 
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered entry
            >
              <Cart item={item} />
            </div>
          ))}
        </div>
      ) : (
        // Empty Search State
        <div className="text-center py-20 animate__animated animate__zoomIn">
          <div className="bg-slate-50 inline-block p-6 rounded-full mb-4">
            <Search className="h-12 w-12 text-slate-300" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800">No courses found</h3>
          <p className="text-slate-500 mt-2">Try adjusting your search terms or keywords.</p>
          <button 
            onClick={() => setValue("")}
            className="mt-6 text-blue-600 font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AllCourses;