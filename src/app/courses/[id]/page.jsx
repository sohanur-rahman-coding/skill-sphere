import { CourseDetails, PopularData } from "@/lib/data";
import React from "react";

const CourseDetailsPage = async ({params}) => {
  const { id } = await params;
  const data = await PopularData()
 const course = data.find(item => item.id === parseInt(id));
 console.log(course);
  return <div>

    
  </div>;
};

export default CourseDetailsPage;
