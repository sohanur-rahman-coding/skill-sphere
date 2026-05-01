import { PopularData } from "@/lib/data";

import AllCourses from "./AllCourses";


const Courses = async () => {
  const data = await PopularData();

  return (
    <div className="max-w-11/12 mx-auto my-10">
      <AllCourses data={data}></AllCourses>
    </div>
  );
};

export default Courses;
