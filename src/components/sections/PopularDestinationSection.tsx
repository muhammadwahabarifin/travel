import React from "react";
import Header from "../common/Header";
import { motion } from "framer-motion";
import customVariants from "@/lib/animation";
import { DESTINATION } from "@/constant";
import PopularDestinationCard from "../cards/PopularDestinationCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PopularDestinationSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-end">
        <div>
          <Header
            title="Popular Destination"
            description="Most popular destinations around the world, from historical places to natural wonders."
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

      <motion.div
        variants={customVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 mt-16 md:mt-[100px]"
      >
        {DESTINATION.map((item, index) => (
          <motion.div key={index} variants={customVariants.cardItem}>
            <PopularDestinationCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PopularDestinationSection;
