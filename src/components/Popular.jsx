import { PopularData } from "@/lib/data";
import Cart from "./Cart";

const Popular = async () => {
  const data = await PopularData();
 
  return (
    <div className="bg-gray-50 py-10">
      <div className=" container text-center mx-auto ">
        <h2 className="text-4xl font-bold mt-4">Popular Courses</h2>
        <p className="">
          Explore highly-rated courses chosen based on learner feedback and
          performance. <br /> Each course card highlights key details including
          instructor, rating, and a quick option to view full course details.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-auto justify-center ">
          {data.sort((a, b) => b.rating - a.rating).slice(0, 3).map((item) => (
            <Cart key={item.id} item={item}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
