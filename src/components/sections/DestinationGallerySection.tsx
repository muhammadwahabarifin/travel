import React from "react";
import Header from "../common/Header";
import { GALLERY } from "@/constant";
import DestinationGalleryCard from "../cards/DestinationGalleryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DestinationGallerySection() {
  return (
    <section>
      <div className="flex  flex-col md:flex-row justify-between items-end">
        <div>
          <Header
            title="Destination Gallery"
            description="Our photo gallery on trip"
            isLongUnderline
          />
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="hover:cursor-pointer">
            <ChevronLeft className="w-[40px] h-[40px] bg-primary rounded-md text-white" />
          </div>
          <div className="hover:cursor-pointer">
            <ChevronRight className="w-[40px] h-[40px] bg-primary rounded-md text-white" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 mt-16 md:mt-[100px]">
        {GALLERY.map((item, index) => (
          <DestinationGalleryCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
}
