"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, MapPin, Search } from "lucide-react";
import { useState } from "react";

const HeroSearch = () => {
  const [isLocationSetOpen, setIsLocationSetOpen] = useState(false);
  return (
    <div className="flex xl:w-3/4 border-2 p-1 rounded-full  lg:pr-3 relative">
      <Button
        onClick={() => setIsLocationSetOpen(!isLocationSetOpen)}
        onBlur={() => setIsLocationSetOpen(!isLocationSetOpen)}
        className="rounded-l-full rounded-r-xl bg-green-500 py-6 lg:text-lg"
      >
        <MapPin size={22} className="hidden md:block"></MapPin>Location
        <ChevronDown />
      </Button>
      <Input className="py-6 focus-visible:ring-0 border-none focus-visible:ring-offset-0 bg-transparent shadow-none"></Input>
      <Button className=" bg-green-500 py-6 px-5 text-lg  rounded-full">
        <Search />
      </Button>
    </div>
  );
};

export default HeroSearch;
