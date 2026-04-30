import Hero from "@/components/Hero";
import Mentors from "@/components/Mentors";
import NewRelease from "@/components/NewRelease";
import Popular from "@/components/Popular";
import Search from "@/components/Search";
import Tips from "@/components/Tips";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-11/12  mx-auto">
      <Hero></Hero>
      <Search></Search>
      <Popular></Popular>
      <NewRelease></NewRelease>
      <Tips></Tips>
      <Mentors></Mentors>

    </div>
  );
}