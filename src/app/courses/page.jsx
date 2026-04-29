import { PopularData } from "@/lib/data";
import Cart from "../../components/Cart";

const Courses = async () => {
  const data = await PopularData();
  return (
    <div className="max-w-11/12 mx-auto my-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
           Explore Our World-Class Courses
        </h2>
        <p className="text-gray-600  mx-auto  leading-relaxed">
          Dive into our curated selection of industry-leading programs designed
          to help you master new skills. From web <br /> development to creative arts,
          learn from the best instructors at your own pace.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6  justify-center ">
        {data.map((item) => (
          <Cart key={item.id} item={item}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Courses;
