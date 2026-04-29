const learningTips = [
  {
    id: 1,
    title: "Pomodoro Technique",
    category: "Time Management",
    description:
      "25 minute porashona kore 5 minute break nio. Ete brain refresh thake.",
    icon: "⏱️",
    color: "bg-red-100 text-red-600",
  },
  {
    id: 2,
    title: "Active Recall",
    category: "Study Technique",
    description:
      "Ja porle seta eka eka nijeke bujhao ba quiz koro. Memory te bhalo thakbe.",
    icon: "🧠",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    title: "Batching Tasks",
    category: "Productivity",
    description:
      "Soman dhoroner kaj gulo eksathe koro jate focus bar bar change na hoy.",
    icon: "📁",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    title: "The 80/20 Rule",
    category: "Efficiency",
    description:
      "Tomar 20% effort thekei 80% result ashe. Tai main topics agey porbe.",
    icon: "📊",
    color: "bg-purple-100 text-purple-600",
  },
];

const Tips = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50 px-6">
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
