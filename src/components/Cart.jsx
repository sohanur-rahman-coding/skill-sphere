import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Popular = ({ item }) => {
  console.log(item);
  return (
    <div className="card bg-base-100 shadow animate__animated animate__fadeInUp">
      <div className="card-body p-2">
        {/* Course Image */}

        <div className="w-full h-[200px] overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={200}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        {/* Title */}
        <p className="card-title">{item.title}</p>

        {/* Instructor */}

        <p className="text-left  text-gray-600">
          Instructor:{" "}
          <span className="font-semibold text-black">{item.instructor}</span>
        </p>
        {/* release date */}

        <p className="text-left  text-gray-600">
          Release date: {" "}
           <span className="font-semibold text-black">{item.releaseDate}</span>
        </p>

        {/* Rating + Views */}
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1">
            <IoIosStar className="text-yellow-500" />
            {item.rating}
          </span>

          <Link href={`/courses/${item.id}`}>
            <button className="btn btn-sm btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popular;
