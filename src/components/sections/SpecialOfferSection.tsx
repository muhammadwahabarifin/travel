import React from "react";
import Header from "../common/Header";
import { motion } from "framer-motion";
import { SPECIAL } from "@/constant";
import SpecialOfferCard from "../cards/SpecialOfferCard";
import customVariants from "@/lib/animation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SpecialOfferSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row-reverse gap-4 justify-between items-end">
        <div>
          <Header
            title="Special Offer"
            description="Check out our special offer and discounts"
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
        variants={customVariants.cardWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex justify-between flex-col lg:flex-row gap-4 mt-16 md:mt-[100px]"
      >
        {SPECIAL.map((item, index) => (
          <motion.div key={index} variants={customVariants.cardItem}>
            <SpecialOfferCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SpecialOfferSection;
