import Hero from "@/components/Hero";
import Mentors from "@/components/Mentors";
import Popular from "@/components/Popular";
import Tips from "@/components/Tips";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-11/12  mx-auto">
      <Hero></Hero>
      <Popular></Popular>
      <Tips></Tips>
      <Mentors></Mentors>
    </div>
  );
}
