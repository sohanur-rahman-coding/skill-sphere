import { PopularData } from "@/lib/data";
import Cart from "../../components/Cart";

const Courses = async() => {
     const data = await PopularData();
    return (
        <div className="max-w-11/12 mx-auto my-10">
            <div className="grid grid-cols-3 gap-6  justify-center ">
          {data.map((item) => (
            <Cart key={item.id} item={item}></Cart>
          ))}
        </div>
        </div>
    );
};

export default Courses;