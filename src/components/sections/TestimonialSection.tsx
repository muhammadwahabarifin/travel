import React from "react";
import Header from "../common/Header";
import { TESTIMONIAL } from "@/constant";
import TestimonialCard from "../cards/TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section>
      <div className="flex  flex-col md:flex-row justify-between items-end">
        <div>
          <Header
            title="Traveler's Experiences"
            description="Here some awesome feedback from our travelers"
            isLongUnderline
          />
        </div>
      </div>

      <div className="flex justify-between flex-col lg:flex-row gap-4 mt-16 md:mt-[100px]">
        {TESTIMONIAL.map((item, index) => (
          <TestimonialCard {...item} key={index} />
        ))}
      </div>

      <div className="flex justify-end mt-16 md:mt-[100px]">
        <div className="flex items-center gap-[20px]">
          <div className="hover:cursor-pointer">
            <ChevronLeft className="w-[40px] h-[40px] bg-primary rounded-md text-white" />
          </div>
          <div className="hover:cursor-pointer">
            <ChevronRight className="w-[40px] h-[40px] bg-primary rounded-md text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
