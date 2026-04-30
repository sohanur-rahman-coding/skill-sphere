import { PopularData } from "@/lib/data";
import Cart from "./Cart";

const NewRelease = async () => {
  const data = await PopularData();
  return (
    <div className="bg-gray-50 py-10">
      <div className=" container text-center mx-auto ">
        <h2 className="text-4xl font-bold mt-4">New Release Courses</h2>
        <p className="mt-3">Unlock new career opportunities with SkillSphere’s latest releases. Our curriculum is constantly updated to reflect the evolving <br /> job market, ensuring you learn the exact tools and techniques used by professionals worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-auto justify-center ">
          {data
            .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
            .slice(0, 3)
            .map((item) => (
              <Cart key={item.id} item={item}></Cart>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewRelease;
