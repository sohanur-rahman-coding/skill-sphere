const learningTips = [
  {
    id: 1,
    title: "Pomodoro Technique",
    category: "Time Management",
    description: "Study for 25 minutes followed by a 5-minute break to maintain high levels of focus and mental clarity.",
    icon: "⏱️",
    color: "bg-red-100 text-red-600"
  },
  {
    id: 2,
    title: "Active Recall",
    category: "Study Technique",
    description: "Test your knowledge by quizzing yourself or summarizing concepts without looking at your notes.",
    icon: "🧠",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 3,
    title: "Batching Tasks",
    category: "Productivity",
    description: "Group similar tasks together to reduce cognitive load and prevent frequent context switching.",
    icon: "📁",
    color: "bg-green-100 text-green-600"
  },
  {
    id: 4,
    title: "The 80/20 Rule",
    category: "Efficiency",
    description: "Identify the 20% of core concepts that produce 80% of your learning results to maximize progress.",
    icon: "📊",
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 5,
    title: "Spaced Repetition",
    category: "Memory",
    description: "Review learned material at increasing intervals to move information into your long-term memory.",
    icon: "🔁",
    color: "bg-orange-100 text-orange-600"
  },
  {
    id: 6,
    title: "Feynman Technique",
    category: "Comprehension",
    description: "Try to explain a complex topic in simple terms as if you were teaching it to a beginner.",
    icon: "👨‍🏫",
    color: "bg-teal-100 text-teal-600"
  },
  {
    id: 7,
    title: "Mind Mapping",
    category: "Visualization",
    description: "Create visual diagrams to connect different ideas and see the bigger picture of what you are learning.",
    icon: "🗺️",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    id: 8,
    title: "Deep Work",
    category: "Deep Focus",
    description: "Eliminate all distractions and work in a state of intense concentration for extended periods.",
    icon: "🧘",
    color: "bg-rose-100 text-rose-600"
  }
];

const Tips = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50 px-6 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
               Master Your Learning
            </h2>
            <p className="text-gray-500 mt-2">
              Study smarter, not harder, with these proven techniques.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningTips.map((tip) => (
              <div
                key={tip.id}
                className="p-6 rounded-2xl shadow border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 ${tip.color} rounded-lg flex items-center justify-center text-2xl mb-4`}
                >
                  {tip.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider opacity-60">
                  {tip.category}
                </span>
                <h3 className="text-lg font-bold mt-1 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tips;
